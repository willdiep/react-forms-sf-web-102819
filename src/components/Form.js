import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  // getter/setter method
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  // getter/setter method
  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  // getter/setter method
  handleSubmit = event => {
    event.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

  // regular method
  listOfSubmissions = () => {
    return this.state.submittedData.map( (data, index) => {
      return <div key={index}><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        {/* do not need parentheses to invoke getter method to  */}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleFirstNameChange}
            value={this.state.firstName}
          />
          <input
            type="text"
            onChange={this.handleLastNameChange}
            value={this.state.lastName}
          />
          <input type="submit"/>
        </form>
        {/* need parentheses to invoke regular method */}
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;