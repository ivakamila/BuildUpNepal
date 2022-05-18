import "./FiredBricksVideo.scss";
import FiredBrickImg from "../../assets/fired-brick-video.png";
import PlayButton from "../../assets/play-button.svg";
import { useState } from "react";

const FiredBricksVideo = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const handleClick = () => {
    setPlayVideo(true);
  };

  return (
    <div className="fired-bricks">
      <h2>Fired Bricks are a major climate issue</h2>
      <div className="fired-bricks__video">
        <img
          src={FiredBrickImg}
          alt="fired bricks"
          className="fired-bricks__video--img"
        />
        <span
          className="icon-play-button play-button"
          onClick={handleClick}
        ></span>

        {playVideo && (
          <iframe
            width="100%"
            height="100%"
            src={
              playVideo &&
              "https://www.youtube.com/embed/j04oORVdXTE?autoplay=1&mute=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="fired-bricks__video--player"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default FiredBricksVideo;
