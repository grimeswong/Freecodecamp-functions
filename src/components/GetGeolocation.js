import React from 'react';
import getGeolocation from '../utils/getGeolocation.js';
import DisplayBlock from './DisplayBlock.js';
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

  componentWillUpdate(nextProps, nextState) {
     console.log('User\'s geolocation is updated');
     console.log(`NextProps = ${nextProps.latitude}, ${nextProps.longitude} \n NextState = ${nextState.latitude}, ${nextState.longitude}`);
  }

  componentWillUnmount() {
     console.log('Component WILL UNMOUNT!');
     this.setState ({
         latitude: "0",
         longitude: "0"
     });
  }

  render() {
    const result = `Latitude: ${this.state.latitude} \n Longitude: ${this.state.longitude}`
    return (
      <DisplayBlock
      title="Get GetGeolocation"
      description="Get user current geolocation and return latitude and longitude"
      arguments={["Get navigator.geolocation from browser"]}
      funcName="getGeolocation"
      result={result}
      source={getGeolocation.toString()}
      />
    );
  }
}

export default GetGeolocation;
