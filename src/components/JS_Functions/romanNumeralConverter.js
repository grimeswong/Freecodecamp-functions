import React from 'react';
import romanNumeralConverter from '../../utils/romanNumeralConverter.js';

const RomanNumeralConverter = () => {
  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Roman Numeral Converter</p>
        <p className="function-description">Convert the given number into a roman numeral.</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">romanNumeralConverter(36)</p>
        <p className="function-result">{romanNumeralConverter(36)}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{romanNumeralConverter.toString()}</p>
      </div>
    </div>
  );
}

export default RomanNumeralConverter;
