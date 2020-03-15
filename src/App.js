import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
    this.toggle = this.toggle.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  toggle() {
    this.setState(state => ({
      isShow: !state.isShow
    }));
  }

  refresh() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>
          {this.state.isShow ? 'Hide' : 'Show'}
        </button>
        <button onClick={this.refresh}>Refresh</button>
        {/* <div>{this.state.isShow && <ToDoList />}</div> */}
      </div>
    );
  }
}

export default App;

