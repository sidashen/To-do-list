import React, { Component } from 'react';
import '../styles/App.css';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
  }

  toggle = () => {
    this.setState(state => ({
      isShow: !state.isShow
    }));
  }

  refresh = () => {
    window.location.reload();
  }

  render() {
    return (
      <div className='to-do-list'>
        <div className='control-area'>
          <button onClick={() => this.toggle()} className='toggle'>
            {this.state.isShow ? 'Hide' : 'Show'}
          </button>
          <button onClick={() => this.refresh()} className='refresh'>Refresh</button>
        </div>
        {this.state.isShow ? <ToDoList /> : null}
      </div>
    );
  }
}

export default App;

