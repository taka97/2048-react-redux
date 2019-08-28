import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import Game from './containers/Game';
import store from './store';

import './styles/index.scss';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
