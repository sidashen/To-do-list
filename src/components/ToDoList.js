import React, { Component } from 'react';
import '../styles/ToDoList.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      index: 1
    };
    console.log('This is constructor');
  }

  addItem = () => {
    const { index, listItems } = this.state;
    let inputValue = 'List Title' + index;
    this.setState({
      listItems: [...listItems, inputValue],
      index: index + 1
    });
  }


  componentDidMount = () => {
    console.log('This is componentDidMount');
  }

  componentDidUpdate = () => {
    console.log('This is componentDidUpdate');
  }

  componentWillUnmount = () => {
    console.log('This is componentWillUnmount');
  }

  render() {
    console.log('This is render');
    const listItemsDom = this.state.listItems.map((value, index) => (
      <li key={index} className='single-list'>{value}</li>
    ));
    return (
      <div className='list-area'>
        <button onClick={() => this.addItem()} className='add'>Add</button>
        <ul className='list-content'>
          {listItemsDom}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
