import "./KeyPartners.scss";
import { PartnersData } from "../../data/PartnersData";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import LazyLoad from "react-lazyload";

const KeyPartners = () => {
  const [visiblePartners, setVisiblePartners] = useState(8);

  // const showMorePartners = () => {
  //   setVisiblePartners(visiblePartners + visiblePartners + 1);
  // };

  return (
    <div className="partners" id="key-partners">
      <h3>Key Partners</h3>
      <LazyLoad height={200} offset={0}>
        <div className="partner__logos">
          {PartnersData.slice(0, visiblePartners).map((item) => (
            <div
              className={
                item.name === "DFAT" ? "partner__logo--dfat" : "partner__logo"
              }
              key={uuid()}
            >
              <img
                src={item.img}
                alt={item.name}
                className="partners__logo--img"
              />
            </div>
          ))}
          {/* <div
            className="partner__logo partner__show-more"
            onClick={showMorePartners}
          >
            <span className="icon-plus-icon"></span>
            <p>Show More</p>
          </div> */}
        </div>
      </LazyLoad>
    </div>
  );
};

export default KeyPartners;
