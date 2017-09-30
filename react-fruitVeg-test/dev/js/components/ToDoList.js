import React, {Component} from 'react';
import FruitVegetableCount from './FruitVegetableCount';
import FruitVegetableTable from './FruitVegetableTable';

export default class ToDoList extends Component {

  constructor(props) {
    super(props)
    this.state ={listItem:"", toDoList:[]};
    this.handleListItem = this.handleListItem.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleListItem(event) {
    this.setState({listItem:event.target.value});
  }

  handleAdd() {
    let listItem = this.state.listItem;
    let toDoList = this.state.toDoList;
    this.setState({toDoList:toDoList.push(listItem)});
  }

  render() {
    console.log("ToDoList");
    let toDoList = this.state.toDoList.sort();
    let toDoListLi = toDoList.forEach(listItem => toDoList.push( <li>{listItem}</li>));
    return(
      <div>
        <div className="entryStyle">
        Enter Text :
        <span><input type="text" value= {this.state.listItem} onChange={this.handleListItem}/></span>
        <span><button onClick={this.handleAdd}>Add</button></span>
        </div>
        <div><ul>{toDoListLi}</ul></div>
      </div>
    )

  }
}
