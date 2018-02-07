import React from 'react';
import largestNumbersInArrays from '../../utils/largestNumbersInArrays.js';

const LargestNumbersInArrays = () => {
  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Largest Numbers In Array</p>
        <p className="function-description">Return an array consisting of the largest number from each provided sub-array.
        For simplicity, the provided array will contain exactly 4 sub-arrays.</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">largestNumbersInArrays([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])</p>
        <p className="function-result">{JSON.stringify(largestNumbersInArrays([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]))}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{largestNumbersInArrays.toString()}</p>
      </div>
    </div>
  );
}

export default LargestNumbersInArrays;
