import React, { useState, useEffect } from "react";
import Goback from "../Side/Goback";
import Gif from "../images/coin.gif";
import Still from "../images/still.jpg";

export default function CoinFlip() {
  const [coin, setCoin] = useState("");
  const [anim, setAnim] = useState(false);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (anim === true) {
      setTimeout(() => {
        setAnim(false);
      }, 1500);
    }
  });

  let handleSubmit = (e) => {
    let x = Math.floor(Math.random() * 2);
    if (x == 0) {
      setCoin("Heads");
    } else if (x == 1) {
      setCoin("Tails");
    }
    setAnim(true);
    setVis(true);
    e.preventDefault();
  };

  return (
    <div>
      <Goback />
      <div className="App" style={{ marginTop: 20 }}>
        <Image />
        <Toss />
        <Footer />
      </div>
    </div>
  );

  // Components

  function Image() {
    return (
      <>
        <img
          src={anim ? Gif : Still}
          style={{ marginTop: 0, width: 250, height: 250 }}
        />{" "}
        <br />
      </>
    );
  }

  function Toss() {
    return (
      <>
        <div
          className={vis ? "vis-vis" : "vis-hid"}
          style={{ marginTop: 30, fontSize: 30 }}
        >
          <h3>The toss was: {coin}</h3>
        </div>
        <button onClick={handleSubmit} style={{ marginTop: 30 }}>
          Click to toss Coin!
        </button>
      </>
    );
  }

  function Footer() {
    return (
      <>
        <div style={{ marginTop: 150, fontStyle: "italic" }}>
          <p>
            This app works with a random number generator through
            Math.floor(Math.random()),
            <br />
            and with React rendering the changes of the coin state.
          </p>
        </div>
      </>
    );
  }
}
