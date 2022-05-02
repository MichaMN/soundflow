import React, { useState } from "react";
import Sound from "./components/sound/Sound";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState("light");
  const [playCount, setPlayCount] = useState(0);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="container">
        <div className="header">
          <div className="logo">
            <div
              className={"logo__circle " + (playCount > 0 ? "playing" : "")}
            ></div>
            <div className="logo__text">soundflow</div>
          </div>
          <div className="header__switch " onClick={toggleTheme}>
            <div className="header__mode-container">
              <div className="header__mode-text">light</div>
              <div className="header__mode-text header__mode-text--dark">
                dark
              </div>
            </div>
          </div>
        </div>

        <div className="audio">
          <div className="audio__title">scenes</div>
          <div className="audio__container">
            <Sound
              name="rain"
              setPlayCount={setPlayCount}
              playCount={playCount}
            />
          </div>
        </div>
      </div>

      <div className="background"></div>
    </div>
  );
}

export default App;
