import React, { useState, useEffect } from "react";
import ReactHowler from "react-howler";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Sound = (props) => {
  const { name, playCount, setPlayCount } = props;
  const [volume, setVolume] = useState(0.5);
  const [play, setPlay] = useState(false);
  const audio = require("../../assets/audio/" + name + ".wav");

  useEffect(() => {
    updatePlayCount();
  }, [play]);

  const handlePlay = (e) => {
    if (e.target === e.currentTarget) {
      setPlay(!play);
    }
  };

  const updatePlayCount = () => {
    play ? addPlayCount() : subtractPlayCount();
  };

  const addPlayCount = () => {
    setPlayCount(playCount + 1);
  };
  const subtractPlayCount = () => {
    playCount > 0 && setPlayCount(playCount - 1);
  };

  return (
    <div className={play ? "audio__wrapper playing" : "audio__wrapper"} onClick={handlePlay}>
      <ReactHowler src={audio} playing={play} volume={volume} loop={true} />

      <i className={"icon-" + name} onClick={handlePlay}></i>

      <div className="audio__volume">
        {/* <input type="range" min="0" max="1" step=".05" value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))} /> */}
        <Slider min={0} max={1} step=".05" value={volume} onChange={(value) => setVolume(parseFloat(value))} />
      </div>
    </div>
  );
};

export default Sound;
