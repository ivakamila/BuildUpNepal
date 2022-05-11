import "./ScalableEnterprises.scss";

const ScalableEnterprises = () => {
  return (
    <div className="enterprises">
      <h2>Scalable Enterprises</h2>
      <p>Meet the enterprises &amp; communities</p>
      <div className="percentage-line">
        <h4>Enterprise sustainability</h4>
        <div className="percentage-line__container">
          <div className="percentage-line__part wrapper__blue">
            <div className="percentage percentage__blue"></div>
            <p>
              75% operating &amp; growing{" "}
              <span className="material-icons-outlined">info</span>
            </p>
          </div>
          <div className="percentage-line__part wrapper__red">
            <div className="percentage percentage__red"></div>
            <p>15% struggling</p>
          </div>
          <div className="percentage-line__part wrapper__grey">
            <div className="percentage percentage__grey"></div>
            <p>10% closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScalableEnterprises;
