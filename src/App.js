import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import Home from "./app/home/index";
import Login from "./app/login";
import Signup from "./app/signup/index";
import Dashboard from "./app/dashboard";
import ContactUs from './app/contact';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/contact" component={ContactUs}/>
      </Switch>
    </Router>
  )
}

export default App;
