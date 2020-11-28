import React, { Component } from 'react';
import './App.css';
import AddProcess from '../src/components/processes/AddProcess';

class App extends Component {
  render() {
    return (
      <div className="App">
       <AddProcess />
      </div>
    );
  }
}

export default App;
