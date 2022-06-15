import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import {postData, getRefreshData} from './modules/leaderboard.js';

//Selectors

let refresh = document.querySelector('.refresh');
let submitBtn = document.querySelector('.submit-btn')

refresh.addEventListener('click', getRefreshData);

window.addEventListener('load', getRefreshData);
submitBtn.addEventListener('click', ()=>{
    postData();
});
