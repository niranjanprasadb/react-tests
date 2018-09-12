import React, { Component } from 'react';

import './../styles/Money.css';

class Money extends Component {
  render() {
    return (
      <div className="Money">
        <div>{this.props.moneyLabel}</div>
        <div className="MoneyText"><input type="text" size="10"/></div>
      </div>
    );
  }
}

export default Money;
