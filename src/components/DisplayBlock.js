import React, {useContext} from 'react';
import { ThemeContext } from './ThemeContext.js'; //Subscribe the ThemeContext Object


// This component only display the processed data
const DisplayBlock = (props) => {
  const theme = useContext(ThemeContext).theme;
  console.log(props);

  // return input argument text(s) from array of argument
  const argumentText = props.arguments.map((element, index) => {
    return (<p key={index} className="function--argument" style={{color: theme.colour}}>{element}</p>)
  })

  return (
    <div className="component--wrapper function--wrapper"  style={{color: theme.colour}}>
      <div className="function--title-wrapper component--box-shadow">
        <p className="function--title">{props.title}</p>
        <p className="function--description">{props.description}</p>
      </div>
      <div className="function--test-wrapper component--box-shadow">
        <p className="function--test-title"></p>
        {argumentText}
        <p className="function--result">{props.result}</p>
      </div>
      <div className="function--sourcecode-wrapper component--box-shadow">
        <p className="function--sourcecode-title"></p>
        <pre>
          <code className="function--sourcecode-source" style={{color: theme.textColour}}>{props.source}</code>
        </pre>
      </div>
    </div>
  )
}

export default DisplayBlock
