import React, {Component} from 'react';


export default class FruitVegetableTable extends Component {




  render() {
    console.log("FruitVegetableTable");

    let fruitsArray = this.props.fruits.sort(), vegiesArray = this.props.vegetables.sort(), fruitsList=[], vegetablesList=[];
    fruitsArray.forEach(fruit=> fruitsList.push( <li>{fruit}</li>));
    vegiesArray.forEach(veg => vegetablesList.push( <li>{veg}</li>));
    return(
      <div>
        <div><ul>{fruitsList}</ul></div>
        <div><ul>{vegetablesList}</ul></div>
      </div>
    )
  }
}
