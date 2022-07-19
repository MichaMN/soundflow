import React, { useState } from "react";
import Sound from "./components/sound/Sound";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState("light");
  const [themeColor, setThemeColor] = useState("blueberry");
  const [playCount, setPlayCount] = useState(0);

  const version = require("../package.json").version;

  const toggleTheme = () => {
    const wobble = document.querySelector(".bg__curve");
    setTheme(theme === "light" ? "dark" : "light");
    wobble.classList.toggle("jelly");
  };

  const toggleThemeMenu = (e) => {
    e.target.classList.toggle("open");
  };

  const handleThemeColor = (e) => {
    setThemeColor(e.target.getAttribute("theme"));
    document.querySelectorAll(".header__theme-btn").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <div className="App" data-theme={theme} data-theme-color={themeColor}>
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
            <div className="header__theme-menu-btn" onClick={toggleThemeMenu}></div>
            <div className="header__theme-menu">
              <div className="header__theme-btn blueberry" theme="blueberry" onClick={handleThemeColor}></div>
              <div className="header__theme-btn avocado" theme="avocado" onClick={handleThemeColor}></div>
              <div className="header__theme-btn cherry" theme="cherry" onClick={handleThemeColor}></div>
              <div className="header__theme-btn peach" theme="peach" onClick={handleThemeColor}></div>
              <div className="header__theme-btn eggplant" theme="eggplant" onClick={handleThemeColor}></div>
            </div>
          </div>

          <div className="bg">
            <div className="bg__block "></div>
            <div className="bg__curve"></div>
          </div>
        </div>

        <div className="audio">
          <div className="audio__title">scenes</div>
          <div className="audio__container">
            <Sound name="night" setPlayCount={setPlayCount} playCount={playCount} />
            <Sound name="rain" setPlayCount={setPlayCount} playCount={playCount} />
            <Sound name="fire" setPlayCount={setPlayCount} playCount={playCount} />
            <Sound name="ocean" setPlayCount={setPlayCount} playCount={playCount} />
            <Sound name="pool" setPlayCount={setPlayCount} playCount={playCount} />
            <Sound name="coffee" setPlayCount={setPlayCount} playCount={playCount} />
            <Sound name="river" setPlayCount={setPlayCount} playCount={playCount} />
            <Sound name="wind" setPlayCount={setPlayCount} playCount={playCount} />
            <Sound name="mountain" setPlayCount={setPlayCount} playCount={playCount} />
            <Sound name="sunrise" setPlayCount={setPlayCount} playCount={playCount} />
          </div>
        </div>
      </div>

      <div className="background"></div>

      <div className="version">{version}</div>
    </div>
  );
}

export default App;
