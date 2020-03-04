import React, { Component } from 'react';
import ListFunctions from './components/ListFunctions';
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
    console.log(this.state.menuStateClosed);
    console.log("toggleMenu");
    console.log(this.state.menuStateClosed);
  }

  openMenu = () => {
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  closeMenu = () => {
    document.body.style.backgroundColor = "white";
  }

  render() {
    return (
      <div className="App container">
        <p className="mobile--open-btn" onClick={(e) => this.toggleMenu(e)}>&#9776;</p>
        <div className="row">
          <div className="col-md-6">
            <ListFunctions
              onFunctionSelect={selectedFunction => this.setState({selectedFunction})}
              />
          </div>
          <div className="col-md-6">
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
