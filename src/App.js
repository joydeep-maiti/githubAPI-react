import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import User from './Container/User/User';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <User />
      </div>
    );
  }
}

export default App;
