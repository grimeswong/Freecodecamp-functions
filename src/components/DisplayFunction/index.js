import React, { Component } from 'react';
import DiffTwoArrays from '../DiffTwoArrays';

const DisplayFunction = (props) => {
  console.log("DisplayFunction = " + props.selectedFunction);

  switch (props.selectedFunction) {
      case 'DiffTwoArrays':
      return <DiffTwoArrays />
  }

}


export default DisplayFunction;
