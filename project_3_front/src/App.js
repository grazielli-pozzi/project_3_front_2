import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import ProcessList from '../src/components/processes/ProcessList';
import Navbar from '../src/components/navbar/Navbar';
import ProcessDetails from '../src/components/processes/ProcessDetails';
import NewClient from '../src/components/clients/NewClient';
import Login from '../src/components/clients/Login';
import DashboardClient from './components/clients/DashboardClient';
import DashboardAdv from './components/clients/DashboardAdv';
import Footer from './components/general/Footer';
import HomePage from './components/general/HomePage';
import ProtectedClientRoute from './components/protectedRoute/ProtectedClientRoute';
import ProtectedLawyerRoute from './components/protectedRoute/ProtectedLawyerRoute';
import ClientsList from './components/clients/ClientsList';

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

          <Route exact path="/" component={HomePage} />

          <Route exact path="/login" render={(props) => 
          <Login {...props} changeRole={this.changeRole} />} />
          
          <ProtectedLawyerRoute 
            isUserLogged={isUserLogged} 
            role={role} 
            exact path="/adv/clientes/novo-cliente" 
            component={NewClient}
          />

          {/* {(isUserLogged && role==='advogado') ? 
          <Route exact path="/adv/clientes/novo-cliente" component={NewClient}/> 
          : <Redirect to="/login"/>} */}

          <ProtectedLawyerRoute 
            isUserLogged={isUserLogged} 
            role={role} 
            exact path="/adv/processos" 
            component={ProcessList}
          />

          {/* {(isUserLogged && role==='advogado') ? 
          <Route exact path="/adv/processos" render={(props) => <ProcessList {...props} changeRole={this.changeRole} />} /> 
          : <Redirect to="/login"/>} */}

          {/* {(isUserLogged && role==='advogado') ? 
          <Route exact path="/adv/processo/:id" render={(props) => <ProcessDetails {...props} changeRole={this.changeRole} />} />
          : <Redirect to="/login"/>} */}

          <ProtectedLawyerRoute 
            isUserLogged={isUserLogged} 
            role={role} 
            exact path="/adv/processo/:id" 
            component={ProcessDetails}
          />

          {/* {(isUserLogged && role==='advogado') ? 
          <Route exact path="/adv" render={(props) => <DashboardAdv {...props} changeRole={this.changeRole} />} />
          : <Redirect to="/login"/>} */}

          <ProtectedLawyerRoute 
            isUserLogged={isUserLogged} 
            role={role} 
            exact path="/adv/clientes" 
            component={ClientsList}
          />

          <ProtectedLawyerRoute 
            isUserLogged={isUserLogged} 
            role={role} 
            exact path="/adv" 
            component={DashboardAdv}
          />

          {/* {(isUserLogged && role==='cliente') ? 
          <Route exact path="/cliente" render={(props) => <DashboardClient {...props} changeRole={this.changeRole} />} />
          : <Redirect to="/login"/>} */}

          <ProtectedClientRoute 
            isUserLogged={isUserLogged} 
            role={role} 
            exact path="/cliente" 
            component={DashboardClient}
          />
         
         </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
