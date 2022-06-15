// Selectors
const scores = document.querySelector('.scores');
const name = document.getElementById('name');
const score = document.getElementById('score');

export const getLeaderBoard = (leaderboard) => {
  let output = '';
  leaderboard.map((leader) => {
    output += `
      <li class="list-item"><p>${leader.user}: <span>${leader.score}</span></p></li>
              `;
    scores.innerHTML = output;
  });
};

export const postData = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7K5Mb2IEqF6pzV8ILX7k/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
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
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7K5Mb2IEqF6pzV8ILX7k/scores',
  );
  const data = await res.json();
  getLeaderBoard(data.result);
};
