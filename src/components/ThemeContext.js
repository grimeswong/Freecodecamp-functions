import React from 'react';

export const themeColour = {
  light: {
    colour: "black",
    bgColour: "white",
    secColour: "green",
    titleColour: "white",
    textColour: "black",
    navBgColour: "green",
  },
  dark: {
    colour: "white",
    bgColour: "black",
    secColour: "green",
    titleColour: "white",
    textColour: "white",
    navBgColour: "black",
  }
}

export const ThemeContext = React.createContext(
  themeColour.light // default value
);
