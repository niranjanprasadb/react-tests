import React, { Component } from 'react';
import BillsSlider from './BillsSlider';
import MortgageSlider from './MortgageSlider';
import GeneralSpendingSlider from './GeneralSpendingSlider';

import './../styles/Savings.css';

class Savings extends Component {
  render() {
    return (
        <div className="">
          <div className="SpendLess">Try reducing your monthly spending to see how your forecast could improve</div>
          <MortgageSlider/>
          <BillsSlider/>
          <GeneralSpendingSlider/>
          <div className="TotalSavings">This means you are saving xyz per month</div>
          <div className="FindWays">Find ways to save</div>
          <div className="ThumbsUpDown">Was this helpful?</div>
        </div>
    );
  }
}

export default Savings;
