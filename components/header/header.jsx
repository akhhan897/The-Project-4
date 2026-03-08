

import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <div className="header-container">
          <h1 className="project-title">
            Project 4 — ReactJS Application
          </h1>

          <p className="project-subtitle">
            MVC Architecture • Dynamic Views • Webpack Build
          </p>

          <div className="header-divider"></div>
        </div>
      </header>
    );
  }
}

export default Header;