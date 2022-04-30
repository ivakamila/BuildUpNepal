import "./KeyPartners.css";
import { PartnersData } from "../../data/PartnersData";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const KeyPartners = () => {
  const [showMore, setShowMore] = useState(false);

  const showMorePartners = () => {
    if (!showMore) setShowMore(true);
    if (showMore) setShowMore(false);
  };

  return (
    <div className="partners">
      <h2>Key Partners</h2>
      <div className="partnerLogos">
        {PartnersData.slice(0, 7).map((item) => (
          <div className="partnerLogo" key={uuid()}>
            <img src={item.img} alt={item.name} />
          </div>
        ))}
        <div className="partnerLogo showMore" onClick={showMorePartners}>
          <span className="material-icons">add</span>
          {showMore ? <p>Show Less</p> : <p>Show More</p>}
        </div>
      </div>
    </div>
  );
};

export default KeyPartners;
