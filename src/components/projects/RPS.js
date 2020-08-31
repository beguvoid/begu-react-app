import React, { Component } from "react";
import Goback from "../Side/Goback";
import Rock from "../images/rock.png";
import Paper from "../images/paper.png";
import Scissors from "../images/scissors.png";
export default class RPS extends Component {
  state = {
    choice: "",
    bot: "",
    result: "",
    human: "",
    botpic: "",
    vis: false,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   let choice = this.state.choice;
  //   let bot = this.state.bot;
  //   if (choice === bot) {
  //     this.setState({ result: "Draw!" });
  //   }

  //   // } else if (choice == Paper && bot == Rock) {
  //   //   this.setState({ result: "You win!" });
  //   // }
  //   // } else if (choice == Scissors && bot == Rock) {
  //   //   this.setState({ result: "You lose!" });
  //   // }
  // }

  handleBot = () => {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x == 1) {
      this.setState({ bot: Paper });
    }
    if (x == 2) {
      this.setState({ bot: Rock });
    }
    if (x == 3) {
      this.setState({ bot: Scissors });
    }
  };
  handleResult = () => {
    let choice = this.state.choice;
    let bot = this.state.bot;
    if (choice === bot) {
      this.setState({ result: "Draw!" });
    } else if (choice == Paper && bot == Rock) {
      this.setState({ result: "You win!" });
    } else if (choice == Paper && bot == Scissors) {
      this.setState({ result: "You lose!" });
    }
  };

  handlePaper = (e) => {
    this.handleBot();
    this.handleResult();
    this.setState({ choice: Paper, vis: true });
    e.preventDefault();
  };
  handleScissors = (e) => {
    this.handleBot();
    this.setState({ choice: Scissors, vis: true });
    e.preventDefault();
  };
  handleRock = (e) => {
    this.handleBot();
    this.setState({ choice: Rock, vis: true });
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <Goback />
        <div className="App">
          <h1 className={this.state.vis ? "vis-hid" : "vis-vis"}>
            Choose your option
          </h1>
          <button onClick={this.handlePaper}>Paper</button>
          <button onClick={this.handleScissors}>Scissors</button>
          <button onClick={this.handleRock}>Rock</button>
          <div>
            <h4 className={this.state.vis ? "vis-vis" : "vis-hid"}>
              {/* You: {this.state.choice} <br /> */}
              You: <br />
              <img
                style={{ width: 200, height: 200 }}
                src={this.state.choice}
              />{" "}
              <br />
              Bot:
              <br />{" "}
              <img style={{ width: 200, height: 200 }} src={this.state.bot} />
              <br />
              <br />
              <p>{this.state.result}</p>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
