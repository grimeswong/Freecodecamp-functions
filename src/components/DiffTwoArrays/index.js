import React from 'react';
import diffTwoArrays from '../../utils/diffTwoArrays.js';

const DiffTwoArrays = () => {
  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Difference of Two Arrays</p>
        <p className="function-description">Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument"> Array 1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"] </p>
        <p className="function-argument"> Array 2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"] </p>
        <p className="function-result">{diffTwoArrays(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{diffTwoArrays.toString()}</p>
      </div>
    </div>
  );
}

export default DiffTwoArrays;
