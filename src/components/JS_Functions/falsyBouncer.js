import React from 'react';
import falsyBouncer from '../../utils/falsyBouncer.js';

const FalsyBouncer = () => {
  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Falsy Bouncer</p>
        <p className="function-description">Remove all falsy values from an array like false, null, 0, "", undefined, and NaN.</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">falsyBouncer([1, null, NaN, 2, undefined])</p>
        <p className="function-result">{falsyBouncer([1, null, NaN, 2, undefined]).toString()}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{falsyBouncer.toString()}</p>
      </div>
    </div>
  );
}

export default FalsyBouncer;
