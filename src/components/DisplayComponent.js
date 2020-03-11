import React, {useContext} from 'react';
import Data from '../data/data.js'
import * as util from '../utils/utilList.js'; // loaded all the functions from the utilities list
import { ThemeContext } from './ThemeContext.js'; //Subscribe the ThemeContext Object

const DisplayComponent = (props) => {

  const theme = useContext(ThemeContext).theme;

  const getIndex = Data.findIndex((element) => {  // get the index compared with the props selected function
      return element.title === props.selectedFunction;
  });

  const getFuncName = Data[getIndex].funcName;  // get the function according to its index of Data

  // return input argument text(s) from array of argument
  const argumentText = Data[getIndex].argument.map((element, index) => {
    return (<p key={index} className="function--argument" style={{color: theme.colour}}>{element}</p>)
  })

  console.log(theme.bgColour);
  console.log(Data[getIndex].test.argument)

  return (
      <div className="component--wrapper function--wrapper"  style={{color: theme.colour}}>
        <div className="function--title-wrapper component--box-shadow">
          <p className="function--title">{Data[getIndex].title}</p>
          <p className="function--description">{Data[getIndex].description}</p>
        </div>
        <div className="function--test-wrapper component--box-shadow">
          <p className="function--test-title"></p>
          {argumentText}
          <p className="function--result">{JSON.stringify(util[getFuncName](...Data[getIndex].test.argument))}</p>
        </div>
        <div className="function--sourcecode-wrapper component--box-shadow">
          <p className="function--sourcecode-title"></p>
          <pre>
            <code className="function--sourcecode-source" style={{color: theme.textColour}}>{util[getFuncName].toString()}</code>
          </pre>
        </div>
      </div>
  )
}

export default DisplayComponent
