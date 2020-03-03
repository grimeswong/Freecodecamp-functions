import React from 'react';
import Data from '../data/data.js'
import * as util from '../utils/utilList.js'; // loaded all the functions from the utilities list

const DisplayComponent = () => {
  console.log(`Data is = ${Data[0].title}`);

  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">{Data[0].title}</p>
        <p className="function-description">{Data[0].description}</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">{Data[0].test.argument}</p>
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
