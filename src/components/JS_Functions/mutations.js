import React from 'react';
import mutations from '../../utils/mutations.js';

const Mutations = () => {
  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Mutations</p>
        <p className="function-description">Return true if the string in the first element of the array contains
        all of the letters of the string in the second element of the array.</p>
        <p>eg. ["hello", "Hello"], should return true because all of the
        letters in the second string are present in the first, ignoring case.</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">mutations(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])</p>
        <p className="function-result">{mutations(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]).toString()}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{mutations.toString()}</p>
      </div>
    </div>
  );
}

export default Mutations;
