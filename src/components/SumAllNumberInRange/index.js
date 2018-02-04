import React from "react";
import sumAllNumberInRange from "../../utils/sumAllNumberInRange.js";

const SumAllNumberInRange = () => {

  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
      <h2 className="function-title">Sum All Number In Range</h2>
      <p className="function-description">Return the sum of those two numbers and all numbers between them (two numbers - lowest numbers can come last). </p>
      </div>
      <div className="function-lower-wrapper">
      <p className="function-argument">sumAllNumberInRange([1, 4])</p>
      <h3 className="function-result">Answer = {sumAllNumberInRange([1, 4])}</h3>
      </div>
      <div className="function-sourcode-wrapper">
        <h3 className="function-sourcecode-title">Source Code: </h3>
        <p className="function-sourcecode-source">{sumAllNumberInRange.toString()}</p>
      </div>
    </div>
  );
};

export default SumAllNumberInRange;
