import React, { useState } from "react";
import ReactHowler from "react-howler";

const Sound = (props) => {
  const { name, playCount, setPlayCount } = props;
  const [volume, setVolume] = useState(0.5);
  const [play, setPlay] = useState(false);
  const audio = require("../../assets/audio/" + name + ".wav");

  const handlePlay = () => {
    setPlay(!play);
    play ? addPlayCount() : subtractPlayCount();
  };

  const addPlayCount = () => {
    setPlayCount(playCount + 1);
  };
  const subtractPlayCount = () => {
    playCount > 0 && setPlayCount(playCount - 1);
  };

  return (
    <div className="audio__wrapper" onClick={handlePlay}>
      <ReactHowler src={audio} playing={play} volume={volume} loop={true} />

      <i className={"icon-" + name}></i>

      <div className="audio__volume">
        <input type="range" min="0" max="1" step=".05" value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))} />
      </div>
    </div>
  );
};

export default Sound;
