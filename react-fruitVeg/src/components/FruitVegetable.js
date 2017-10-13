import React, {Component} from 'react';
import FruitVegetableCount from './FruitVegetableCount';
import FruitVegetableTable from './FruitVegetableTable';

export default class FruitVegetable extends Component {

  constructor(props) {
    super(props)
    this.state ={isFruitOrVeg:"",fruitOrVegName:"", fruitsArray:[],vegetablesArray:[]};
    this.handleSelectFruitVeg = this.handleSelectFruitVeg.bind(this);
    this.handleChangeFruitVeg = this.handleChangeFruitVeg.bind(this);
    this.handleAddFruitVeg = this.handleAddFruitVeg.bind(this);
  }

  handleSelectFruitVeg(event) {
    this.setState({isFruitOrVeg:event.target.value, fruitOrVegName:''});
  }


  handleChangeFruitVeg(event) {
    this.setState({fruitOrVegName:event.target.value});
  }

  handleAddFruitVeg() {
    let isFruitOrVeg = this.state.isFruitOrVeg, fruitsArray = this.state.fruitsArray, vegetablesArray = this.state.vegetablesArray, fruitOrVeg = this.refs.fruitOrVeg.value;

    if(isFruitOrVeg === 'fruit') {
      fruitsArray.push(fruitOrVeg);
      this.setState({fruitsArray:fruitsArray});
    }else if(isFruitOrVeg === 'veg') {
      vegetablesArray.push(fruitOrVeg);
      this.setState({vegetablesArray:vegetablesArray});
    }
  }

  render() {
    console.log("FruitVegetable");

    return(
      <div>
        <div className="entryStyle">
        <div>
          Select Fruit/Vegetable :
          <select value={this.state.isFruitOrVeg} onChange={this.handleSelectFruitVeg}>
            <option value="">Select</option>
            <option value="fruit">Fruit</option>
            <option value="veg">Veg</option>
          </select>
        </div>
        Enter Fruit/Vegetable :
        <span><input type="text" value= {this.state.fruitOrVegName} ref="fruitOrVeg" onChange={this.handleChangeFruitVeg}/></span>
        <span><button onClick={this.handleAddFruitVeg}>Add</button></span>
        </div>
        <div><FruitVegetableCount fruitsCount={this.state.fruitsArray.length} vegCount={this.state.vegetablesArray.length}/></div>
        <div><FruitVegetableTable fruits={this.state.fruitsArray} vegetables={this.state.vegetablesArray}/></div>
      </div>
    )

  }
}
