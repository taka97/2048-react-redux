/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';

import Board from '../components/Board';

class Game extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    // let resultView;
    // if (result) resultView = <Result result={result}/>;

    return (
      <main>
        <div id="score">
          {/* {resultView} */}
          <h3> Score: 0</h3>
        </div>
        <button type="button">New Game</button>
        <button type="button">Save Game</button>
        <Board />
      </main>
    );
  }
}

export default connect(null, null)(Game);
