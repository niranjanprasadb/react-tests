import React, { Component } from 'react';
import Money from './Money';
import Age from './Age';
import MISHelper from './../helper/MISHelper';

import './../styles/Spending.css';

class Spending extends Component {

  render() {
    let expenditures = this.props.expenditures, expendituresDIV = [], misHelper = new MISHelper();
    expenditures.forEach((expenditure, index) => {
      let expenditureKeys = Object.keys(expenditure);
      let fromAge = misHelper.formatAge(expenditureKeys[1]);
      let toAge = misHelper.formatAge(expenditureKeys[2]);
      expendituresDIV.push(
                      <div key={index} className="moneyAgeContainer">
                          <Money moneyLabel={expenditure.name} amount={expenditure.amount}/>
                          <Age ageLabel={fromAge} age={expenditure.from_age}/>
                          <Age ageLabel={toAge} age={expenditure.to_age}/>
                      </div>)
                   });
    return (
      <div className="Spending">
        <div className="SpendingLabel">Monthly spending</div>
        {expendituresDIV}
      </div>
    );
  }
}

export default Spending;
