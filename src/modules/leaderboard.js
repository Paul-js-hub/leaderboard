// Selectors
const scores = document.querySelector('.scores');
const name = document.getElementById('name');
const score = document.getElementById('score');

export const getLeaderBoard = (leaderboard) => {
  let output = '';
  leaderboard.map((leader) => {
    output += `
    <tr>
    <td>${leader.user}</td>
    <td>${leader.score}</td>
  </tr>
              `;
    scores.innerHTML = output;
  });
};

export const postData = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dgHPKWE2TV4mqSkx1sAA/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
        index: Date.now(),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  name.value = '';
  score.value = '';
};

export const getRefreshData = async () => {
  const res = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dgHPKWE2TV4mqSkx1sAA/scores',
  );
  const data = await res.json();
  getLeaderBoard(data.result);
};
