import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

let nav = {home : '#', work : '#', contacts : '#'};
let address = ['Moscow', 'Arbat', '10-5'];
let phone = ['890453523525', '825235255'];

ReactDOM.render(<App nav = {nav} address = {address} phone = {phone} title = 'Footer title'/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
