import React, { Component } from 'react';
import ChildForm from './ChildForm'
import DisplayData from './DisplayData';
 
class ParentForm extends Component {
  state = {
    firstName: "",
    lastName: "",
  }
 
  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }
 
  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }
 
//  ADDING A NAME ATTRIBUTE TO <INPUT /> TAG THEN TARGETING THAT
// ATTRIBUTE FOR CHANGES TO SET STATE:
handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

  render() {
    return (
      <div>
      <ChildForm
        formData={this.state}
        // handleFirstNameChange={this.handleFirstNameChange}
        // handleLastNameChange={this.handleLastNameChange}
        handleChange={this.handleChange}
      />

      <br></br>

      <DisplayData formData={this.state} />

    </div>
    )
  }
}
 
export default ParentForm;