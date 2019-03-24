import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';

import Game from './Game';

const Root = () => (
  <div>
    <Provider store={store}>
      <Game />
    </Provider>
  </div>
);

export default Root;
