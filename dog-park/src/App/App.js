import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import Create from '../Create/Create'

class App extends Component {
  render() {


    return (
      <div className="App">
        <header>
          <h1>Dog Park Finder</h1>
          <nav>
            <h3>New Park</h3>
          </nav>
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={Create} />
      </div>
    );
  }
}

export default App;
