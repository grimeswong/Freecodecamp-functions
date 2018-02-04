import React from 'react';
import DiffTwoArrays from '../DiffTwoArrays';
import SumAllNumberInRange from '../SumAllNumberInRange';

const DisplayFunction = (props) => {
  console.log("DisplayFunction = " + props.selectedFunction);

  switch (props.selectedFunction) {
      case 'DiffTwoArrays':
      return <DiffTwoArrays />

      case 'SumAllNumberInRange':
      return <SumAllNumberInRange />

      default:
      return null;
  }

}


export default DisplayFunction;
