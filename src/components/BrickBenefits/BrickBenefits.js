import "./BrickBenefits.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { BenefitsData } from "../../data/BenefitsData";
import { v4 as uuid } from "uuid";
import LazyLoad from "react-lazyload";

ChartJS.register(ArcElement, Tooltip, Legend);

const BrickBenefits = () => {
  return (
    <div className="benefits">
      <h3>Benefits using Earth Brick (CSEB)</h3>
      <LazyLoad height={200} offset={0}>
        <div className="benefits__container">
          {BenefitsData.map((item, index) => {
            return (
              <div className="circle__card" key={uuid()}>
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
                <span className="icon-info-circled-alt"></span>
              </div>
            );
          })}
        </div>
      </LazyLoad>
      <div className="link-containers">
        <div className="link-container">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <span className="icon-link-icon"></span>Cost effectiveness of CSEB
            in Nepal by Resilient engineers
          </a>
        </div>
        <div className="link-container">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <span className="icon-link-icon"></span>Max Fordham study of CSEB
            C02 emissions
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrickBenefits;
