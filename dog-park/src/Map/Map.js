import React, { Component } from 'react';
import './Map.css'
import Axios from 'axios';


class Map extends Component {
  constructor() {
    super()
    this.state = {
      isMarkerShown: false,
      latLong: {lat: 10, lng: -10}
    }

    this.initMap = this.initMap.bind(this)
  }

  componentDidMount() {
    this.renderMap()
    this.getLatLong(this.props.name)
  }
  // componentDidUpdate() {
  //   console.log("props name " + this.props.name)
  // }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCnsa_PqPVrCNM2BLxZdSWK2cveWBTJTgA&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.state.latLong,
      zoom: 8,
    })
    var marker = new window.google.maps.Marker({
      position: this.state.latLong,
      map: map,
      title: 'Hello World!'
    });
  }

  getLatLong = (name) => {
    console.log(name)
    return Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=AIzaSyCnsa_PqPVrCNM2BLxZdSWK2cveWBTJTgA`)
      .then(res => {
        this.setState({
          latLong: res.data.results[0].geometry.location
        })
      })
  }

  render() {
    return (
      <div id="map"></div>
    )
  }
}
function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default Map

