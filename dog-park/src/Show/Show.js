import React, { Component } from 'react'
import {
  Link,
  Route
} from 'react-router-dom'
import axios from 'axios'


class Translations extends Component {
  constructor () {
    super()
    this.state = {
      translations: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3001/api/translations')
      .then((res) => {
        console.log(res)
        this.setState({
          translations: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    const translations = this.state.translations.map((translation, index) => {
      return (
        <div key={ index }>
          <p>
            <Link to={`/translations/${translation._id}`}>{ translation.text }</Link>
          </p>
          <Route
            path={`/translations/${translation._id}`}
            render={() => {
              return (
                <audio controls>
                  <source type="audio/ogg" src={ translation.audioSource }/>
                </audio>
              )
            }}
          />
        </div>
      )
    })

    return (
      <div>
        <h1>Saved Translations</h1>
        { translations }
      </div>
    )
  }
}

export default Translations
