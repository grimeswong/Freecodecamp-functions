import React from "react";
import sumAllNumberInRange from "../../utils/sumAllNumberInRange.js";

const SumAllNumberInRange = () => {

  return (
    <div>
      <h2>Sum All Number In Range</h2>
      <p>Return the sum of those two numbers and all numbers between them (two numbers (lowest numbers can come last)). </p>
      <p>sumAllNumberInRange([1, 4])</p>
      <h3>Answer = {sumAllNumberInRange([1, 4])}</h3>
      <h3>Source Code: </h3>
      <p>{sumAllNumberInRange.toString()}</p>
    </div>
  );
};

export default SumAllNumberInRange;
