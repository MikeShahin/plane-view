import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home';
import AddTrip from './containers/AddTrip'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Home />
         <BrowserRouter>
          <Switch>
            {/* <Route exact path='/' component={}/> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default (App);
