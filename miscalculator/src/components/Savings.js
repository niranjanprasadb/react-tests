import React, { Component } from 'react';
import SpendingSlider from './SpendingSlider';

import './../styles/Savings.css';

class Savings extends Component {
  render() {
    return (
        <div className="SavingsContainer">
          <div className="SpendLess">Try reducing your monthly spending to see how your forecast could improve!</div>
          <SpendingSlider sliderLabel="Mortgage"/>
          <SpendingSlider sliderLabel="Bills"/>
          <SpendingSlider sliderLabel="General spending"/>
          <div className="TotalSavings">This means you are saving xyz per month</div>
          <div className="FindWaysContainer"><div className="FindWays">Find ways to save</div></div>
          <div className="ThumbsUpDown"><u>Was this helpful?</u></div>
        </div>
    );
  }
}

export default Savings;
