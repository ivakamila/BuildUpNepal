import { ImpactData } from "../../data/ImpactData";

const ImpactModal = ({ show, close, item }) => {
  return (
    <>
      <div className={show === "true" ? "impact-overlay" : ""}>
        {show === "true" && (
          <div className="impact-modal">
            <h2>How we measure our impact</h2>
            <span
              className="material-icons-outlined close-icon"
              onClick={close}
            >
              close
            </span>
            <div className="impact-modal__info">
              <img src={ImpactData[item].icon} alt={ImpactData[item].text} />
              <div>
                <h3>{ImpactData[item].text}</h3>
                <p>{ImpactData[item].desc}</p>
              </div>
            </div>
            <button onClick={close} className="impact-modal__close">
              <span className="material-icons-outlined">close</span>
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ImpactModal;
