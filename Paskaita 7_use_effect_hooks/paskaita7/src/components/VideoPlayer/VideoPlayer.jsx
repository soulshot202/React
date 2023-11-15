import React, { useRef, useState } from "react";

export default function VideoPlayer() {
  const [timeInput, setTimeInput] = useState(0);

  const videoRef = useRef();
  const rangeRef = useRef();

  function playButton() {
    videoRef.current.play();
  }

  function pauseButton() {
    videoRef.current.pause();
  }

  function handleRangeChange(e) {
    videoRef.current.currentTime = e.target.value;
  }

  return (
    <div>
      <video ref={videoRef} width={300} height={150}>
        <source
          src="https://srv5.kinas.live/filmai/LTpro.Speed.1994.BDrip.mp4?st=DBOWM-6qlWe82AoWOj-IrA&e=1695213396"
          type="video/mp4"
        />
      </video>
      <input
        min={0}
        // max={videoRef.current.duration}
        type="range"
        ref={rangeRef}
        onChange={handleRangeChange}
      />
      <button onClick={playButton}>Play</button>
      <button onClick={pauseButton}>Pause</button>
      <input
        type="number"
        onChange={(e) => {
          videoRef.current.currentTime = e.target.value;
        }}
      />
    </div>
  );
}
