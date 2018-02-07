import React from 'react';
import chunkyMonkey from '../../utils/chunkyMonkey.js';

const ChunkyMonkey = () => {
  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Where DO I Belong</p>
        <p className="function-description">Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">chunkyMonkey(["a", "b", "c", "d"], 2)</p>
        <p className="function-result">{JSON.stringify(chunkyMonkey(["a", "b", "c", "d"], 2))}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{chunkyMonkey.toString()}</p>
      </div>
    </div>
  );
}

export default ChunkyMonkey;
