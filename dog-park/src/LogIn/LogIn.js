import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class LogIn extends Component {

  redirect() {
    return <Redirect to="/" />
  }

  render() {
    return (
      <div className="LogIn">
        <form onSubmit={this.props.loginSubmit}>
          <label>Email:</label>
          <input name="email" type="text" onChange={this.props.inputChanger} />
          <label>Password:</label>
          <input name="password" type="password" onChange={this.props.inputChanger}/>
          <input type="submit" value="Submit"></input>
        </form>
        {this.props.isLoggedIn ? this.redirect() : null }
      </div>
    );
  }
}

export default LogIn;
