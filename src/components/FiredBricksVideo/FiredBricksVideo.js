import "./FiredBricksVideo.scss";
import FiredBrickImg from "../../assets/fired-brick-video.png";
import { useState } from "react";
import ReactPlayer from "react-player";

const FiredBricksVideo = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const handleClick = () => {
    setPlayVideo(true);
  };

  return (
    <div className="fired-bricks">
      <h2>Fired Bricks are a major climate issue</h2>
      <div className="fired-bricks__video" onClick={handleClick}>
        <img
          src={FiredBrickImg}
          alt="fired bricks"
          className="fired-bricks__video--img"
        />
        <span className="icon-play-button" onClick={handleClick}></span>
        {playVideo && (
          <ReactPlayer
            width="100%"
            height="100%"
            playing={playVideo && true}
            controls={true}
            url="https://youtube.com/embed/Gp3dHKLXaJM?autoplay=1&mute=1"
            className="fired-bricks__video--player"
          />
        )}
      </div>
    </div>
  );
};

export default FiredBricksVideo;
