'use strict';

import React from "react";
import "./States.css";

class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = { substring: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ substring: e.target.value });
  }

  // Supports multiple possible model shapes safely
  getAllStates() {
    const models = window.models || {};

    // Most likely: window.models.states is an array
    if (Array.isArray(models.states)) return models.states;

    // Sometimes: window.models.states.states is an array
    if (models.states && Array.isArray(models.states.states)) return models.states.states;

    // Sometimes: window.models.states is an object keyed by id
    if (models.states && typeof models.states === "object") {
      const vals = Object.values(models.states);
      if (vals.length && typeof vals[0] === "object") return vals;
    }

    return [];
  }

  normalizeName(s) {
    if (!s) return "";
    if (typeof s === "string") return s;
    if (typeof s.name === "string") return s.name;
    return String(s.name || "");
  }

  getKey(s, idx) {
    const id = s && (s._id || s.id || s.abbr || s.code);
    if (id !== undefined && id !== null) return String(id);
    return `${this.normalizeName(s)}-${idx}`;
  }

  render() {
    const allStates = this.getAllStates();
    const raw = this.state.substring;
    const q = raw.trim().toLowerCase();

    const filtered = allStates
      .filter((s) => {
        const name = this.normalizeName(s).toLowerCase();
        return q === "" ? true : name.includes(q);
      })
      .sort((a, b) => this.normalizeName(a).localeCompare(this.normalizeName(b)));

    return (
      <section className="states">
        <div className="states__header">
          <h2 className="states__title">States View</h2>

          <input
            className="states__input"
            type="text"
            value={raw}
            onChange={this.handleChange}
            placeholder="Type a substring (e.g., al)"
          />
        </div>

        <div className="states__info">
          Substring used:
          <span className="states__chip">{raw}</span>
        </div>

        <div className="states__count">
          Showing {filtered.length} of {allStates.length}
        </div>

        {filtered.length === 0 ? (
          <div className="states__empty">No states match that substring.</div>
        ) : (
          <ul className="states__list">
            {filtered.map((s, idx) => (
              <li key={this.getKey(s, idx)} className="states__item">
                {this.normalizeName(s)}
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}

export default States;