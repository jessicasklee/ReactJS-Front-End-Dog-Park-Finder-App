import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import './Home.css'

const url = 'http://localhost:8080/parks'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      parks: []
    }

    this.upHandler = this.upHandler.bind(this)
    this.downHandler = this.downHandler.bind(this)
  }

  componentDidMount() {
    axios.get(url)
      .then(res => {
        this.setState({
          parks: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  upHandler(e) {
    let parksCopy = this.state.parks
    let park = parksCopy.filter(park => park._id === e.target.name)
    let i = parksCopy.indexOf(park[0])

    park[0].voteValue++
    parksCopy[i] = park[0]

    this.setState({
      parks: parksCopy
    })
    
    axios.put(url + "/" + e.target.name, {upvote: true})
  }

  downHandler(e) {
    let parksCopy = this.state.parks
    let park = parksCopy.filter(park => park._id === e.target.name)
    let i = parksCopy.indexOf(park[0])

    park[0].voteValue--
    parksCopy[i] = park[0]

    this.setState({
      parks: parksCopy
    })

    axios.put(url + "/" + e.target.name, {upvote: false})
  }

  render() {

    let parks = this.state.parks.map(park => {
      return (
          <div className="park-container" key={park._id}>
            <Link to={park._id}>
              <h1>{park.name}</h1>
              <h3>Location: {park.location}</h3>
              <h3>{park.voteValue}</h3>
            </Link>
            <button onClick={this.upHandler} name={park._id}>Upvote</button>
            <button onClick={this.downHandler} name={park._id}>Downvote</button>
          </div>
      )
    })

    return (
      <div className="home">
        {parks}
      </div>
    );
  }
}

export default Home;