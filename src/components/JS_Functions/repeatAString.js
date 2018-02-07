import React from 'react';
import repeatAString from '../../utils/repeatAString.js';

const RepeatAString = () => {
  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Repeat A String Repeat A String</p>
        <p className="function-description">Repeat a given string (first argument) num times (second argument).
          Return an empty string if num is not a positive number.</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">repeatAString("*", 8)</p>
        <p className="function-result">{repeatAString("*", 8)}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{repeatAString.toString()}</p>
      </div>
    </div>
  );
}

export default RepeatAString;
