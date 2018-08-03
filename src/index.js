import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game'
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
