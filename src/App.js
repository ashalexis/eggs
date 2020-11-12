import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { HashRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";

import Chefs from "./pages/chefs/Chefs";
import Contact from "./pages/contact/Contact";
import Eggstras from "./pages/eggstras/Eggstras";
import Games from "./pages/games/Games";
import Home from "./pages/home/Home";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Router basename="/">
          <div className="app">
            <nav className={theme === "light" ? "header" : "header-dark"}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/chefs">Chefs</Link>
                </li>
                <li>
                  <Link to="/games">Games</Link>
                </li>
                <li>
                  <Link to="/eggstras">Eggstras</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                      <input
                        type="checkbox"
                        id="checkbox"
                        onChange={toggleTheme}
                      ></input>
                      <div className="slider round"></div>
                    </label>
                  </div>
                </li>
              </ul>
            </nav>

            <div className="main">
              <Switch>
                <Route exact path="/chefs">
                  <Chefs />
                </Route>
                <Route exact path="/games">
                  <Games />
                </Route>
                <Route exact path="/eggstras">
                  <Eggstras />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
                <Route exact path="/">
                  <Home theme={theme} />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
