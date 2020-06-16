import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LeetCodeProblemsCount from "./LeetCodeProblemsCount"
import CodeChefProblemsCount from "./CodeChefProblemsCount"
import * as serviceWorker from './serviceWorker';

/*
ReactDOM.render(
  <React.StrictMode>
    <LeetCodeProblemsCount />
  </React.StrictMode>,
  document.getElementById('leetcode')
);

ReactDOM.render(
  <React.StrictMode>
    <CodeChefProblemsCount />
  </React.StrictMode>,
  document.getElementById('codechef')
);
*/



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
