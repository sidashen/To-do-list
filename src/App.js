import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isShow: !state.isShow
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isShow ? 'Hide' : 'Show'}
        </button>
        <div>{this.state.isShow && <ToDoList />}</div>
      </div>
    );
  }
}

export default App;

