import React from 'react';
import whereforeArtThou from '../../utils/whereForeArtThou.js';

const WhereforeArtThou = () => {
  return(
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Wherefore Art Thou</p>
        <p className="function-description">Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). </p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">whereforeArtThou([ &#123; "a"&#58; 1, "b" &#58; 2  &#125;,  &#123; "a" &#58; 1  &#125;,  &#123; "a" &#58; 1, "b" &#58; 2, "c" &#58; 2  &#125;],  &#123; "a" &#58; 1, "c" &#58; 2  &#125;)</p>
        <p className="function-result">{whereforeArtThou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })} </p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{whereforeArtThou.toString()}</p>
      </div>
    </div>
  );
}

export default WhereforeArtThou;