import React, {useContext} from 'react';
import Data from '../data/data.js';
import { ThemeContext } from './ThemeContext.js'; //Subscribe the ThemeContext Object

const ListFunctions = (props) => {

  const theme = useContext(ThemeContext).theme;

  return(
    <div className="list--wrapper component--wrapper" style={{ color: theme.textColour }}>
      <p className="list--title">List of JS functions ({Data.length})</p>
      <ul >
        {Data.map((utility, index) => {

          return utility.title!=="" ? // only return list of valid title
          <li onClick={ () => {
              props.onFunctionSelect(utility.title);
              }}
              key={index}
          >
          {utility.title}
          </li> : null
        })}
      </ul>
    </div>
  )
}

export default ListFunctions;
