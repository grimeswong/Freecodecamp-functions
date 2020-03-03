import React from 'react';
import Data from '../data/data.js'
import * as util from '../utils/utilList.js'; // loaded all the functions from the utilities list

const DisplayComponent = (props) => {

  const getIndex = Data.findIndex((element) => {  // get the index compared with the props selected function
      return element.title === props.selectedFunction;
  });

  const getFuncName = Data[getIndex].funcName;  // get the function according to its index of Data

  return (
  <div className="component-wrapper-top">
    <div className="function-upper-wrapper">
      <p className="function-title">{Data[getIndex].title}</p>
      <p className="function-description">{Data[getIndex].description}</p>
    </div>
    <div className="function-lower-wrapper">
      <p className="function-test-title"></p>
      <p className="function-argument">{Data[getIndex].test.argument.toString()}</p>
      <p className="function-result">{util[getFuncName](Data[getIndex].test.argument).toString()}</p>
    </div>
    <div className="function-sourcecode-wrapper">
      <p className="function-sourcecode-title"></p>
      <code className="function-sourcecode-source">{util[getFuncName].toString()}</code>
    </div>
  </div>
  )
}

export default DisplayComponent
