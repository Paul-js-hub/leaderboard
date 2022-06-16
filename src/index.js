import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { postData, getRefreshData } from './modules/leaderboard.js';

// Selectors

const refresh = document.querySelector('.refresh');
const submitBtn = document.querySelector('.submit-btn');

refresh.addEventListener('click', getRefreshData);

window.addEventListener('load', getRefreshData);
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  postData();
});
