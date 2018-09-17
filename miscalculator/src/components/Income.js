import React, { Component } from 'react';
import Money from './Money';
import Age from './Age';
import MISHelper from './../helper/MISHelper';

import './../styles/Income.css';

class Income extends Component {

  constructor(props) {
    super();
    this.propagateChange = this.propagateChange.bind(this);
  }

  propagateChange(amount) {
    this.props.propagateChange(amount);
  }

  render() {

    let incomesArray = this.props.incomes, incomeDiv=[], misHelper = new MISHelper();
    incomesArray.forEach((income, index) => {
      let incomeKeys = Object.keys(income);
      let fromAge = misHelper.formatAge(incomeKeys[1]);
      let toAge = misHelper.formatAge(incomeKeys[2]);
      incomeDiv.push(
                      <div key={index} className="moneyAgeContainer">
                          <Money moneyLabel={income.name} amount={income.amount} propagateChange={this.propagateChange}/>
                          <Age ageLabel={fromAge} age={income.from_age}/>
                          <Age ageLabel={toAge} age={income.to_age}/>
                      </div>)
                   });
      return (
          <div className="Income">
            <div className="IncomeLabel">Annual Income</div>
            {incomeDiv}
          </div>
      );
    }
  }

export default Income;
