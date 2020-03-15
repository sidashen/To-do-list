import React from 'react';
import '../styles/ToDoList.css';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      index: 1
    };
  }

  addItem = () => {
    let inputValue = 'List Title' + this.state.index;
    this.setState({
      listItems: [...this.state.listItems, inputValue],
      index: this.state.index + 1
    });
  }

  render() {
    const listItemsDom = this.state.listItems.map((value, index) => (
      <li key={index}>{value}</li>
    ));
    console.log(this.state.listItems);
    return (
      <div>
        <button onClick={this.addItem}>Add</button>
        <ul>
          {listItemsDom}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
