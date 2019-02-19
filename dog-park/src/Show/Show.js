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
              {park.size ? <li>Size: {park.size}</li> : null}
              {park.bathrooms ? <li>Bathrooms: <span>Yes!</span> </li> : <li>Bathrooms: <span>None</span> </li>}
              {park.parking ? <li>Parking: <span>Yes!</span> </li> : <li>Parking: <span>None</span> </li>}
              {park.misc ? <li>Other Notes: {park.misc}</li> : null}
              {park.upVotes ? <li>Up Votes: {park.upVotes}</li> : null}
              {park.downVotes ? <li>Down Votes: {park.downVotes}</li> : null}
            </ul>
          </div>
        )
    }
  }

export default Show
