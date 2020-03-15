import React from 'react';
import '../styles/App.css';
import ToDoList from './ToDoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
    this.toggle = this.toggle.bind(this);
    this.refresh = this.refresh.bind(this);
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
      <div>
        <button onClick={this.toggle}>
          {this.state.isShow ? 'Hide' : 'Show'}
        </button>
        <button onClick={this.refresh}>Refresh</button>
        {this.state.isShow ? <ToDoList /> : this.clear}
      </div>
    );
  }
}

export default App;

