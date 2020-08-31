import React, { useState, useEffect } from "react";
import Goback from "../Side/Goback";
export default function RockPaperScissors() {
  const [choice, setChoice] = useState("");
  const [bot, setBot] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (choice === "paper") {
      if (bot === "paper") {
        setResult("Draw, paper: paper.");
      } else if (bot === "rock") {
        setResult("User wins! Paper beats rock");
      } else if (bot === "scissors") {
        setResult("Bot wins! Scissors beats paper!");
      } else {
        console.log("Fail");
      }
    } else if (choice === "rock") {
      if (bot === "paper") {
        setResult("Bot wins! Paper beats rock.");
      } else if (bot === "rock") {
        setResult("Draw! Rock vs. Rock. Nice.");
      } else if (bot === "scissors") {
        setResult("User wins! Rock beats scissors.");
      } else {
        console.log("Fail");
      }
    } else if (choice === "scissors") {
      if (bot === "paper") {
        setResult(" User wins! Scissors beat paper.");
      } else if (bot === "rock") {
        setResult(" Bot wins! Rock beats scissors!");
      } else if (bot === "scissors") {
        setResult("Draw, scissors vs. scissors.");
      } else {
        console.log("Fail");
      }
    }
  });
  let handleResult = (hand) => {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
      setBot("paper");
    }
    if (x === 2) {
      setBot("rock");
    }
    if (x === 3) {
      setBot("scissors");
    }

    if (hand === "paper") {
      setChoice("paper");
    } else if (hand === "rock") {
      setChoice("rock");
    } else if (hand === "scissors") {
      setChoice("scissors");
    } else {
      return;
    }
  };

  return (
    <>
      <Goback />
      <div className="App" style={{ marginTop: 60 }}>
        <button
          onClick={() => {
            handleResult("paper");
          }}
        >
          Paper
        </button>
        <button
          onClick={() => {
            handleResult("scissors");
          }}
        >
          Scissors
        </button>
        <button
          onClick={() => {
            handleResult("rock");
          }}
        >
          Rock
        </button>
        <div>
          <h4>
            Your choice: {choice} <br />
            Bot choice: {bot}
            <br />
            <p></p>
            {result}
          </h4>
        </div>
      </div>
    </>
  );
}
