import "./Impact.scss";
import ImpactImg from "../../assets/impact/impact-img.png";
import { ImpactSectionData } from "../../data/ImpactSectionData";
import { v4 as uuid } from "uuid";
import CountUp from "react-countup";

const Impact = () => {
  return (
    <div className="impact">
      <h2>Multiplier effect &amp; SDG impact</h2>
      <p>288 enterprises build houses, crate jobs and saves CO2 long-term.</p>
      <img src={ImpactImg} alt="Female earth bricks entrepreneur" />
      <p className="large-text">
        <CountUp
          start={0}
          end={14803380}
          duration={4}
          separator=","
          className="impact__count"
        />{" "}
        Bricks
      </p>
      <p className="small-text">
        Earth Bricks (CSEB) produced to date{" "}
        <span className="material-icons-outlined">info</span>
      </p>
      <div className="impact__cards">
        {ImpactSectionData.map((item) => {
          return (
            <div className="impact__card" key={uuid()}>
              {item.img.length === 1 ? (
                <img
                  src={item.img[0]}
                  alt={item.title}
                  className="impact__card--image"
                />
              ) : (
                <div className="impact__card--images">
                  <img
                    src={item.img[0]}
                    alt={item.title}
                    className="impact__card--image-one"
                  />
                  <img
                    src={item.img[1]}
                    alt={item.title}
                    className="impact__card--image-two"
                  />
                </div>
              )}
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <span className="material-icons-outlined">info</span>
            </div>
          );
        })}
      </div>
      <div className="link-container">
        <a href="/" target="_blank" rel="noopener noreferrer">
          Data collected &amp; verifed by: Younus Social Business Center, CERAD
          Center for Research &amp; Development.
        </a>
      </div>
    </div>
  );
};

export default Impact;
