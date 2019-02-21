import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'
import Home from '../Home/Home'
import Create from '../Create/Create'
import Show from '../Show/Show';
import SignUp from '../SignUp/SignUp'
import LogIn from '../LogIn/LogIn'

const url = 'http://localhost:8080'

class App extends Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      isLoggedIn: false
    }

    this.inputChanger = this.inputChanger.bind(this)
    this.signupSubmit = this.signupSubmit.bind(this)
    this.loginSubmit = this.loginSubmit.bind(this)
    this.logoutSubmit = this.logoutSubmit.bind(this)
  }

  inputChanger(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  signupSubmit(e) {
    e.preventDefault()
    axios.post(url + "/users/signup", {
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      localStorage.token = res.data.token
      this.setState({ isLoggedIn: true })
    })
    .catch(err => console.log(err))
  }

  loginSubmit(e) {
    e.preventDefault()
    axios.post(url + "/users/login", {
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      localStorage.token = res.data.token

      this.setState({
        isLoggedIn: true
      })
    })
    .catch(err => console.log(err))
  }

  logoutSubmit() {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  componentDidMount(){
    if(localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="navbar">
          <Link to="/"><h1 className="navbar">Dog Park Finder</h1></Link>
          <nav>
            {this.state.isLoggedIn ? <Link to="/create"><h3>New Park</h3></Link> : null}
            {!this.state.isLoggedIn ? <Link to="/signup"><h3>Sign Up</h3></Link> : null}
            {!this.state.isLoggedIn ? <Link to="/login"><h3>Log In</h3></Link> : null}
            {this.state.isLoggedIn ? <Link to="/" onClick={this.logoutSubmit}><h3>Log Out</h3></Link> : null}
          </nav>
        </header>
        <Switch>
          <Route path="/create" component={Create} />
          <Route path="/signup" render={() => <SignUp inputChanger={this.inputChanger} signupSubmit={this.signupSubmit} isLoggedIn={this.state.isLoggedIn} />} />
          <Route path="/login" render={() => <LogIn inputChanger={this.inputChanger} loginSubmit={this.loginSubmit} isLoggedIn={this.state.isLoggedIn} />} />
          <Route path="/:id" component={Show} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
