import React from 'react';
import confirmTheEnding from '../../utils/confirmTheEnding.js';

const ConfirmTheEnding = () => {
  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Confirm The Ending</p>
        <p className="function-description">Check if a string (first argument, str) ends with
        the given target string (second argument, target).</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">confirmTheEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")</p>
        <p className="function-result">{JSON.stringify(confirmTheEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"))}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{confirmTheEnding.toString()}</p>
      </div>
    </div>
  );
}

export default ConfirmTheEnding;
