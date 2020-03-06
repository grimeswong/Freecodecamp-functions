import React from 'react';
import Data from '../data/data.js';

export const Nav = (props) => {
  return(
    <div className="nav--wrapper">
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
