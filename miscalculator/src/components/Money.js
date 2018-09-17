import React, { Component } from 'react';

import './../styles/Money.css';

class Money extends Component {

  constructor(props) {
    super();
    this.state = {amount:props.amount}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("Money");
    this.props.propagateChange(event.target.value);
    this.setState({amount:event.target.value});
  }

  render() {
    return (
      <div className="Money">
        <div>{this.props.moneyLabel}</div>
        <div className="MoneyText"><input type="text" size="10" value={this.state.amount} onChange={this.handleChange}/></div>
      </div>
    );
  }
}

export default Money;
