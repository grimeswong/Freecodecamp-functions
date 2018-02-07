import React from "react";
import seekAndDestroy from "../../utils/seekAndDestroy.js";

const SeekAndDestroy = () => {

  return (
    <div className="component-wrapper-top">
        <div className="function-upper-wrapper">
        <p className="function-title">Seek And Destroy</p>
        <p className="function-description">Remove all elements from the initial array that are of the same value as these arguments.
            eg. [1,2,3,1,2,3] 2,3] return [1,1]</p>
        </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">seekAndDestroy([1, 2, 3, 5, 1, 2, 3], 2, 3)</p>
        <p className="function-result">{JSON.stringify(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], 2, 3))}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{seekAndDestroy.toString()}</p>
      </div>
    </div>
  );
};

export default SeekAndDestroy;
