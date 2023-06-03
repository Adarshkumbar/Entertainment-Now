import React from "react";
import ReactPlayer from "react-player/youtube"; // library of react

import "./style.scss";

//got these props from Detailsbanner.jsx
const VideoPopup = (props) => {
    const { show, setShow, videoId, setVideoId } = props;
    const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
      <div className="opacityLayer" onClick={hidePopup}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          ❌ 
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPopup;
