import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { HashRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";

//Material UI
import { withStyles } from "@material-ui/core/styles";
import { Switch as ToggleSwitch } from "@material-ui/core";

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

  const DarkSwitch = withStyles({
    switchBase: {
      color: "#1c1300",
      "&$checked": {
        color: "#ded4b9",
      },
      "&$checked + $track": {
        backgroundColor: "#ded4b9",
      },
    },
    checked: {},
    track: {},
  })(ToggleSwitch);

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
                  <DarkSwitch
                    checked={theme === "light" ? false : true}
                    className="darkSwitch"
                    size="normal"
                    onChange={toggleTheme}
                  />
                </li>
              </ul>
            </nav>

            <div className="main">
              <Switch>
                <Route exact path="/chefs">
                  <Chefs theme={theme} />
                </Route>
                <Route exact path="/games">
                  <Games theme={theme} />
                </Route>
                <Route exact path="/eggstras">
                  <Eggstras theme={theme} />
                </Route>
                <Route exact path="/contact">
                  <Contact theme={theme} />
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
