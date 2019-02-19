import React, { Component } from 'react'
import axios from 'axios'
import './Search.css'

class Create extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      location: null,
      size: [
        { short: "sm", name: "Small" },
        { short: "md", name: "Medium" },
        { short: "lg", name: "Large" },
      ],
      bathroom: null,
      parking: null,
      comments: null
    }
  }

  handleNameInput(e) {
    this.setState({
      nameString: e.target.value
    })
  }

  handleLocationInput(e) {
    this.setState({
      locationString: e.target.value
    })
  }

  handleSizeInput(e) {
    this.setState({
      sizeString: e.target.value
    })
  }

  handleBathroomInput(e) {
    this.setState({
      bathroomBoolean: e.target.value
    })
  }

  handleParkingInput(e) {
    this.setState({
      parkingBoolean: e.target.value
    })
  }

  handleCommentsInput(e) {
    this.setState({
      commentsString: e.target.value
    })
  }

  handleSearchSubmit(e) {
    e.preventDefault()
    axios.get('https://enterwebsitelinkhere', {
      params: {
        name: this.state.nameString,
        location: this.state.locationString,
        size: this.state.sizeString,
        bathroom: this.state.bathroomBoolean,
        parking: this.state.parkingBoolean,
        comments: this.state.commentsString
      }
    })
    .then((response) => {
      this.props.setNewDogPark(response.data.dogPark[0].dogPark, this.state.nameString)
      this.props.history.push('/show')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    let langOptions = this.state.langOptions.map((language, index) => {
      return(
        <option key={index + 1} value={language.short}>{language.name}</option>
      )
    })
    langOptions.unshift(
      <option key="0">Please Select a Dog Park Size</option>
    )
    return(
      <div>
        <form onSubmit={(e) => this.handleSearchSubmit(e)}>
          <p>Please enter all fields to let the community know about a Dog Park you'd like to share!</p>
          <p>
            <label>Name:</label>
            <textarea onChange={(e) => this.handleSearchInput(e)}></textarea>
          </p>
          <p>
            <label>Location: </label>
            <select onChange={(e) => this.setSourceLang(e)}>
              {langOptions}
            </select>
          </p>
          <p>
            <label>Size: </label>
            <select onChange={(e) => this.setTargetLang(e)}>
              {langOptions}
            </select>
          </p>
          <p>
            <label>Bathroom: </label>
            <select onChange={(e) => this.setTargetLang(e)}>
              {langOptions}
            </select>
          </p>
          <p>
            <label>Parking: </label>
            <select onChange={(e) => this.setTargetLang(e)}>
              {langOptions}
            </select>
          </p>
          <p>
            <label>Comments: </label>
            <select onChange={(e) => this.setTargetLang(e)}>
              {langOptions}
            </select>
          </p>
          <input type="submit" value="createNewDogPark"/>
        </form>
      </div>
    )
  }
}


export default Create
