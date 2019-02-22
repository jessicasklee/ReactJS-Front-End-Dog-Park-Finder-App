import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import "./Signup.css"

class SignUp extends Component {

  redirect() {
    return <Redirect to="/" />
  }

  render() {
    return (
      <div className="SignUp">
        <h1>Sign Up</h1>
        <div className="form-container">
        <form onSubmit={this.props.signupSubmit}>
          <label>Email:</label>
          <input type="text" name="email" onChange={this.props.inputChanger}></input>
          <label>Password:</label>
          <input type="password" name="password" onChange={this.props.inputChanger}></input>
          <input type="submit" value="Submit"></input>
        </form>
        </div>
        {this.props.isLoggedIn ? this.redirect() : null }
      </div>
    );
  }
}

export default SignUp;