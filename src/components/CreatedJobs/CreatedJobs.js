import "./CreatedJobs.scss";
import { useState } from "react";
import CreatedJobsImg from "../../assets/jobsImg.png";
import LazyLoad from "react-lazyload";
import JobsModal from "../JobsModal/JobsModal";

const CreatedJobs = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="created-jobs" id="we-create-jobs">
      <h2>We create jobs and economic growth</h2>
      <div className="created-jobs__img">
        <img src={CreatedJobsImg} alt="female entrepreneur" />
        <h2 className="large-text">2788 Jobs</h2>
        <p className="info">
          Created to date{" "}
          <span
            className="icon-info-circled-alt info-icon"
            onClick={openModal}
          ></span>
        </p>
      </div>
      <JobsModal show={showModal.toString()} close={closeModal} />
      <LazyLoad height={200} offset={0}>
        <div className="percentage-line">
          <h4 className="percentage-line__title">
            Demographics for jobs in production
          </h4>
          <div className="percentage-line__container">
            <div className="percentage-line__part percentage-line__one">
              <div className="percentage percentage__blue"></div>
              <p className="percentage__text--blue">26% women</p>
            </div>
            <div className="percentage-line__part percentage-line__two">
              <div className="percentage percentage__blue--med"></div>
              <p className="percentage__text--red">74% men</p>
            </div>
          </div>
        </div>
      </LazyLoad>
      <LazyLoad height={200} offset={0}>
        <div className="sectors">
          <h3>Sectors</h3>
          <div className="animated-line__container">
            <div className="animated-line__one orange-line"></div>
            <p
              style={{ animationDelay: "2s" }}
              className="animated-line__number--one orange-text"
            >
              1,011
            </p>
          </div>
          <p>Jobs in production</p>
          <div className="animated-line__container">
            <div className="animated-line__two yellow-line"></div>
            <p
              style={{ animationDelay: "2s" }}
              className="animated-line__number--two yellow-text"
            >
              1,885
            </p>
          </div>
          <p>Jobs in construction</p>
        </div>
      </LazyLoad>
    </div>
  );
};

export default CreatedJobs;
