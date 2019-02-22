import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from "axios";
import './LogIn.css'

class LogIn extends Component {

  redirect() {
    return <Redirect to="/" />
  }

  componentDidMount() {
    console.log('hello1')
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCnsa_PqPVrCNM2BLxZdSWK2cveWBTJTgA")
     .then(res => {
       console.log('hello')
       console.log(res)
     })
  }

  render() {
    return (
      <div className="LogIn">
        <h1>Log In</h1>
        <div className="form-container">
          <form onSubmit={this.props.loginSubmit}>
          <p>
            <label>Email:</label>
            <input className="loginInput"  name="email" type="text" onChange={this.props.inputChanger} />
            </p>
            <p>
            <label>Password:</label>
            <input className="loginInput" name="password" type="password" onChange={this.props.inputChanger}/>
            </p>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
        {this.props.isLoggedIn ? this.redirect() : null}
      </div>
    );
  }
}

export default LogIn;