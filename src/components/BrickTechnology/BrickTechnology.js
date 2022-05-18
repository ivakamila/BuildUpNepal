import React from "react";
import SandImg from "../../assets/technology/sand.svg";
import SoilImg from "../../assets/technology/soil.svg";
import CementImg from "../../assets/technology/cement.svg";
import BrickImg from "../../assets/technology/brick.svg";
import LazyLoad from "react-lazyload";
import "./BrickTechnology.scss";

const BrickTechnology = () => {
  return (
    <div className="technology" id="brick-technology">
      <h2>Low-cost, eco friendly brick technology</h2>
      <p className="brick-technology__text">
        Build up Nepal builds low-cost houses using CSEB Compressed Stabilized
        Earth Bricks, a recognized disaster resilient technology.{" "}
        <span className="icon-info-circled-alt technology__info"></span>
      </p>
      <LazyLoad height={200} offset={0}>
        <div className="technology__formula">
          <div className="technology__formula--item">
            <img src={SoilImg} alt="Soil" />
            <p>Local soil</p>
          </div>
          <span className="icon-plus-icon"></span>
          <div className="technology__formula--item">
            <img src={SandImg} alt="Sand" />
            <p>Sand</p>
          </div>
          <span className="icon-plus-icon"></span>
          <div className="technology__formula--item">
            <img src={CementImg} alt="Cement" />
            <p>Only 10% cement</p>
          </div>
          <span className="icon-equal-icon"></span>
          <div className="technology__formula--item">
            <img src={BrickImg} alt="Brick" />
            <p>Earth Brick (CSEB)</p>
            <span className="icon-info-circled-alt"></span>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default BrickTechnology;
