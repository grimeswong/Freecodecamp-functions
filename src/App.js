import React, { Component } from 'react';
import Nav from './components/Nav.js';
import ListFunctions from './components/ListFunctions.js';
import DisplayComponent from './components/DisplayComponent.js';
import ThemeButton from './components/Theme-Button.js';
import { ThemeContext, themeColour } from './components/ThemeContext.js';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedFunction: "Difference of Two Arrays",
        menuStateClosed: true,
        theme: themeColour.light,
        toggleTheme: this.toggleTheme,
      };
  }

  toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themeColour.dark
            ? themeColour.light
            : themeColour.dark,
      }));
  };

  toggleMenu = (e) => {
      this.state.menuStateClosed? this.openMenu(): this.closeMenu()
      this.setState({menuStateClosed: !this.state.menuStateClosed})
  }

  openMenu = () => {
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    document.querySelectorAll(".nav--wrapper")[0].style.width = "100%";
  }

  closeMenu = () => {
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    document.querySelectorAll(".nav--wrapper")[0].style.width = "0";
  }

  render() {

    return (
      <ThemeContext.Provider value={this.state}>

        <div className="App"
             style={{ color: this.state.theme.color,
                      backgroundColor: this.state.theme.bgColour,
                    }}
        >
          <div className="container">
            <a href="#" className="mobile--toggle-btn" onClick={(e) => this.toggleMenu(e)} style={{color: this.state.theme.colour}}>&#9776;</a>
            <Nav toggleMenu={this.toggleMenu}
              onFunctionSelect={selectedFunction => this.setState({selectedFunction})}
            />
          <ThemeButton />
            <div className="row">
              <div className="col-lg-6">
                <ListFunctions
                  onFunctionSelect={selectedFunction => this.setState({selectedFunction})}
                  />
              </div>
              <div className="col-lg-6">
                <DisplayComponent
                  selectedFunction={this.state.selectedFunction}
                  />
              </div>
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
