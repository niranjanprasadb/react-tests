import React, { Component } from 'react';
import Money from './Common/Money';
import Age from './Common/Age';

import './../styles/Spending.css';

class Spending extends Component {
  render() {
    return (
      <div className="Spending">
        <div className="SpendingLabel">Monthly spending</div>
        <div className="moneyAgeContainer">
          <Money moneyLabel="Mortgage:"/>
          <Age ageLabel="From age:"/>
          <Age ageLabel="To age:"/>
        </div>
        <div className="moneyAgeContainer">
          <Money moneyLabel="Bills:"/>
          <Age ageLabel="From age:"/>
          <Age ageLabel="To age:"/>
        </div>
        <div className="moneyAgeContainer">
          <Money moneyLabel="General spending:"/>
          <Age ageLabel="From age:"/>
          <Age ageLabel="To age:"/>
        </div>
      </div>
    );
  }
}

export default Spending;
