import React from 'react';
import whereDoIBelong from '../../utils/whereDoIBelong.js';

const WhereDoIBelong = () => {
  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Where Do I Belong</p>
        <p className="function-description">Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">whereDoIBelong([10, 20, 30, 40, 50], 35)</p>
        <p className="function-result">{whereDoIBelong([10, 20, 30, 40, 50], 35)}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{whereDoIBelong.toString()}</p>
      </div>
    </div>
  );
}

export default WhereDoIBelong;
