import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



//import Greet from './components/Greet'
//import Count from './components/Count'
//import Message from './components/Message'
import Nav from './components/Nav'
import Home from './components/Home'
//import Clock from './components/Clock'
import Polls from './components/Polls'

class App extends Component {
  render() { 
    return (
    <div className="App">
       <logo />
      <Router>
        <Nav />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/polls' component={Polls} />
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
