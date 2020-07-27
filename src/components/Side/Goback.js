import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Goback extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    );
  }
}
