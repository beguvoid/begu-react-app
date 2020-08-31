import React, { Component } from "react";
import Goback from "../Side/Goback";
import axios from "axios";
export default class Api extends Component {
  state = {
    person: [],
    loading: true,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    return (
      <div>
        <Goback />
        {this.state.loading || !this.state.person ? (
          <div>Loading...</div>
        ) : (
          <div>{this.state.person.name}</div>
        )}
      </div>
    );
  }
}
