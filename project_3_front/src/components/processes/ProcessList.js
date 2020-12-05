import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
import AddProcess from './AddProcess';
 
class ProcessesList extends Component {
  state = { 
    listOfProcesses: [] 
    }
  getAllProcesses = () =>{
    axios.get(`http://localhost:5000/api/processes/private/list`)
    .then(responseFromApi => {
      this.setState({
        listOfProcesses: responseFromApi.data
      })
    })
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
            <AddProcess getData={() => this.getAllProcesses()}/> 
        </div>
      </div>
    )
  }
}
 
export default ProcessesList;