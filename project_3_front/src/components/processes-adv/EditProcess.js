import React, { Component } from 'react';
import axios from 'axios';
import localStorageUtils from '../../utils/localStorage.utils';
 
class EditProcess extends Component {
  state = {
    process_number: this.props.theProcess.process_number, 
    description: this.props.theProcess.description,
    complainer: this.props.theProcess.complainer,
    claimed: this.props.theProcess.description,
    status: this.props.theProcess.description,
  }
  
  handleFormSubmit = (event) => {
    const process_number = this.state.process_number;
    const description = this.state.description;
    const complainer = this.state.complainer;
    const claimed = this.state.claimed;
    const status = this.state.status;
    
    event.preventDefault();
    
    const tokenObject = localStorageUtils.get();

    axios.put(`http://localhost:5000/api/processes/processes-adv/private/update/${this.props.theProcess._id}`, 
    { process_number, description, complainer, claimed, status },
    { headers: {Authorization: `Bearer ${tokenObject.token}` }})
    .then( () => {
        this.props.getTheProcess();
        this.props.history.push('/processes');    
    })
    .catch( error => {
      if(error.response.data && error.response.data.status === 401) {
        localStorageUtils.delete();

        this.props.history.push('/login');
      }
    })
  }
 
  handleChangeTitle = (event) => {  
    this.setState({
      title:event.target.value
    })
  }
 
  handleChangeDesc = (event) => {  
    this.setState({
      description:event.target.value
    })
  }
 
  render(){
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
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
 
export default EditProcess;