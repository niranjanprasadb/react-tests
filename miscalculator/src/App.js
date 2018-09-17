import React, { Component } from 'react';
import axios from 'axios';
import Income from './components/Income';
import Spending from './components/Spending';
import Savings from './components/Savings';
import MISHelper from './helper/MISHelper';

import './styles/App.css';

class App extends Component {

  constructor(props) {
    super();
    this.state = { incomes:[], expenditures:[], savings:0};
    this.passAmountToSlider = this.passAmountToSlider.bind(this);
  }

  passAmountToSlider(amount) {

  }

  componentDidMount = () => {
    var incomes = this.state.incomes;
    let expenditures = this.state.expenditures;
    axios.get('data.json').then(response=>{

      this.setState({incomes:response.data.incomes, expenditures:response.data.expenditures})
    });
  }

  render() {
    let incomes=this.state.incomes, expenditures=this.state.expenditures, savings = 0, misHelper = new MISHelper();
    savings = misHelper.calculateSavings(incomes, expenditures);
    return (
      <div className="App">
        <div className="IncomeSpendSavings">
            <div className="IncomeSpending">
              <div className="IncomeSpendHeader">YOUR INCOME & SPEND</div>
              <Income incomes={this.state.incomes} propagateChange={this.passAmountToSlider}/>
              <Spending expenditures={this.state.expenditures} propagateChange={this.passAmountToSlider}/>
            </div>
            <div className="Savings">
              <div className="SavingsHeader">SPEND LESS</div>
              <Savings savings={savings} expenditures={this.state.expenditures}/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
