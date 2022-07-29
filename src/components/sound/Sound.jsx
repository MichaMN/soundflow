import React, { useState, useEffect } from "react";
import ReactHowler from "react-howler";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Sound = (props) => {
  const { name, playCount, setPlayCount } = props;
  const [volume, setVolume] = useState(0.5);
  const [play, setPlay] = useState(false);
  const audio = require("../../assets/audio/" + name + ".wav");

  const handlePlay = (e) => {
    if (e.target === e.currentTarget) {
      setPlay(!play);
    }
  };

  useEffect(() => {
    play ? setPlayCount(playCount + 1) : setPlayCount(Math.max(0, playCount - 1));
    // eslint-disable-next-line
  }, [play]);

  return (
    <div className={play ? "audio__wrapper playing" : "audio__wrapper"} onClick={handlePlay}>
      <ReactHowler src={audio} playing={play} volume={volume} loop={true} />

      <i className={"icon-" + name} onClick={handlePlay}></i>

      <div className="audio__volume">
        <Slider min={0} max={1} step=".05" value={volume} onChange={(value) => setVolume(parseFloat(value))} />
      </div>
    </div>
  );
};

export default Sound;
