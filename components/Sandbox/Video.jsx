import React, { useRef, useState } from "react";

import videoFile from "./Video.mov";

const Video = () => {
  const videoRef = useRef();
  const [progress, setProgress] = useState(0);
  const handlePlayVideo = () => videoRef.current.play();

  const handleProgress = (e) => {
    if (isNaN(e.target.duration))   // duration is NotaNumber at Beginning.
      return;
    setProgress((e.target.currentTime / e.target.duration) * 100);
  };
  return (
    <div>
      <button onClick={handlePlayVideo}>Play video</button>
      
      {/*HTML video tag*/}
      <video
        controls
        onProgress={handleProgress}
        src={videoFile}
        width="400"
        height="500"
        ref={videoRef}
      />

      <progress id="progress" max="100" value={progress}>
        Progress
      </progress>
    </div>
  );
};

export default Video