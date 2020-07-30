import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';


// Components
import RootWrapper from './components/wrappers/rootWrapper/RootWrapper.js'
import SuccessWrapper from './components/wrappers/successWrapper/SuccessWrapper';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={RootWrapper} />
          <Route exact path="/success" component={SuccessWrapper} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
