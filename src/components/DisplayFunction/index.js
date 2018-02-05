import React from 'react';
import DiffTwoArrays from '../JS_Functions/diffTwoArrays.js';
import SumAllNumberInRange from '../JS_Functions/sumAllNumberInRange.js';
import RomanNumeralConverter from '../JS_Functions/romanNumeralConverter.js';

const DisplayFunction = (props) => {
  console.log("DisplayFunction = " + props.selectedFunction);

  switch (props.selectedFunction) {
      case 'DiffTwoArrays':
      return <DiffTwoArrays />

      case 'SumAllNumberInRange':
      return <SumAllNumberInRange />

      case 'RomanNumeralConverter':
      return <RomanNumeralConverter />

      default:
      return null;
  }

}


export default DisplayFunction;
