import React, { Component } from 'react';

import './../styles/Age.css';

class Age extends Component {
  render() {
    return (
      <div className="Age">
        <div>{this.props.ageLabel}</div>
        <div className="AgeText"><input type="text" size="5" value={this.props.age}/></div>
      </div>
    );
  }
}

export default Age;
