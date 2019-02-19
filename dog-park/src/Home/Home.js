import React, { Component } from 'react';
import axios from 'axios'

const url = 'http://localhost:8080/parks'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      parks: []
    }
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
    e.preventDefault()
    axios.put(url + "/" +e.target.name, {upvote: true})
  }

  downHandler(e) {
    e.preventDefault()
    axios.put(url + "/" + e.target.name, {upvote: false})
  }

  render() {

    let parks = this.state.parks.map(park => {
      return (
        <div className="park-container" key={park._id}>
          <h1>{park.name}</h1>
          <h3>Amenities:</h3>
          <ul>
            {park.size ? <li>Size: {park.size}</li> : null}
            {park.bathrooms ? <li>Bathrooms: <span>Yes!</span> </li> : <li>Bathrooms: <span>None</span> </li>}
            {park.parking ? <li>Parking: <span>Yes!</span> </li> : <li>Parking: <span>None</span> </li>}
            {park.misc ? <li>Other Notes: {park.misc}</li> : null}
          </ul>
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