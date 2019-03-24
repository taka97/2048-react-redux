import React, { Component } from 'react';

import Tile from './Tile';
import Grid from './Grid';

class Board extends Component {
  render() {
    return (
      <wrapper ref="board">
        <container ref="titles" id="tiles">
          <Tile value="2048" />>
        </container>
        <Grid size="4"/>
      </wrapper>
    );
  }
}

export default Board;
