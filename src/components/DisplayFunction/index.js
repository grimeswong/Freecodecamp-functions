import React from 'react';
import DiffTwoArrays from '../JS_Functions/diffTwoArrays.js';
import SumAllNumberInRange from '../JS_Functions/sumAllNumberInRange.js';
import RomanNumeralConverter from '../JS_Functions/romanNumeralConverter.js';
import GetGeolocation from '../JS_Functions/getGeolocation.js';
import CaesarCipher from '../JS_Functions/caesarCipher.js';
import WhereDoIBelong from '../JS_Functions/whereDoIBelong.js';
import SeekAndDestroy from '../JS_Functions/seekAndDestroy.js';
import FalsyBouncer from '../JS_Functions/falsyBouncer.js';

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

      default:
      return null;
  }

}


export default DisplayFunction;
