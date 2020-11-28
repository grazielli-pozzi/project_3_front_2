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
    //   process_number: "", 
      description: "", 
      complainer: "", 
      claimed: "", 
      lawyer: "",
      status: "",
    //   creation_date: "",
      customer: "",
     }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { description, complainer, claimed, 
        lawyer, status, customer } = this.state;
    axios.post("http://localhost:5000/api/processes/private/list", 
    { description, complainer, claimed, lawyer, status, customer })
    .then( () => {
        // this.props.getData();
        this.setState({
        description: "", 
        complainer: "", 
        claimed: "", 
        lawyer: "",
        status: "",
        customer: ""
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
          <label>Descrição:</label>
          <input type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e)}/>

          <label>Reclamante:</label>
          <textarea name="complainer" value={this.state.complainer} onChange={ e => this.handleChange(e)} />
   
          <label>Reclamado:</label>
          <textarea name="claimed" value={this.state.claimed} onChange={ e => this.handleChange(e)} />
   
          <label>Advogado:</label>
          <textarea name="lawyer" value={this.state.lawyer} onChange={ e => this.handleChange(e)} />
   
          <label>Status:</label>
          <textarea name="status" value={this.state.status} onChange={ e => this.handleChange(e)} />
   
          <label>Cliente:</label>
          <textarea name="customer" value={this.state.customer} onChange={ e => this.handleChange(e)} />
   
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProcess;