import { ImpactData } from "../../data/ImpactData";

const ImpactModal = ({ show, close, item }) => {
  return (
    <>
      <div className={show === "true" ? "modal-overlay" : ""}>
        {show === "true" && (
          <div className="modal__container">
            <h2>How we measure our impact</h2>
            <span className="icon-close close-icon" onClick={close}></span>
            <div className="modal__info">
              <span className={ImpactData[item].icon}></span>
              <div>
                <h3>{ImpactData[item].text}</h3>
                <p>{ImpactData[item].desc}</p>
              </div>
            </div>
            <button onClick={close} className="modal__close">
              <span className="icon-close"></span>
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ImpactModal;
