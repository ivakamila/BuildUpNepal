import "./TechnologyModal.scss";
import "../../App.scss";
import TechnologyModalImg from "../../assets/technology-modal-img.jpg";

const TechnologyModal = ({ show, close }) => {
  return (
    <>
      <div className={show === "true" ? "technology-modal__overlay" : ""}>
        {show === "true" && (
          <div className="technology-modal">
            <h2>Low-cost, eco friendly brick technology</h2>
            <span className="icon-close close-icon" onClick={close}></span>
            <div className="technology-modal__info">
              <div>
                <img
                  src={TechnologyModalImg}
                  alt="A man working with earth bricks"
                  className="technology-modal__img"
                />
                <p>
                  CSEB Compressed Stablized Earth Bricks, is a recognized
                  climate friendly and disaster resilient technology. Nepal{" "}
                  <a
                    href="https://www.buildupnepal.com/wp-content/uploads/2020/04/design-catalogue-volume-2-1.pdf"
                    target="_blank"
                  >
                    approved the CSEB technology
                  </a>{" "}
                  in 2017. It is also approved and widely used in India,
                  Thailand, Malaysia, New Mexico, New Zealand among other
                  countries. CSEB bricks are produced locally by compressing a
                  mix of sand and soil (or stone-dust) with 10% cement in a
                  machine. After compression, the bricks are stacked and cured
                  (watered) for 21 days, the cement sets and bonds with the sand
                  stabilizing the brick. No fuel or burning is required and half
                  the cement-mortar in construction means 50% less CO2 emissions
                  than fired bricks.
                </p>
                <br />
                <p>
                  <strong>Disaster resilience:</strong> When building with CSEB
                  the bricks interlock just like LEGO. Vertical rebar is
                  anchored in the foundation and placed evenly throughout the
                  walls, connected with horizontal seismic bands interconnecting
                  the house, making it highly earthquake resistant. In flood
                  prone areas the foundation is also raised to avoid the effects
                  of monsoon flooding, intensified by climate change.
                </p>
                <h4>Benefits of CSEB interlocking bricks</h4>
                <ul>
                  <li>35-50% lower cost, driving adoption at scale</li>
                  <li>Disaster resistant, ensuring safe houses</li>
                  <li>
                    Creates local jobs, reducing poverty and forced migration
                  </li>
                  <li>
                    50% lower CO2 emissions, saving 9.5 tons CO2 per house
                  </li>
                </ul>
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

export default TechnologyModal;
