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
        <p>
          <label>Email:</label>
          <input className="signUpInput" type="text" name="email" onChange={this.props.inputChanger}></input>
          </p>
          <p>
          <label>Password:</label>
          <input className="signUpInput" type="password" name="password" onChange={this.props.inputChanger}></input>
          </p>
          <input type="submit" value="Submit"></input>
        </form>
        </div>
        {this.props.isLoggedIn ? this.redirect() : null }
      </div>
    );
  }
}

export default SignUp;