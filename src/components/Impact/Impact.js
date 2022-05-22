import "./Impact.scss";
import ImpactImg from "../../assets/impact/impact-img.png";
import { ImpactSectionData } from "../../data/ImpactSectionData";
import { v4 as uuid } from "uuid";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

const Impact = () => {
  return (
    <div className="impact" id="impact-we-create">
      <h2>Multiplier effect &amp; SDG impact</h2>
      <p>
        Our 288 enterprises are building houses, creating jobs and saving CO2
        emissions year-after-year.
      </p>
      <div className="impact__img">
        <img src={ImpactImg} alt="Female earth bricks entrepreneur" />
        <LazyLoad height={200} offset={0}>
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
        </LazyLoad>
        <div className="impact__img--info">
          <p className="small-text">
            Produced to date <span className="icon-info-circled-alt"></span>
          </p>
        </div>
      </div>
      <LazyLoad height={200} offset={0}>
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
                <span className="icon-info-circled-alt"></span>
              </div>
            );
          })}
        </div>
      </LazyLoad>
      <div className="link-container">
        <a
          href="https://www.buildupnepal.com/wp-content/uploads/2022/05/impact-assessment-2021-cerad-yunus-social-business-center-final-report.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data collected &amp; verifed by: Younus Social Business Center, CERAD
          Center for Research &amp; Development.
        </a>
      </div>
    </div>
  );
};

export default Impact;
