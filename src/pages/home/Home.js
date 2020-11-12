import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="home">
        <div className="home-splash">
          <div className={theme === "light" ? null : "dark"}>
            <h1>EGGS</h1>
          </div>
        </div>
        <div className="home-what">
          <div className={theme === "light" ? null : "dark"}>
            <h2>What are eggs?</h2>
            <p>something about eggs here</p>
            <img
              src="../../images/siva-t-9gV3pwjKxKo-unsplash.jpg"
              alt="a flower of eggs"
            />
          </div>
        </div>
        <div className={theme === "light" ? "home-why" : "home-why-dark"}>
          <h2>Why eggs?</h2>
          <p>why not eggs here</p>
          <img
            src="../..//images/rachael-gorjestani-g8xdO1Q1kIg-unsplash.jpg"
            alt="a nest of eggs"
          />
        </div>
        <div className="home-who">
          <div className={theme === "light" ? null : "dark"}>
            <h2>What, you egg?</h2>
            <p>something about me here</p>
            <img
              src="../..//images/annie-spratt-49Y9j30lGyg-unsplash.jpg"
              alt="happy egg"
            />
          </div>
        </div>
      </div>
    );
  }
}
