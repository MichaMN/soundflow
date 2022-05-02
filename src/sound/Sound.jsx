import React, { createRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Sound = (props) => {
  const { name, playCount, setPlayCount } = props;
  const audio = "/assets/audio/" + name + ".mp3";
  const icon = "assets/icon/" + name + ".svg";
  const iconNode = <img src={icon} alt="" />;
  const ref = createRef();

  const addPlayCount = () => {
    setPlayCount(playCount + 1);
  };
  const subtractPlayCount = () => {
    playCount > 0 && setPlayCount(playCount - 1);
  };

  return (
    <div className="audio__wrapper">
      <AudioPlayer
        src={audio}
        onPlay={addPlayCount}
        onPause={subtractPlayCount}
        loop
        customIcons={{ play: iconNode, pause: iconNode }}
        showJumpControls={false}
        showDownloadProgress={false}
        showFilledVolume={true}
        className="player"
        layout="horizontal-reverse"
        customProgressBarSection={[]}
        customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
        ref={ref}
      />
    </div>
  );
};

export default Sound;
