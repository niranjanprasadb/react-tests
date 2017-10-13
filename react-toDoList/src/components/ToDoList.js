import React, {Component} from 'react';

export default class ToDoList extends Component {

  constructor(props) {
    super(props)
    this.state ={task:"", taskList:[]};
    this.handleTask = this.handleTask.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleTask(event) {
    this.setState({task:event.target.value});
  }

  handleAdd() {
    let task = this.state.task;
    let taskList = this.state.taskList;
    taskList.push(task);
    this.setState({taskList:taskList});
  }

  render() {
    console.log("taskList");

    let taskList = this.state.taskList, taskListLi = [];
    taskList.forEach(task => taskListLi.push( <li>{task}</li>));
    return(
      <div>
        <div className="entryStyle">
        Enter Text :
        <span><input type="text" value= {this.state.task} onChange={this.handleTask}/></span>
        <span><button onClick={this.handleAdd}>Add</button></span>
        </div>
        <div><ul>{taskListLi}</ul></div>
      </div>
    )

  }
}
