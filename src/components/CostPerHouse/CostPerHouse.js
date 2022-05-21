import "./CostPerHouse.scss";
import FiredBrick from "../../assets/fired-brick.png";
import EarthBrick from "../../assets/earth-brick.png";
import LazyLoad from "react-lazyload";

const CostPerHouse = () => {
  return (
    <div className="cost">
      <h3>Cost for 2 room house</h3>
      <LazyLoad height={200} offset={0}>
        <img src={FiredBrick} alt="fire brick" />
        <div className="animated-line__container">
          <div className="cost-line__one"></div>
          <p
            style={{ animationDelay: "2s" }}
            className="animated-line__number--one"
          >
            $4.000
          </p>
        </div>
        <p>Fired Bricks</p>
        <img src={EarthBrick} alt="CSEB brick" />
        <div className="animated-line__container">
          <div className="cost-line__two"></div>
          <p
            style={{ animationDelay: "2s" }}
            className="animated-line__number--two"
          >
            $3.000
          </p>
        </div>
        <p>Earth Brick (CSEB)</p>
      </LazyLoad>
    </div>
  );
};

export default CostPerHouse;
