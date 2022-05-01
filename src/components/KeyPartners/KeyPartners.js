import "./KeyPartners.scss";
import { PartnersData } from "../../data/PartnersData";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const KeyPartners = () => {
  const [visiblePartners, setVisiblePartners] = useState(7);

  const showMorePartners = () => {
    setVisiblePartners(visiblePartners + visiblePartners + 1);
  };

  return (
    <div className="partners">
      <h2>Key Partners</h2>
      <div className="partner__logos">
        {PartnersData.slice(0, visiblePartners).map((item) => (
          <div className="partner__logo" key={uuid()}>
            <img src={item.img} alt={item.name} />
          </div>
        ))}
        <div
          className="partner__logo partner__show-more"
          onClick={showMorePartners}
        >
          <span className="material-icons">add</span>
          <p>Show More</p>
        </div>
      </div>
    </div>
  );
};

export default KeyPartners;
