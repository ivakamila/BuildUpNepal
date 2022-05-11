import "./CreatedJobs.scss";
import CreatedJobsImg from "../../assets/entrepreneur.png";

const CreatedJobs = () => {
  return (
    <div className="created-jobs">
      <h2>We create jobs and economic growth</h2>
      <img src={CreatedJobsImg} alt="female entrepreneur" />
      <h2 className="created-jobs__number">3034 Jobs</h2>
      <p className="info">
        Created to date <span className="material-icons-outlined">info</span>
      </p>
      <div className="percentage-line">
        <h4>Demographics for jobs in production</h4>
        <div className="percentage-line__container">
          <div className="percentage-line__part wrapper__blue">
            <div className="percentage percentage__blue"></div>
            <p>75% disadvantaged groups</p>
          </div>
          <div className="percentage-line__part wrapper__red">
            <div className="percentage percentage__blue--med"></div>
            <p>15% women</p>
          </div>
          <div className="percentage-line__part wrapper__grey">
            <div className="percentage percentage__blue--light"></div>
            <p>10% youth</p>
          </div>
        </div>
      </div>
      <div className="sectors">
        <h3>Sectors</h3>
        <div className="animated-line__container">
          <div className="animated-line__one orange-line"></div>
          <p
            style={{ animationDelay: "2s" }}
            className="animated-line__number--one orange-text"
          >
            1,012
          </p>
        </div>
        <p>Jobs in production</p>
        <div className="animated-line__container">
          <div className="animated-line__two yellow-line"></div>
          <p
            style={{ animationDelay: "2s" }}
            className="animated-line__number--two yellow-text"
          >
            2,022
          </p>
        </div>
        <p>Jobs in construction</p>
      </div>
    </div>
  );
};

export default CreatedJobs;
