import React, { Component } from 'react';
import './Map.css'

class Map extends Component {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.renderMap()
    this.getCenter()
  }
  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCnsa_PqPVrCNM2BLxZdSWK2cveWBTJTgA&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    })
  }

  getCenter = (address) => {
    let geocoder = new window.google.maps.Geocoder()
    geocoder.geocode({"address": address}, function(results, status) {
      console.log(results)
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
