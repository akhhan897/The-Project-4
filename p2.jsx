'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

import Header from './components/header/header';
import States from './components/states/States';

function App() {
  return (
    <div>
      <Header />
      <States />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('reactapp'),
);