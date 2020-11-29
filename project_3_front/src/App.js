import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import ProcessList from '../src/components/processes/ProcessList';
import Navbar from '../src/components/navbar/Navbar';
import ProcessDetails from '../src/components/processes/ProcessDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
        <Switch>
          <Route exact path="/processos" component={ProcessList}/>
          <Route exact path="/processo/:id" component={ProcessDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
