import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

export default class Navbars extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{ color: "#cc931d" }}>
          Project A: little bit of everything
        </h1>
        <div>
          <h3>
            Coin Toss:{" "}
            <Link to="/coin">
              <button>Join us!</button>
            </Link>
          </h3>
        </div>
        <div>
          <h3>
            RPS:{" "}
            <Link to="/rps">
              <button>Join us!</button>
            </Link>
          </h3>
        </div>
        <div>
          <h3>
            Die Roll:{" "}
            <Link to="/dice">
              <button>Join us!</button>
            </Link>
          </h3>
        </div>
        <div>
          <h3>
            Random Number Generator:{" "}
            <Link to="/random">
              <button>Join us!</button>
            </Link>
          </h3>
        </div>
        <div>
          <h3>
            Login and Registration Page:{" "}
            <Link to="/login">
              <button>Join us!</button>
            </Link>
          </h3>
        </div>
        <div>
          <h3>
            API:{" "}
            <Link to="/api">
              <button>Join us!</button>
            </Link>
          </h3>
        </div>
        <div>
          <h3>
            Display Form:{" "}
            <Link to="/form">
              <button>Join us!</button>
            </Link>
          </h3>
        </div>
        <div>
          <h3>
            Google Map:{" "}
            <Link to="/googlemap">
              <button>Join us!</button>
            </Link>
          </h3>
        </div>
        <div style={{ marginTop: 100, fontStyle: "italic" }}>
          <p>
            <span style={{ color: "#cc931d", fontWeight: "bolder" }}>
              Project A
            </span>{" "}
            is being developed by {""}
            <div className="tooltip">
              <a
                style={{ color: "white" }}
                href="https://www.facebook.com/beguvoid"
              >
                Билгүүн Сонинбаяр.
              </a>{" "}
              <span className="tooltip-text">Check out my Facebook!</span>
            </div>
          </p>
        </div>
      </div>
    );
  }
}
