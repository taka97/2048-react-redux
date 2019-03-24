import React from 'react';
import _ from 'lodash';

const Grid = ({size = 4}) => {
  const cells = _.range(Math.pow(size, 2));
  const cellViews = _.map(cells, index => {
    return <column key={index}></column>
  });
  return (
    <container id="grid">
      {cellViews}
    </container>
  );
}

export default Grid;
