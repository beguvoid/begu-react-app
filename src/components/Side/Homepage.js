import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Coin from "../projects/Coin";
import Dice from "../projects/Dice";
import Random from "../projects/Random";
import Navbars from "./Navbars";
import RPS from "../projects/RPS";
import Login from "../projects/Login";
import Api from "../projects/Api";
import DisplayForm from "../projects/DisplayForm";
import Google from "../projects/Google";
export default class Homepage extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/coin">
          <Coin />
        </Route>
        <Route exact path="/dice">
          <Dice />
        </Route>
        <Route exact path="/random">
          <Random />
        </Route>
        <Route exact path="/rps">
          <RPS />
        </Route>
        <Route exact path="/">
          <Navbars />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/api">
          <Api />
        </Route>
        <Route exact path="/form">
          <DisplayForm />
        </Route>
        <Route exact path="/googlemap">
          <Google />
        </Route>
      </Router>
    );
  }
}
