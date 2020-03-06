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
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    document.querySelectorAll(".nav--wrapper")[0].style.width = "100%";
  }

  closeMenu = () => {
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    document.querySelectorAll(".nav--wrapper")[0].style.width = "0";
  }

  render() {
    return (
      <div className="App container">
        <a href="#" className="mobile--open-btn" onClick={(e) => this.toggleMenu(e)}>&#9776;</a>
        <Nav toggleMenu={this.toggleMenu} />
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
    );
  }
}

export default App;
