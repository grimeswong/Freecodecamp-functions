import React, { Component } from 'react';
import Nav from './components/Nav.js';
import ListFunctions from './components/ListFunctions.js';
import DisplayComponent from './components/DisplayComponent.js';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedFunction: "Difference of Two Arrays",
        menuStateClosed: true
      };
  }

  toggleMenu = (e) => {
      this.state.menuStateClosed? this.openMenu(): this.closeMenu()
      this.setState({menuStateClosed: !this.state.menuStateClosed})
  }

  openMenu = () => {
    document.body.style.backgroundColor = "rgb(26, 25, 25)";
    document.querySelectorAll(".function--wrapper")[0].style.opacity = 0;
    document.querySelectorAll(".list--wrapper")[0].style.left = "0";
  }

  closeMenu = () => {
    document.body.style.backgroundColor = "white";
    document.querySelectorAll(".function--wrapper")[0].style.opacity = 1;
    document.getElementsByTagName("html")[0].style.overflow = "scroll";
  }

  render() {
    return (
      <div className="App container">
        <a href="#" className="mobile--open-btn" onClick={(e) => this.toggleMenu(e)}>&#9776;</a>
        <Nav />
        <div className="row">
          <div className="col-lg-6">
            <ListFunctions
              onFunctionSelect={selectedFunction => this.setState({selectedFunction})}
              toggleMenu={this.toggleMenu}
              />
          </div>
          <div className="col-lg-6">
            <DisplayComponent
              selectedFunction={this.state.selectedFunction}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
