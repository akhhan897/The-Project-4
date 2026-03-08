
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

import Header from './components/header/header';
import Example from './components/example/Example';

function App() {
  return (
    <div>
      <Header />
      <Example />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('reactapp'),
);