import React, { Component } from "react";
import Goback from "../Side/Goback";

export default class Dice extends Component {
  state = {
    diceA: "",
    diceB: "",
    visibility: false,
  };

  handleSubmit = () => {
    let x = Math.floor(Math.random() * 6) + 1;
    let y = Math.floor(Math.random() * 6) + 1;
    this.setState({ diceA: x, diceB: y });
  };

  handleEach = () => {
    this.setState({ visibility: !this.state.visibility });
  };
  render() {
    return (
      <div>
        <Goback />
        <div className="App" style={{ marginTop: 100 }}>
          <button onClick={this.handleSubmit}>Roll the die</button>
          <div>
            <h3>The roll was: {this.state.diceA + this.state.diceB}</h3>
          </div>
          <button onClick={this.handleEach}>See each dice roll</button>
          <div
            style={{
              visibility:
                this.state.visibility === false ? "hidden" : "visible",
            }}
          >
            <h4>
              Dice A: {this.state.diceA}
              <br /> Dice B: {this.state.diceB}
            </h4>
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
