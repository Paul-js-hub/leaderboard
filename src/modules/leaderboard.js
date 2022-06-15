const leaderboard = [
  { name: 'Paul', score: 100 },
  { name: 'Winnie', score: 50 },
  { name: 'Fridah', score: 150 },
  { name: 'Peter', score: 70 },
];

// Selectors
const scores = document.querySelector('.scores');

const getLeaderBoard = () => {
  leaderboard.map((leader) => {
    const leaderElement = document.createElement('li');
    leaderElement.classList.add('list-item');
    const output = `
      <p>${leader.name}: <span>${leader.score}</span></p>
              `;
    leaderElement.innerHTML = output;
    scores.appendChild(leaderElement);
  });
};

export default getLeaderBoard;