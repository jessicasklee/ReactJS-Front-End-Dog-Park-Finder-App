import React, { Component } from 'react'
import axios from 'axios'


const url = 'http://localhost:8080/parks/'


class Show extends Component {
  constructor () {
    super()
    this.state = {
      park: {}
    }

    this.deleteHandler = this.deleteHandler.bind(this)
  }

componentDidMount() {
    axios.get(url + this.props.match.params.id)
        .then(park => {
        this.setState({
            park: park.data
        })
    })
        .catch(err => {
        console.log(err)
        })
}

deleteHandler() {
  axios.delete(url + this.props.match.params.id)
  .then(park => {
      console.log(park.data);
  })
  .catch((err) => {
      console.log(err);
  })
}

  render () {

    console.log(this.state.park)
        return (
          <div className="park" key={this.state.park._id}>
            <h1>{this.state.park.name}</h1>
            <h3>Amenities:</h3>
            <ul>
              <li>Size: {this.state.park.size}</li>
              <li>Bathrooms: {this.state.park.bathrooms ? <span>Yes!</span> : <span>None</span>}</li>
              <li>Parking: {this.state.park.parking ?  <span>Yes!</span> : <span>None</span>}</li>
              <li>Other Notes: {this.state.park.misc}</li>
              <li>Up Votes: {this.state.park.upVotes}</li>
              <li>Down Votes: {this.state.park.downVotes}</li>
            </ul>
            <button onClick={this.deleteHandler} name={this.state.park._id}>Delete</button>
          </div>
        )
    }
  }

export default Show
