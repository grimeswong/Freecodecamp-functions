import React, { useContext }from 'react';
import { ThemeContext } from './ThemeContext.js';

function ThemeTogglerButton() {

  const theme = useContext(ThemeContext).theme; // Get the passed down theme
  const toggleTheme = useContext(ThemeContext).toggleTheme;

  const updateBodyColor = (colour) => {
    document.body.style.backgroundColor = colour ==="black"? "white" : "black";
  }

  const tasks = (colour) => {
    updateBodyColor(colour);
    toggleTheme();
  }
  
  return (
        <>
        <button
          style={{color: theme.titleColour, backgroundColor: theme.secColour}}
          onClick={() => {tasks(theme.bgColour)}}
          >
          Toggle Theme
        </button>
        </>
  );
}

export default ThemeTogglerButton;
