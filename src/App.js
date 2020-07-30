import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Convention } from './pages/Convention';
import { Index } from './pages';
import { Page } from './layout/page';

function App() {
  return (
    <div className="App">
      <Page>
        <Router>
          <Switch>
            <Route path="/conventions/:id">
              <Convention />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </Router>
      </Page>
    </div>
  );
}

export default App;
