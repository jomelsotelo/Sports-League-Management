import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Component from './components/Header';
import Login from './pages/auth/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Component} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;