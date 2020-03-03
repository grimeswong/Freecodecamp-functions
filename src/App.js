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

  render() {
    return (
      <div className="App">
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
    );
  }
}

export default App;
