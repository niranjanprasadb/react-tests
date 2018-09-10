import React, { Component } from 'react';
import Money from './Money';
import Age from './Age';

import './../styles/Income.css';

class Income extends Component {
  render() {
    return (
        <div className="Income">
          <div className="IncomeLabel">Annual Income</div>
          <div className="moneyAgeContainer">
              <Money moneyLabel="Annual salary:"/>
              <Age ageLabel="From age:"/>
              <Age ageLabel="To age:"/>
          </div>
        </div>
    );
  }
}

export default Income;
