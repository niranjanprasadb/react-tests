import React, { Component } from 'react';
import Income from './components/Income';
import Spending from './components/Spending';
import Savings from './components/Savings';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="IncomeSpendSavings">
            <div className="IncomeSpending">
              <div className="IncomeSpendHeader">YOUR INCOME & SPEND</div>
              <Income/>
              <Spending/>
            </div>
            <div className="Savings">
              <div className="SavingsHeader">SPEND LESS</div>
              <Savings/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
