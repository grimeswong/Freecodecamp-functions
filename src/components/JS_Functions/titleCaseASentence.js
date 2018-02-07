import React from 'react';
import titleCaseASentence from '../../utils/titleCaseASentence.js';

const TitleCaseASentence = () => {
  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Title Case A Sentence</p>
        <p className="function-description">Return the provided string with the first letter of each word capitalized.
        And rest of the word is in lower case.</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">titleCaseASentence("I'm a little tea pot")</p>
        <p className="function-result">{titleCaseASentence("I'm a little tea pot")}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{titleCaseASentence.toString()}</p>
      </div>
    </div>
  );
}

export default TitleCaseASentence;
