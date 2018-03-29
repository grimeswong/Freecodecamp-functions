import React from 'react';
import DiffTwoArrays from '../JS_Functions/diffTwoArrays.js';
import SumAllNumberInRange from '../JS_Functions/sumAllNumberInRange.js';
import RomanNumeralConverter from '../JS_Functions/romanNumeralConverter.js';
import GetGeolocation from '../JS_Functions/getGeolocation.js';
import CaesarCipher from '../JS_Functions/caesarCipher.js';
import WhereDoIBelong from '../JS_Functions/whereDoIBelong.js';
import SeekAndDestroy from '../JS_Functions/seekAndDestroy.js';
import FalsyBouncer from '../JS_Functions/falsyBouncer.js';
import Mutations from '../JS_Functions/mutations.js';
import RepeatAString from '../JS_Functions/repeatAString.js';
import ChunkyMonkey from '../JS_Functions/chunkyMonkey.js';
import ConfirmTheEnding from '../JS_Functions/confirmTheEnding.js';
import LargestNumbersInArrays from '../JS_Functions/largestNumbersInArrays.js';
import TitleCaseASentence from '../JS_Functions/titleCaseASentence.js';
import FindTheLongestWordInAString from '../JS_Functions/findTheLongestWordInAString.js';
import CheckForPalindromes from '../JS_Functions/checkForPalindromes.js';
import WhereforeArtThou from '../JS_Functions/whereforeArtThou.js';
import SearchAndReplace from '../JS_Functions/searchAndReplace.js';
import TruncateAString from '../JS_Functions/truncateAString.js';




const DisplayFunction = (props) => {
  console.log("DisplayFunction = " + props.selectedFunction);

  switch (props.selectedFunction) {
      case 'DiffTwoArrays': return <DiffTwoArrays />
      case 'SumAllNumberInRange': return <SumAllNumberInRange />
      case 'RomanNumeralConverter': return <RomanNumeralConverter />
      case 'GetGeolocation': return <GetGeolocation />
      case 'CaesarCipher': return <CaesarCipher />
      case 'WhereDoIBelong': return <WhereDoIBelong />
      case 'SeekAndDestroy': return <SeekAndDestroy />
      case 'FalsyBouncer': return <FalsyBouncer />
      case 'Mutations': return <Mutations />
      case 'RepeatAString': return <RepeatAString />
      case 'ChunkyMonkey': return <ChunkyMonkey />
      case 'ConfirmTheEnding': return <ConfirmTheEnding />
      case 'LargestNumbersInArrays': return <LargestNumbersInArrays />
      case 'TitleCaseASentence': return <TitleCaseASentence />
      case 'FindTheLongestWordInAString': return <FindTheLongestWordInAString />
      case 'CheckForPalindromes': return <CheckForPalindromes />
      case 'WhereforeArtThou': return <WhereforeArtThou />
      case 'SearchAndReplace': return <SearchAndReplace />
      case 'TruncateAString': return <TruncateAString />

      default:
      return null;
  }

}

export default DisplayFunction;
