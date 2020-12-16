import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
import AddProcess from './AddProcess';
import localStorageUtils from '../../utils/localStorage.utils';
 
class ProcessesList extends Component {

  state = { 
    listOfProcesses: [] 
  }

  getAllProcesses = () => {
    const tokenObject = localStorageUtils.get();
    axios.get(
      `http://localhost:5000/api/processes/processes-adv/private/list`, 
      { headers: {Authorization: `Bearer ${tokenObject.token}` }})
    .then(responseFromApi => {
      this.setState({
        listOfProcesses: responseFromApi.data
      })
    }).catch(error => {
      if(error.response.data && error.response.data.status === 401) {
        localStorageUtils.delete();

        this.props.history.push('/login');
      }
    });
  }
 
  componentDidMount() {
    this.getAllProcesses();
  }
 
  render(){
    return(
      <div>
        <div style={{width: '60%', float:"left"}}>
          { this.state.listOfProcesses.map( process => {
            return (
              <div key={process._id}>
                <Link to={`adv/processo/${process._id}`}>
                  <h3>{process.process_number}</h3>
                </Link>
                <p style={{maxWidth: '400px'}} >{process.description} </p>
              </div>
            )})
          }
        </div>
        <div style={{width: '40%', float:"right"}}>
            <AddProcess history={this.props.history} getData={() => this.getAllProcesses()}/> 
        </div>
      </div>
    )
  }
}
 
export default ProcessesList;