import React, { Component } from 'react';
import SpendingSlider from './SpendingSlider';

import './../styles/Savings.css';

class Savings extends Component {

  render() {
    let expenditures = this.props.expenditures, expenditureSliders = [];
    expenditures.forEach((expenditure, index) => {
      expenditureSliders.push(
        <SpendingSlider key={index} sliderLabel={expenditure.name} amount={expenditure.amount}/>
      )
    })
    return (
        <div className="SavingsContainer">
          <div className="SpendLess">Try reducing your monthly spending to see how your forecast could improve!</div>
          {expenditureSliders}
          <div className="TotalSavings">This means you are saving {this.props.savings} per month</div>
          <div className="FindWaysContainer"><div className="FindWays">Find ways to save</div></div>
          <div className="ThumbsUpDown"><u>Was this helpful?</u></div>
        </div>
    );
  }
}

export default Savings;
