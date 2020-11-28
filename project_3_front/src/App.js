import React, { Component } from 'react';
import './App.css';
// import AddProcess from '../src/components/processes/AddProcess';
import ProcessList from '../src/components/processes/ProcessList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProcessList />
      </div>
    );
  }
}

export default App;
