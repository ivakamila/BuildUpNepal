import "./ScalableEnterprises.scss";
import LazyLoad from "react-lazyload";
// import ProjectMap from "../../project-map/project-map";

const ScalableEnterprises = () => {
  return (
    <div className="enterprises" id="scalable-enterprises">
      <h2>Scalable Enterprises</h2>
      <p className="p-large">Meet the enterprises &amp; communities</p>
      {/* <ProjectMap /> */}
      <LazyLoad height={200} offset={0}>
        <div className="percentage-line">
          <h4>Enterprise sustainability</h4>
          <div className="percentage-line__container">
            <div className="percentage-line__part wrapper__blue">
              <div className="percentage percentage__blue"></div>
              <p className="percentage__text--blue">
                75% operating &amp; growing{" "}
                <span className="icon-info-circled-alt"></span>
              </p>
            </div>
            <div className="percentage-line__part wrapper__red">
              <div className="percentage percentage__red"></div>
              <p className="percentage__text--red">15% struggling</p>
            </div>
            <div className="percentage-line__part wrapper__grey">
              <div className="percentage percentage__grey"></div>
              <p className="percentage__text--grey">10% closed</p>
            </div>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default ScalableEnterprises;
