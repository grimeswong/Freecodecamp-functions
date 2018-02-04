import React from "react";
import sumAllNumberInRange from "../../utils/sumAllNumberInRange.js";

const SumAllNumberInRange = () => {

  return (
    <div className="component-wrapper-top">
        <div className="function-upper-wrapper">
        <p className="function-title">Sum All Number In Range</p>
        <p className="function-description">Return the sum of those two numbers and all numbers between them (two numbers - lowest numbers can come last). </p>
        </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">sumAllNumberInRange([1, 4])</p>
        <p className="function-result">{sumAllNumberInRange([1, 4])}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{sumAllNumberInRange.toString()}</p>
      </div>
    </div>
  );
};

export default SumAllNumberInRange;
