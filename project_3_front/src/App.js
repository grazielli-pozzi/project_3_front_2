import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import ProcessList from '../src/components/processes/ProcessList';
import Navbar from '../src/components/navbar/Navbar';
import ProcessDetails from '../src/components/processes/ProcessDetails';
import NewClient from '../src/components/clients/NewClient';
import Login from '../src/components/clients/Login';
import Dashboard from './components/clients/Dashboard';

class App extends Component {

  state = {
    role: '',
    isUserLogged: false,
  }

  changeRole = (info) => {
    this.setState({ role: info, isUserLogged: true });
  }

  render() {
    console.log(this.state.role);
    return (
      <div className="App">
       <Navbar isUserLogged={this.state.isUserLogged}/>
        <Switch>
          <Route exact path="/adv/clientes/novo-cliente" component={NewClient}/>
          <Route exact path="/adv/processos" component={ProcessList}/>
          <Route exact path="/adv/processo/:id" component={ProcessDetails} />
          <Route exact path="/adv" component={Dashboard} />
          <Route exact path="/login" render={(props) => <Login {...props} changeRole={this.changeRole} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
