import React from 'react';
import searchAndReplace from '../../utils/searchAndReplace.js';

const SearchAndReplace = () => {
  return(
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Search And Replace</p>
        <p className="function-description">Perform a search and replace on the sentence using the arguments provided and return the new sentence.
          First argument is the sentence to perform the search and replace on.
          Second argument is the word that you will be replacing (before).
          Third argument is what you will be replacing the second argument with (after).</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">searchAndReplace("He is Sleeping on the couch", "Sleeping", "sitting")</p>
        <p className="function-result">{searchAndReplace("He is Sleeping on the couch", "Sleeping", "sitting")}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{searchAndReplace.toString()}</p>
      </div>
    </div>
  );
}

export default SearchAndReplace;