import React, { Component } from "react";

class ChildForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label>First Name: </label>
          <input
						type="text"
						name="firstName"
            // onChange={this.props.handleFirstNameChange}
            onChange={this.props.handleChange}
            value={this.props.formData.firstName}
          />

          <br></br>
          <br></br>

          <label>Last Name: </label>
          <input
						type="text"
						name="lastName"
						// onChange={this.props.handleLastNameChange}
            onChange={this.props.handleChange}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    );
  }
}

export default ChildForm;
