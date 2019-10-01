import React, { Component } from 'react';
import { render } from 'react-dom';
import Login from './login';
import SignUp from './signUp';
import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/signUp' component={SignUp} />
          <Route path='/layout' component={Layout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
