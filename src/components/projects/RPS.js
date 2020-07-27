import React, { Component } from "react";
import Goback from "../Side/Goback";
export default class RPS extends Component {
  state = {
    choice: "",
    bot: "",
    result: "",
  };

  handleBot = () => {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
      this.setState({ bot: "paper" });
    }
    if (x === 2) {
      this.setState({ bot: "rock" });
    }
    if (x === 3) {
      this.setState({ bot: "scissors" });
    }
  };
  handleResult = (choice) => {
    if (choice === "paper") {
      if (this.state.bot === "paper") {
        console.log("Draw!");
        this.setState({ result: "Draw!" });
      }
    }
  };

  handlePaper = () => {
    this.setState({ choice: "paper" });
    this.handleBot(); //bot: '';
    this.setState({ result: "draw" });
  };
  handleScissors = () => {
    this.handleBot();
    this.setState({ choice: "scissors" });
    this.handleResult(this.state.choice);
  };
  handleRock = () => {
    this.handleBot();
    this.setState({ choice: "rock" });
    this.handleResult(this.state.choice);
  };
  render() {
    return (
      <div>
        <Goback />
        <div className="App" style={{ marginTop: 60 }}>
          <button onClick={this.handlePaper}>Paper</button>
          <button onClick={this.handleScissors}>Scissors</button>
          <button onClick={this.handleRock}>Rock</button>
          <div>
            <h4>
              Your choice: {this.state.choice} <br />
              Bot choice: {this.state.bot}
              <br />
              <p></p>
              {this.state.result}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
