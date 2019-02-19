import React, { Component } from 'react'
import axios from 'axios'


const url = 'http://localhost:8080/parks/:id'


class Translations extends Component {
  constructor () {
    super()
    this.state = {
      park
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
          <div className="park" key={park._id}>
            <h1>{park.name}</h1>
            <h3>Amenities:</h3>
            <ul>
              <li>Size: {park.size}</li>
              <li>Bathrooms: {park.bathroom}</li>
              <li>Parking: {park.parking}</li>
              <li>Other Notes: {park.misc}</li>
              <li>Up Votes: {park.upVotes}</li>
              <li>Down Votes: {park.downVotes}</li>
            </ul>
          </div>
        )
    }
  }

export default Show
