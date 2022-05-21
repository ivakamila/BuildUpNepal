import { BenefitsData } from "../../data/BenefitsData";
import "./BenefitsModals.scss";

const BenefitsModals = ({ show, close, item }) => {
  return (
    <>
      <div className={show === "true" ? "modal-overlay" : ""}>
        {show === "true" && (
          <div className="modal__container benefits-modal__container">
            <h2>{BenefitsData[item].modalTitle}</h2>
            <span className="icon-close close-icon" onClick={close}></span>
            <div className="modal__info--column">
              {BenefitsData[item].modal}
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

export default BenefitsModals;
