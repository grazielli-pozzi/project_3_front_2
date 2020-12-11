import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import ProcessList from '../src/components/processes/ProcessList';
import Navbar from '../src/components/navbar/Navbar';
import ProcessDetails from '../src/components/processes/ProcessDetails';
import NewClient from '../src/components/clients/NewClient';
import Login from '../src/components/clients/Login';
import Dashboard from './components/clients/Dashboard';

import localStorageUtils from '../src/utils/localStorage.utils';

class App extends Component {
  constructor() {
    super()

    this.state = {
      role: '',
      isUserLogged: false,
    }

    this.verifyAuthenticateUser();

  }

  changeRole = (info) => {
    this.setState({ role: info, isUserLogged: true });
  }

  verifyAuthenticateUser = () => {
    const token = localStorageUtils.get();

    if(token) {
      this.state.isUserLogged= true;
      this.state.role = token.role;
    }
  }

  render() {
    const { isUserLogged } = this.state;
    const { role } = this.state;
    console.log((isUserLogged && role==='cliente'));
    return (
      <div className="App">
       <Navbar isUserLogged={isUserLogged} role={role} />
        <Switch>
          <Route exact path="/login" render={(props) => <Login {...props} changeRole={this.changeRole} />} />
          {(isUserLogged && role==='advogado') ? <Route exact path="/adv/clientes/novo-cliente" component={NewClient}/> : <Redirect to="/login"/>}
          {(isUserLogged && role==='advogado') ? <Route exact path="/adv/processos" component={ProcessList}/> : <Redirect to="/login"/>}
          {(isUserLogged && role==='advogado') ? <Route exact path="/adv/processo/:id" component={ProcessDetails} /> : <Redirect to="/login"/>}
          {(isUserLogged && role==='advogado') ? <Route exact path="/adv" component={Dashboard} /> : <Redirect to="/login"/>}
          {(isUserLogged && role==='cliente') ? <Route exact path="/cliente" component={Dashboard} /> : <Redirect to="/"/>}
         </Switch>
      </div>
    );
  }
}

export default App;
