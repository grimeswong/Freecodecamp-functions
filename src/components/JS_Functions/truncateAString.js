import React from 'react';
import truncateAString from '../../utils/truncateAString.js';

const TruncateAString = () => {
  return(
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Truncate A String</p>
        <p className="function-description">Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
          Note that inserting the three dots to the end will add to the string length.
          However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">truncateAString("Absolutely Longer", 2) </p>
        <p className="function-result">{truncateAString("Absolutely Longer", 2) }</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{truncateAString.toString()}</p>
      </div>
    </div>
  );
}

export default TruncateAString;