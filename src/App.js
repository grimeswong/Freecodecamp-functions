import React, { Component } from 'react';
import ListFunctions from './components/ListFunctions';
import DisplayComponent from './components/DisplayComponent.js';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedFunction: "Difference of Two Arrays"
      };
  }

  toggle = () => {
    console.log(`close or open side nav`)
  }

  render() {
    return (
      <div className="App container">
        <p className="mobile--open-btn" onClick={this.toggle()}>&#9776;</p>
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
