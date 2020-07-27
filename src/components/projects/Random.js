import React, { Component } from "react";
import Goback from "../Side/Goback";
export default class Random extends Component {
  state = {
    num: "",
    min: "",
    max: "",
    vis: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    let maxP = parseInt(this.state.max);
    let minP = parseInt(this.state.min);
    let x = Math.floor(Math.random() * (maxP - minP + 1)) + minP;

    if (this.state.min !== "" && this.state.max !== "") {
      this.setState({ vis: true });
      this.setState({ num: "Generated: " + x });
    } else if (this.state.min === "" || this.state.max === "") {
      this.setState({ num: "Error: Please insert real numbers." });
      this.setState({ vis: true });
    }
  };

  render() {
    return (
      <div>
        <Goback />
        <div className="App" style={{ marginTop: 80 }}>
          <input
            name="min"
            value={this.state.min}
            onChange={this.handleChange}
            placeholder="Min"
          />
          <br />
          <input
            name="max"
            value={this.state.max}
            onChange={this.handleChange}
            placeholder="Max"
          />
          <br />
          <br />
          <button onClick={this.handleSubmit}>Generate</button>
          <div className={this.state.vis ? "vis-vis" : "vis-hid"}>
            <h4>{this.state.num}</h4>
          </div>
          <div style={{ marginTop: 300, fontStyle: "italic" }}>
            <p>
              This app works by creating random numbers from 1 to 6 for each
              dice,
              <br />
              and with React rendering the changes of the die state.
              <br />
              The bottom button works as we toggle the visibility of the result.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
