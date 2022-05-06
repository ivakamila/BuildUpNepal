import "./ScalableEnterprises.scss";

const ScalableEnterprises = () => {
  return (
    <div className="enterprises">
      <h2>Scalable Enterprises</h2>
      <p>Meet the enterprises &amp; communities</p>
      <div className="sustainability">
        <h3>Enterprise sustainability</h3>
        <div className="sustainability__lines">
          <div className="sustainability__line--wrapper wrapper-blue">
            <div className="sustainability__line sustainability__line--blue"></div>
            <p>
              75% operating &amp; growing{" "}
              <span className="material-icons">info</span>
            </p>
          </div>
          <div className="sustainability__line--wrapper wrapper-red">
            <div className="sustainability__line sustainability__line--red"></div>
            <p>15% struggling</p>
          </div>
          <div className="sustainability__line--wrapper wrapper-grey">
            <div className="sustainability__line sustainability__line--grey"></div>
            <p>10% closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScalableEnterprises;
