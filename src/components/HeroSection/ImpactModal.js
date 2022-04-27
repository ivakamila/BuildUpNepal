import { ImpactData } from "../../data/ImpactData";
import "./HeroSection.css";

const ImpactModal = ({ show, close, item }) => {
  return (
    <>
      <div className={show === "true" ? "impactOverlay" : ""}>
        {show === "true" && (
          <div className="impactModal">
            <h2>How we measure our impact</h2>
            <span className="material-icons closeIcon" onClick={close}>
              close
            </span>
            <div className="modalInfo">
              <img src={ImpactData[item].icon} alt={ImpactData[item].text} />
              <div>
                <h3>{ImpactData[item].text}</h3>
                <p>{ImpactData[item].desc}</p>
              </div>
            </div>
            <button onClick={close} className="closeBtn">
              <span className="material-icons close">close</span>
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ImpactModal;
