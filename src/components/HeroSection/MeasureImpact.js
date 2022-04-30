import { ImpactData } from "../../data/ImpactData";
import { v4 as uuid } from "uuid";

const MeasureImpact = ({ showImpactMeasure, closeImpactMeasure }) => {
  return (
    <>
      <div className={showImpactMeasure === "true" ? "impact-overlay" : ""}>
        {showImpactMeasure === "true" && (
          <div className="impact-measure">
            <h2>How we measure our impact</h2>
            <span
              className="material-icons close-icon"
              onClick={closeImpactMeasure}
            >
              close
            </span>
            {ImpactData.map((item) => (
              <div className="impact-modal__info" key={uuid()}>
                <img src={item.icon} alt={item.text} />
                <div>
                  <h3>{item.text}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
            <button
              onClick={closeImpactMeasure}
              className="impact-modal__close"
            >
              <span className="material-icons">close</span>
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MeasureImpact;
