// import React, { Component } from "react";
// import Goback from "../Side/Goback";
// import Gif from "../images/coin.gif";
// import Still from "../images/still.jpg";
// export default class Coin extends Component {
//   state = {
//     coin: "",
//     anim: false,
//     vis: false,
//   };

//   handleSubmit = (e) => {
//     this.setState({ anim: true });
//     let x = Math.floor(Math.random() * 2);
//     this.setState({ coin: x == 0 ? "Heads" : "Tails" });
//     this.setState({ vis: true });
//     setTimeout(() => {
//       this.setState({ anim: false });
//     }, 1500);
//     e.preventDefault();
//   };
//   render() {
//     return (
//       <div>
//         <Goback />
//         <div className="App" style={{ marginTop: 20 }}>
//           <img
//             src={this.state.anim ? Gif : Still}
//             style={{ marginTop: 0, width: 250, height: 250 }}
//           />{" "}
//           <br />
//           <div
//             className={this.state.vis ? "vis-vis" : "vis-hid"}
//             style={{ marginTop: 30, fontSize: 30 }}
//           >
//             <h3>The toss was: {this.state.coin}</h3>
//           </div>
//           <button onClick={this.handleSubmit} style={{ marginTop: 30 }}>
//             Click to toss Coin!
//           </button>
//           <div style={{ marginTop: 150, fontStyle: "italic" }}>
//             <p>
//               This app works with a random number generator through
//               Math.floor(Math.random()),
//               <br />
//               and with React rendering the changes of the coin state.
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
