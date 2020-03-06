import React from 'react';

export const Nav = (props) => {
  return(
    <div className="nav--wrapper">This is Nav wrapper
    <a href="#" className="nav--close-btn" onClick={props.toggleMenu}>&times;</a></div>
  )
}

export default Nav;
