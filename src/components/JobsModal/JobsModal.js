import "./JobsModal.scss";
import BenefitsModalOne from "../../assets/benefits/benefits-modal-1.png";
import BenefitsModalTwo from "../../assets/benefits/benefits-modal-2.jpg";

const JobsModal = ({ show, close, item }) => {
  return (
    <>
      <div className={show === "true" ? "modal-overlay" : ""}>
        {show === "true" && (
          <div className="modal__container benefits-modal__container">
            <h2>2788 jobs created</h2>
            <span className="icon-close close-icon" onClick={close}></span>
            <div className="modal__info--column">
              <p>
                When building a small 2-room house the overall cost is reduced
                by 25%.
              </p>
              <img
                src={BenefitsModalOne}
                alt="cost breakdown for house"
                className="modal__img"
              />
              <img
                src={BenefitsModalTwo}
                alt="earth brick house"
                className="modal__img"
              />
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

export default JobsModal;
