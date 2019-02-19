import React, { Component } from 'react'
import axios from 'axios'


const url = 'http://localhost:8080/parks/'


class Show extends Component {
  constructor () {
    super()
    this.state = {
      park: {}
    }
  }

componentDidMount() {
    axios.get(url)
        .then(park => {
        this.setState({
            park: park
        })
    })
        .catch(err => {
        console.log(err)
        })
}

  render () {
        return (
          <div className="park" key={this.match.props.park._id}>
            <h1>{this.state.park.name}</h1>
            <h3>Amenities:</h3>
            <ul>
              <li>Size: {this.state.park.size}</li>
              <li>Bathrooms: {this.state.park.bathroom}</li>
              <li>Parking: {this.state.park.parking}</li>
              <li>Other Notes: {this.state.park.misc}</li>
              <li>Up Votes: {this.state.park.upVotes}</li>
              <li>Down Votes: {this.state.park.downVotes}</li>
            </ul>
          </div>
        )
    }
  }

export default Show
