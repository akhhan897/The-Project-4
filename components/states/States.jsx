import React from "react";
import "./States.css";

class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      substring: "",
      allStates: this.loadStates(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ substring: e.target.value });
  }

  /* eslint-disable-next-line class-methods-use-this */
  loadStates() {
    const models = window.models || {};
    const raw = models.states;

    if (typeof raw === "function") {
      const result = raw();
      return Array.isArray(result) ? result : [];
    }

    if (Array.isArray(raw)) {
      return raw;
    }

    return [];
  }

  render() {
    const { substring, allStates } = this.state;
    const q = substring.trim().toLowerCase();

    const filtered = allStates
      .filter((name) => {
        const n = String(name).toLowerCase();
        if (q === "") {
          return true;
        }
        return n.includes(q);
      })
      .sort((a, b) => String(a).localeCompare(String(b)));

    return (
      <section className="states">
        <div className="states__header">
          <h2 className="states__title">U.S. States</h2>

          <input
            className="states__input"
            type="text"
            value={substring}
            onChange={this.handleChange}
            placeholder="Type a substring (e.g., al)"
          />
        </div>

        <div className="states__info">
          Substring used:
          <span className="states__chip">{substring}</span>
        </div>

        <div className="states__count">
          Showing {filtered.length} of {allStates.length}
        </div>

        {filtered.length === 0 ? (
          <div className="states__empty">No states match that substring.</div>
        ) : (
          <ul className="states__list">
            {filtered.map((name) => (
              <li key={name} className="states__item">
                {name}
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}

export default States;