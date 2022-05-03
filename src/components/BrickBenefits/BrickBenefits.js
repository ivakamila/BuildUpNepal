import "./BrickBenefits.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { BenefitsData } from "../../data/BenefitsData";
import { v4 as uuid } from "uuid";

ChartJS.register(ArcElement, Tooltip, Legend);

const BrickBenefits = () => {
  return (
    <div className="benefits">
      <h2>Benefits using Earth Brick (CSEB)</h2>
      <div className="benefits__container">
        {BenefitsData.map((item, index) => {
          return (
            <div className="benefits__info" key={uuid()}>
              <div
                className="benefits__img"
                style={{ backgroundImage: `url(${item.bgImage})` }}
              >
                <Pie
                  data={item.data}
                  options={item.options}
                  className="benefits__chart"
                />
              </div>
              <h3>{item.percentage}</h3>
              <p>{item.smallText}</p>
              <span className="material-icons">info</span>
            </div>
          );
        })}
      </div>
      <div className="benefits__links">
        <div className="benefits__link--container">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <span className="material-icons">link</span>Cost effectiveness of
            CSEB in Nepal by Resilient engineers
          </a>
        </div>
        <div className="benefits__link--container">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <span className="material-icons">link</span>Max Fordham study of
            CSEB C02 emissions
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrickBenefits;
