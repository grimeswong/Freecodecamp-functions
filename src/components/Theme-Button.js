import React, { useContext }from 'react';
import { ThemeContext } from './ThemeContext.js';

function ThemeTogglerButton() {

  const theme = useContext(ThemeContext).theme; // Get the passed down theme
  const toggleTheme = useContext(ThemeContext).toggleTheme;

  return (
        <>
        <button
          style={{color: theme.titleColour, backgroundColor: theme.secColour}}
          onClick={toggleTheme}
          >
          Toggle Theme
        </button>
        </>
  );
}

export default ThemeTogglerButton;
