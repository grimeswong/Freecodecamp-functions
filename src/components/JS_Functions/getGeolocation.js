import React from 'react';
import getGeolocation from '../../utils/getGeolocation.js';

const GetGeolocation = () => {
  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Get GetGeolocation</p>
        <p className="function-description">Get user current geolocation and return latitude and longitude</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">getGeolocation()</p>
        <p className="function-result">{getGeolocation()}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{getGeolocation.toString()}</p>
      </div>
    </div>
  );
}

export default GetGeolocation;
