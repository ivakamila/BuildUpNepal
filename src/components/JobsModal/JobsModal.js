import "./JobsModal.scss";

const JobsModal = ({ show, close, item }) => {
  return (
    <>
      <div className={show === "true" ? "modal-overlay" : ""}>
        {show === "true" && (
          <div className="modal__container benefits-modal__container">
            <h2>2788 jobs created</h2>
            <span className="icon-close close-icon" onClick={close}></span>
            <div className="modal__info--column">
              <p>1011 jobs in production of CSEB</p>
              <p>1885 jobs in construction of houses</p>
              <p>
                Each enterprise reports how many staff they employ in the
                production. We measure construction work by the days required to
                build a house. A 4-room house: 235 man-days. 300 man-days = one
                job for a year.
              </p>
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
