import "./BrickBenefits.scss";
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { BenefitsData } from "../../data/BenefitsData";
import { v4 as uuid } from "uuid";
import LazyLoad from "react-lazyload";
import BenefitsModals from "../BenefitsModals/BenefitsModals";

ChartJS.register(ArcElement, Tooltip, Legend);

const BrickBenefits = () => {
  const [showModal, setShowModal] = useState(false);
  const [itemIndex, setItemIndex] = useState("");

  const openModal = (e) => {
    setShowModal(true);
    setItemIndex(e.currentTarget.id);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="benefits">
      <h3>Benefits using Earth Brick (CSEB)</h3>
      <LazyLoad height={200} offset={0}>
        <div className="benefits__container">
          {BenefitsData.map((item, index) => {
            return (
              <div
                className="circle__card"
                key={uuid()}
                id={index}
                onClick={openModal}
              >
                <div className="benefits__circle">
                  <img
                    srcSet={`${item.bgImage[1]} 1x,
                    ${item.bgImage[2]} 2x`}
                    src={item.bgImage[0]}
                    alt="earth brick benefits"
                    className="benefits__img"
                  />
                  <Pie
                    data={item.data}
                    options={item.options}
                    className="benefits__chart"
                  />
                </div>
                <h4>{item.percentage}</h4>
                <p>{item.smallText}</p>
                <span
                  className="icon-info-circled-alt"
                  onClick={openModal}
                ></span>
              </div>
            );
          })}
        </div>
      </LazyLoad>
      <BenefitsModals
        show={showModal.toString()}
        item={itemIndex}
        close={closeModal}
      />
      <div className="link-containers">
        <div className="link-container">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <span className="icon-link-icon"></span>Cost effectiveness of CSEB
            in Nepal by Resilient engineers
          </a>
        </div>
        <div className="link-container">
          <a
            href="https://www.buildupnepal.com/wp-content/uploads/2022/02/carbon-evaluation-of-compressed-stabilised-earth-blocks-cseb-in-nepal-summary.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-link-icon"></span>Max Fordham study of CSEB
            C02 emissions
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrickBenefits;
