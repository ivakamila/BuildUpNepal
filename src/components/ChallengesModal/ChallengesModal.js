import { ChallengesData } from "../../data/ChallengesData";
import "./ChallengesModal.scss";

const ChallengesModal = ({ show, close, item }) => {
  return (
    <>
      <div className={show === "true" ? "modal-overlay" : ""}>
        {show === "true" && (
          <div className="modal__container">
            <h2>{ChallengesData[item].title}</h2>
            <span className="icon-close close-icon" onClick={close}></span>
            <div className="modal__info">
              <img src={ChallengesData[item].img} alt="" />
              <div>
                <h3>{ChallengesData[item].desc}</h3>
                <p>{ChallengesData[item].text}</p>
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

export default ChallengesModal;
