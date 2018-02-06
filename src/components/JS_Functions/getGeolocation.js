import React from 'react';
import getGeolocation from '../../utils/getGeolocation.js';

class GetGeolocation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        latitude: "0",
        longitude: "0"
    };

  }

  componentDidMount() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      })
    } else {
      this.setState({
        latitude: "Unable to locate user location",
        longitude: "Unable to locate user location"
      });
    }

  }


  render() {
    return (
      <div className="component-wrapper-top">
        <div className="function-upper-wrapper">
          <p className="function-title">Get GetGeolocation</p>
          <p className="function-description">Get user current geolocation and return latitude and longitude</p>
        </div>
        <div className="function-lower-wrapper">
          <p className="function-test-title"></p>
          <p className="function-argument">getGeolocation()</p>
          <p className="function-result"><br/> Latitude: {this.state.latitude} <br/> longitude: {this.state.longitude}</p>
        </div>
        <div className="function-sourcecode-wrapper">
          <p className="function-sourcecode-title"></p>
          <p className="function-sourcecode-source">{getGeolocation.toString()}</p>
        </div>
      </div>
    );
  }
}

export default GetGeolocation;
