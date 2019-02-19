import React, { Component } from 'react'
import axios from 'axios'
import './Search.css'

class Create extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      location: null,
      size: null,
      bathroom: null,
      parking: null,
      comments: null
    }
  }

  handleNameInput(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleLocationInput(e) {
    this.setState({
      location: e.target.value
    })
  }

  handleSizeInput(e) {
    this.setState({
      size: e.target.value
    })
  }

  handleBathroomInput(e) {
    this.setState({
      bathroom: e.target.value
    })
  }

  handleParkingInput(e) {
    this.setState({
      parking: e.target.value
    })
  }

  handleCommentsInput(e) {
    this.setState({
      comments: e.target.value
    })
  }

  handleSearchSubmit(e) {
    e.preventDefault()
    axios.get('https://enterwebsitelinkhere', {
      params: {
        name: this.state.name,
        location: this.state.location,
        size: this.state.size,
        bathroom: this.state.bathroom,
        parking: this.state.parking,
        comments: this.state.comments
      }
    })
    .then((response) => {
      this.props.setNewDogPark(response.data.dogPark[0].dogPark, this.state.name)
      this.props.history.push('/show')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
   
    return(
      <div>
        <form onSubmit={(e) => this.handleSearchSubmit(e)}>
          <p>Please enter all fields to let the community know about a Dog Park you'd like to share!</p>
          <p>
            <label>Name:</label>
            <textarea onChange={(e) => this.handleNameInput(e)}></textarea>
          </p>
          <p>
            <label>Location: </label>
            <select onChange={(e) => this.handleLocationInput(e)}>
            </select>
          </p>
          <p>
            <label>Size: </label>
            <select onChange={(e) => this.handleSizeInput(e)}>
            </select>
          </p>
          <p>
            <label>Bathroom: </label>
            <select onChange={(e) => this.handleBathroomInput(e)}>
            </select>
          </p>
          <p>
            <label>Parking: </label>
            <select onChange={(e) => this.handleParkingInput(e)}>
            </select>
          </p>
          <p>
            <label>Comments: </label>
            <select onChange={(e) => this.handleCommentsInput(e)}>
            </select>
          </p>
          <input type="submit" value="createNewDogPark"/>
        </form>
      </div>
    )
  }
}


export default Create
