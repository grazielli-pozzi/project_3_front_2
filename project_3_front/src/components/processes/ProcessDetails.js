import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditProcess from './EditProcess';
 
class ProcessDetails extends Component {
  state = {}
 
  componentDidMount(){
    this.getSingleProcess();
  }
 
  getSingleProcess = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/api/processes/private/list/${params.id}`)
    .then( responseFromApi =>{
      const theProcess = responseFromApi.data;
      this.setState(theProcess);
    })
    .catch((err)=>{
        console.log(err)
    })
  }
 
  renderEditForm = () => {
    if(!this.state.title){
      this.getSingleProcess();
    } else {
      return <EditProcess theProcess={this.state} getTheProcess={this.getSingleProcess} {...this.props} />
    }
  }
 
  deleteProcess = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/api/processes/private/delete/${params.id}`)
    .then( () =>{
        this.props.history.push('/processes');         
    })
    .catch((err)=>{
        console.log(err)
    })
  }
 
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <div>{this.renderEditForm()} </div>
        <button onClick={() => this.deleteProcess()}>Delete process</button> 
        <br/>
        <Link to={'/processes'}>Back to processes</Link>
      </div>
    )
  }
}
 
export default ProcessDetails;