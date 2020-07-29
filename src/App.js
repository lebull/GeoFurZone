import React from 'react';
import { FurconMap } from './components/furconMap';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <FurconMap />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
