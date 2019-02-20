import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import Create from '../Create/Create'
import Show from '../Show/Show';

class App extends Component {
  render() {


    return (
      <div className="App">
        <header>
          <Link to="/"><h1 className="navbar">Dog Park Finder</h1></Link>
          <nav>
            <Link to="/create"><h3 className="navbar">New Park</h3></Link>
          </nav>
        </header>
        <Switch>
          <Route path="/create" component={Create} />
          <Route path="/:id" component={Show} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
