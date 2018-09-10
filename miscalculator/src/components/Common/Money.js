import React, { Component } from 'react';

import './../../styles/Money.css';

class Money extends Component {
  render() {
    return (
      <div className="Money">
        <div>{this.props.moneyLabel}</div>
        <input type="text" size="10"/>
      </div>
    );
  }
}

export default Money;
