import React, {Component} from 'react';


export default class FruitVegetableCount extends Component {

  render() {
    console.log("FruitVegetableCount");

    return(
      <div>
        <div>Fruits:<span>{this.props.fruitsCount}</span></div>
        <div>Vegies:<span>{this.props.vegCount}</span></div>
      </div>
    )

  }
}
