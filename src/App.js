import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import { connect } from 'react-redux'
import Home from './components/Home';
import NewTrip from './containers/NewTrip'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Home />
         <BrowserRouter>
          <Switch>
            {/* <Route exact path='/' component={Home}/> */}
            <Route exact path='/newtrip' component={NewTrip}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default (App);
