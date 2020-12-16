import React, { useState, useEffect } from "react";
import "./Timer.css";

export default function Timer() {
  //egg methods
  const methods = {
    onsen: `Boil 1L of water. Once boiling, remove from heat. Add 200ml cold water and submerge refrigerated eggs in the water. Set the timer for <strong>17 minutes</strong>.`,
    poached: `Crack egg into bowl. Bring a pan of water to a simmer. Tip egg into pan. Cook for <strong>2 minutes</strong> then turn off heat and leave pan for <strong>8-10 minutes</strong>.`,
  };

  //states
  const [timeLeft, setTimeLeft] = useState("00:00");

  //event handlers
  const handleSet = e => {
    let seconds = e.target.value;
    let hrs = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    const mins = Math.floor(seconds / 60);
    seconds = seconds % 60;
    setTimeLeft(
      `${hrs < 10 ? (hrs === 0 ? "" : "0") : ""}${hrs === 0 ? "" : hrs + ":"}${
        mins < 10 ? "0" : ""
      }${mins}:${seconds < 10 ? "0" : ""}${seconds}`
    );
  };
  const handleClear = () => {
    setTimeLeft("00:00");
  };

  return (
    <div className="timer">
      <h1>Egg Timer</h1>
      <h2>For all your perfectly cooked egg needs.</h2>
      <p>
        This egg timer is designed mainly for boiled eggs, in which the eggs are
        in your pot, the water has boiled, and you've just turned the heat off.
      </p>

      <div className="display">
        <div className="timer">
          <div className="timer-controls">
            <button value="120" onClick={handleSet}>
              2 minutes: White not set, raw yolk.
            </button>
            <button value="240" onClick={handleSet}>
              4 minutes: White fully set, yolk runny.
            </button>
            <button value="360" onClick={handleSet}>
              6 minutes: White fully set, yolk mostly set.
            </button>
            <button value="480" onClick={handleSet}>
              8 minutes: White fully set, yolk set but tender.
            </button>
            <button value="600" onClick={handleSet}>
              10 minutes: All set.
            </button>
            <form name="customTime" id="custom">
              <input
                type="text"
                name="minutes"
                placeholder="Enter in minutes"
              />
            </form>
          </div>
        </div>
        <div className="timeleft">
          <h1>{timeLeft}</h1>
          <button className="clear" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
