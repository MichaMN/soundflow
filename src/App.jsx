import React, { useState } from "react";
import Sound from "./components/sound/Sound";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState("light");
  const [playCount, setPlayCount] = useState(0);

  const toggleTheme = () => {
    const wobble = document.querySelector(".bg__curve");
    setTheme(theme === "light" ? "dark" : "light");
    wobble.classList.toggle("jelly");
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="container">
        <div className="header">
          <div className="logo">
            <div className="logo__text">
              sound<span>fl</span>
            </div>
            <div className={"logo__circle " + (playCount > 0 ? "playing" : "")}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <span>w</span>
          </div>
          <div className="header__btns">
            <div className="header__switch" onClick={toggleTheme}>
              <div className="header__mode-container">
                <div className="header__mode-text">light</div>
                <div className="header__mode-text header__mode-text--dark">dark</div>
              </div>
            </div>

            <div className="header__divider"></div>
            <div className="header__theme-btn"></div>
          </div>
        </div>

        <div className="audio__title">scenes</div>
        <div className="audio">
          <div className="bg">
            <div className="bg__block "></div>
            <div className="bg__curve"></div>
          </div>

          <div className="audio__container">
            <Sound name="rain" setPlayCount={setPlayCount} playCount={playCount} />
            <Sound name="rain" setPlayCount={setPlayCount} playCount={playCount} />
          </div>

          <div className="bg-accent"></div>

          <div className="bg-accent bg-accent--bottom"></div>
        </div>
      </div>

      <div className="background"></div>
    </div>
  );
}

export default App;
