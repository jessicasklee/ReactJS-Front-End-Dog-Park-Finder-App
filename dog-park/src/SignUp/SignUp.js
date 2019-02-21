import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.props.signupSubmit}>
          <label>Email:</label>
          <input type="text" name="email" onChange={this.props.inputChanger}></input>
          <label>Password:</label>
          <input type="password" name="password" onChange={this.props.inputChanger}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default SignUp;