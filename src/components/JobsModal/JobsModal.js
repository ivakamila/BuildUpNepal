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
              <p>
                <strong>Demographics for jobs in production</strong> is based on{" "}
                <a
                  href="https://www.buildupnepal.com/wp-content/uploads/2021/07/nabin-endline-survey-report-full-final.pdf"
                  target="_blank"
                >
                  Endline Survey
                </a>{" "}
                or 22 enterprises for the NABIN project by DCA, Practical Action
                and Nordic Climate fund. We currently don’t have data for
                demographics of jobs in construction.
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
