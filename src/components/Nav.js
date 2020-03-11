import React, {useContext} from 'react';
import Data from '../data/data.js';
import { ThemeContext } from './ThemeContext.js'; //Subscribe the ThemeContext Object

export const Nav = (props) => {
  const theme = useContext(ThemeContext);

  return(
    <div className="nav--wrapper" style={{backgroundColor: theme.navBgColour}}>
      <ul>
        {Data.map((utility, index) => {

          return utility.title!=="" ? // only return list of valid title
          <li onClick={ () => {
              props.onFunctionSelect(utility.title);
              props.toggleMenu();
              }}
              key={index}>{utility.title}
          </li> : null
        })}
      </ul>
    </div>

  )
}

export default Nav;
