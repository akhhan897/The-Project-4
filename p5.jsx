import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Example from './components/example/Example';
import States from './components/states/States';

function P5() {
  return (
    <HashRouter>
      <nav>
        <Link to="/example">Switch to Example</Link>
        <Link to="/states">Switch to States</Link>
      </nav>
      <Route path="/example" component={Example} />
      <Route path="/states" component={States} />
    </HashRouter>
  );
}

export default P5;