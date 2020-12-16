import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";

import Timer from "./timer/Timer";
import "./Chefs.css";

export default class Chefs extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="chefs">
        <div className={theme === "light" ? null : "dark"}>
          <Timer />
        </div>
      </div>
    );
  }
}
