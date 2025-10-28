import React, { Component } from 'react';
// import { Route, Switch, BrowserRouter } from 'react-router';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Countries from './Countries';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };

  }

  render() {
    return (
      <BrowserRouter>

      <div>
        <Navbar/>
        <Switch>
            <Route path="/" exact component={Countries} />
            <Route path="/covid" component={Countries} />
            <Route path="/about" component={About} />
          </Switch>
      </div>
      </BrowserRouter>

    );
  }
}
export default App;
