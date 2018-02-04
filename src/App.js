import React, { Component } from 'react';
import './App.css';
import DisplayFunction from './components/DisplayFunction';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedFunction: "DiffTwoArrays"
      };
      // console.log("this state is = " + this.state.selectedFunction);
      this.btnClick = this.btnClick.bind(this)
  }

  btnClick(obj) {
    // console.log("click = " + obj.target.value);
    this.setState({
      selectedFunction: obj.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="col-md-6 text-left">
          <div className="row">
            <button className="btn btn-success" onClick={this.btnClick} value="DiffTwoArrays">Difference of Two Arrays</button>
            <button className="btn btn-success" onClick={this.btnClick} value="SumAllNumberInRange">Sum All Number In Range</button>
          </div>
        </div>
        <div className="col-md-6">
          <DisplayFunction selectedFunction = {this.state.selectedFunction}/>
        </div>
      </div>
    );
  }
}

export default App;
