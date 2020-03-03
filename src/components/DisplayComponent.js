import React from 'react';
import Data from '../data/data.js'
import * as util from '../utils/utilList.js'; // loaded all the functions from the utilities list

const DisplayComponent = (props) => {

  const getIndex = Data.findIndex((element) => {
      return element.title === props.selectedFunction;
  });

  const getFuncName = Data[getIndex].funcName
  console.log(getFuncName)
  const useFunc = 'util.'+ Data[getIndex].funcName;


  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">{Data[getIndex].title}</p>
        <p className="function-description">{Data[getIndex].description}</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">{Data[getIndex].test.argument}</p>
        <p className="function-result">{util.caesarCipher("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{util.caesarCipher.toString()}</p>
      </div>
    </div>
  )
}

export default DisplayComponent
