import React, { Component } from 'react';

import localStorageUtils from '../../utils/localStorage.utils';

import axios from 'axios';

class AddProcess extends Component {

  state = { 
      process_number: "", 
      description: "", 
      complainer: "", 
      claimed: "", 
      status: "",
      client: "",
     }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { process_number, description, complainer, claimed, 
        lawyer, status, customer, client } = this.state;

    const tokenObject = localStorageUtils.get();
    
    axios.post("http://localhost:5000/api/processes/processes-adv/private/create", 
    { process_number, description, complainer, claimed, lawyer, status, customer, client }, 
    { headers: {Authorization: `Bearer ${tokenObject.token}`} })
    .then( () => {
      this.props.getData();
        this.setState({
        process_number: "",  
        description: "", 
        complainer: "", 
        claimed: "", 
        status: "",
        client: "",
    });
    })
    .catch( error => {
      if(error.response.data && error.response.data.status === 401) {
        localStorageUtils.delete();

        this.props.history.push('/login');
    }
  });
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Número do processo:</label>
          <input name="process_number" value={this.state.process_number} onChange={ e => this.handleChange(e)} />
   
          <label>Descrição:</label>
          <textarea type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e)}/>

          <label>Reclamante:</label>
          <input name="complainer" value={this.state.complainer} onChange={ e => this.handleChange(e)} />
   
          <label>Reclamado:</label>
          <input name="claimed" value={this.state.claimed} onChange={ e => this.handleChange(e)} />
   
          <label>Status:</label>
          <input name="status" value={this.state.status} onChange={ e => this.handleChange(e)} />

          <label>Cliente:</label>
          <input name="client" value={this.state.client} onChange={ e => this.handleChange(e)} />
   
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProcess;