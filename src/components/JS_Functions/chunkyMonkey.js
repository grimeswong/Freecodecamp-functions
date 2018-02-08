import React from 'react';
import chunkyMonkey from '../../utils/chunkyMonkey.js';

const ChunkyMonkey = () => {
  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Chunk Monkey</p>
        <p className="function-description">A function that splits an array (first argument) into groups the length
        of size (second argument) and returns them as a two-dimensional array.</p>
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
