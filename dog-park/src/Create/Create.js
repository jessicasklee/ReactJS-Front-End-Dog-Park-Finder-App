import React, { Component } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import './Create.css'

const url = "http://localhost:8080/parks"

class Create extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      locationOptions: null,
      size: null,
      author: null,
      sizeOptions: [
        { name: "Small" },
        { name: "Medium" },
        { name: "Large" }
      ],
      bathrooms: null,
      bathroomOptions: [
          { short: "true", name: "Yes" },
          { short: "false", name: "No" }
      ],
      parking: null,
      parkingOptions: [
          { short: "true", name: "Yes" },
          { short: "false", name: "No" }
      ],
      misc: null
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
      bathrooms: e.target.value
    })
  }

  handleParkingInput(e) {
    this.setState({
      parking: e.target.value
    })
  }

  handleCommentsInput(e) {
    this.setState({
      misc: e.target.value
    })
  }

  handleSearchSubmit(e) {
    e.preventDefault()
    axios.post(url, {...this.state})
    .catch((err) => {
      console.log(err)
    })
  }

  componentDidMount() {
    let decoded = jwtDecode(localStorage.token)

    console.log(decoded.email)
    this.setState({
      author: decoded.email
    })
  }

  render() {

    let sizeOptions = this.state.sizeOptions.map((size, index) => {
        return(
          <option key={index + 1}>{size.name}</option>
        )
      })
      sizeOptions.unshift(
        <option key="0">Please Select a Size</option>
      )

      let bathroomOptions = this.state.bathroomOptions.map((bathroom, index) => {
        return(
          <option key={index + 1} value={bathroom.short}>{bathroom.name}</option>
        )
      })
      bathroomOptions.unshift(
        <option key="0">Please Select Yes or No</option>
      )

      let parkingOptions = this.state.parkingOptions.map((parking, index) => {
        return(
          <option key={index + 1} value={parking.short}>{parking.name}</option>
        )
      })
      parkingOptions.unshift(
        <option key="0">Please Select Yes or No</option>
      )

    return(
      <div className="new-park">
        <form className="new-park-form" onSubmit={(e) => this.handleSearchSubmit(e)}>
          <h3>Please enter all fields to let the community know about a Dog Park you'd like to share!</h3>
          <p>
            <label>Name:</label>
            <textarea onChange={(e) => this.handleNameInput(e)}></textarea>
          </p>
          <p>
            <label>Location: </label>
            <textarea onChange={(e) => this.handleLocationInput(e)}>
            </textarea>
          </p>
          <p>
            <label>Size: </label>
            <select onChange={(e) => this.handleSizeInput(e)}>
            { sizeOptions }
            </select>
          </p>
          <p>
            <label>Bathroom: </label>
            <select onChange={(e) => this.handleBathroomInput(e)}>
            { bathroomOptions }
            </select>
          </p>
          <p>
            <label>Parking: </label>
            <select onChange={(e) => this.handleParkingInput(e)}>
            { parkingOptions }
            </select>
          </p>
          <p>
            <label>Comments: </label>
            <textarea onChange={(e) => this.handleCommentsInput(e)}>
            </textarea>
          </p>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}


export default Create
