import React, { Component } from 'react';
import classNames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';

class Tile extends Component {
  render() {
    const value = this.props.value;

    const cx = classNames(
      "tile",
      `tile-${value}`,
      `cell-0-0`
    );

    return (
      <CSSTransitionGroup>
        <div className={cx} key="1">
          {value}
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default Tile;
