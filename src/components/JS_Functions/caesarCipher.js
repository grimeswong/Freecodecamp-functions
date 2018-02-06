import React from 'react';
import caesarCipher from '../../utils/caesarCipher.js';

const CaesarCipher = () => {
  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Caesar Ciper</p>
        <p className="function-description">A function which shifts 13 ciphers to encode string as input and returns a decoded string.</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument"> caesarCipher("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") </p>
        <p className="function-result">{caesarCipher("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{caesarCipher.toString()}</p>
      </div>
    </div>
  );
}

export default CaesarCipher;
