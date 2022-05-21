import { ImpactData } from "../../data/ImpactData";
import { v4 as uuid } from "uuid";

const MeasureImpact = ({ showImpactMeasure, closeImpactMeasure }) => {
  return (
    <>
      <div className={showImpactMeasure === "true" ? "modal-overlay" : ""}>
        {showImpactMeasure === "true" && (
          <div className="impact-measure">
            <h2>How we measure our impact</h2>
            <span
              className="icon-close close-icon"
              onClick={closeImpactMeasure}
            ></span>
            {ImpactData.map((item) => (
              <div className="modal__info" key={uuid()}>
                <span className={item.icon}></span>
                <div>
                  <h3>{item.text}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
            <button onClick={closeImpactMeasure} className="modal__close">
              <span className="icon-close"></span>
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MeasureImpact;
