'use strict';

import React from "react";
import "./States.css";

class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      substring: ""
    };
  }

  handleChange = (event) => {
    this.setState({ substring: event.target.value });
  };

  render() {
    const substring = this.state.substring.toLowerCase();

    // Get model data from window.models
    const states = window.models.states;

    // Filter + sort alphabetically
    const filteredStates = states
      .filter(state =>
        state.name.toLowerCase().includes(substring)
      )
      .sort((a, b) => a.name.localeCompare(b.name));

    return (
      <div className="states">
        <h2>States View</h2>

        <input
          type="text"
          placeholder="Enter substring..."
          value={this.state.substring}
          onChange={this.handleChange}
          className="states-input"
        />

        <p className="states-substring">
          Current substring: <strong>{this.state.substring}</strong>
        </p>

        {filteredStates.length === 0 ? (
          <p className="states-empty">
            No states match that substring.
          </p>
        ) : (
          <ul className="states-list">
            {filteredStates.map(state => (
              <li key={state._id}>
                {state.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default States;
