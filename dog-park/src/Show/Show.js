import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './Show.css'
import Map from '../Map/Map'

const url = 'http://localhost:8080/parks/'


class Show extends Component {
  constructor () {
    super()
    this.state = {
      park: {
      },
      redirect: false,
      notAuth: false
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
  axios.delete(url + this.props.match.params.id, {
    data: {token: localStorage.token}
  })
  .then(res => {
      if (res.data === "not authorized") {
        this.setState({
          notAuth: true
        })
      } else {
        this.setState({
          redirect: true
        })
      }
  })
  .catch((err) => {
      console.log(err);
  })
}

redirect() {
  return <Redirect to="/" />
}

  render () {

    // console.log(this.state.park)
    // console.log(Map)
        return (
          <div>
          <div className="park" key={this.state.park._id}>
            <h1>{this.state.park.name}</h1>
            <h3>Amenities:</h3>
            <ul>
              <li>Size: {this.state.park.size}</li>
              <li>Bathrooms: {this.state.park.bathrooms ? <span>Yes!</span> : <span>None</span>}</li>
              <li>Parking: {this.state.park.parking ?  <span>Yes!</span> : <span>None</span>}</li>
              <li>Other Notes: {this.state.park.misc}</li>
            </ul>
            <h3>{this.state.park.voteValue}</h3>
            <button onClick={this.deleteHandler} name={this.state.park._id}>Delete</button>
            {this.state.redirect ? this.redirect() : null }
            {this.state.notAuth ? <h1>Sorry, not your park!</h1> : null }
          </div>
          <div>
            {this.state.park.name}
            <Map name={this.state.park.name}/>
          </div>
          </div>
        )
    }
  }

export default Show
