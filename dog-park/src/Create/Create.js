import React, { Component } from 'react'
import axios from 'axios'
import './Search.css'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchPhrase: null,
      langOptions: [
        { short: "sm", name: "Small" },
        { short: "md", name: "Medium" },
        { short: "lg", name: "Large" },
      ],
      sourceLang: null,
      targetLang: null
    }
  }

  handleSearchInput(e) {
    this.setState({
      searchPhrase: e.target.value
    })
  }

  setSourceLang(e) {
    this.setState({
      sourceLang: e.target.value
    })
  }

  setTargetLang(e) {
    this.setState({
      targetLang: e.target.value
    })
  }

  handleSearchSubmit(e) {
    e.preventDefault()
    axios.get('https://watson-api-explorer.mybluemix.net/language-translator/api/v2/translate', {
      params: {
        source: this.state.sourceLang,
        target: this.state.targetLang,
        text: this.state.searchPhrase
      }
    })
    .then((response) => {
      this.props.setTranslation(response.data.translations[0].translation, this.state.targetLang)
      this.props.history.push('/results')
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


export default Search
