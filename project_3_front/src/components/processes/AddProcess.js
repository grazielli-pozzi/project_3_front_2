import React, { Component } from 'react';

import axios from 'axios';

class AddProcess extends Component {

    // process_number: { type: Number, required: true },
    // description: { type: String, required: true },
    // complainer: { type: String, required: true },
    // claimed: { type: String, required: true },
    // lawyer: [{ type: Schema.Types.ObjectId, ref: 'Customer', required: false }],
    // status: { type: String, required: true, enum: ['pendente de manifestação', 'concluso', 'prazo', 'aguardando audiência'] },
    // creation_date: { type: Date, required: false },
    // customer: [{ type: Schema.Types.ObjectId, ref: 'Customer', required: false }],

  state = { 
      process_number: "", 
      description: "", 
      complainer: "", 
      claimed: "", 
      status: "",
     }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { process_number, description, complainer, claimed, 
        lawyer, status, customer } = this.state;
    axios.post("http://localhost:5000/api/processes/private/create", 
    { process_number, description, complainer, claimed, lawyer, status, customer })
    .then( () => {
      this.props.getData();
        this.setState({
        process_number: "",  
        description: "", 
        complainer: "", 
        claimed: "", 
        status: "",
    });
    })
    .catch( error => console.log(error) )
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
   
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProcess;