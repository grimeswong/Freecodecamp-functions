import React from 'react';
import checkForPalindromes from '../../utils/checkForPalindromes.js';

const CheckForPalindromes = () => {
  return (
    <div className="component-wrapper-top">
      <div className="function-upper-wrapper">
        <p className="function-title">Check For Palindromes</p>
        <p className="function-description">A palindrome is a word or sentence that's spelled the same way both forward
        and backward, ignoring punctuation, case, and spacing.
        Return true if the given string is a palindrome. Otherwise, return false.</p>
      </div>
      <div className="function-lower-wrapper">
        <p className="function-test-title"></p>
        <p className="function-argument">checkForPalindromes("A man, a plan, a canal. Panama")</p>
        <p className="function-result">{JSON.stringify(checkForPalindromes("A man, a plan, a canal. Panama"))}</p>
      </div>
      <div className="function-sourcecode-wrapper">
        <p className="function-sourcecode-title"></p>
        <p className="function-sourcecode-source">{checkForPalindromes.toString()}</p>
      </div>
    </div>
  );
}

export default CheckForPalindromes;
