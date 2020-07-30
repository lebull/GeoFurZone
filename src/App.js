import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Convention } from './pages/Convention';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/conventions/:id">
            <Convention />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
