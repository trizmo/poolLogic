import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';


// Components
import RootWrapper from './components/wrappers/rootWrapper/RootWrapper.js'
import SuccessWrapper from './components/wrappers/successWrapper/SuccessWrapper';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      poolData: null,
      tester: "blue"
    };
    this.updatePoolData = this.updatePoolData.bind(this)
  }


  updatePoolData(data) {
    this.setState({
      poolData: data
    })
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter >
          <Switch>
            <Route exact path="/" render={(props) => <RootWrapper {...props} poolData={this.state} updatePoolData={this.updatePoolData} />} />
            <Route exact path="/success" render={(props) => <SuccessWrapper {...props} poolData={this.state} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
