import React from 'react';
import findTheLongestWordInAString from '../../utils/findTheLongestWordInAString.js';

const FindTheLongestWordInAString = () => {
  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Find The Longest Word In A String</p>
        <p className="function-description">Return the length of the longest word in the provided sentence.</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">findTheLongestWordInAString("What is the average airspeed velocity of an unladen swallow")</p>
        <p className="function-result">{findTheLongestWordInAString("What is the average airspeed velocity of an unladen swallow")}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{findTheLongestWordInAString.toString()}</p>
      </div>
    </div>
  );
}

export default FindTheLongestWordInAString;
