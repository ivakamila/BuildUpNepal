import { useState } from "react";
import { ImpactData } from "../../data/ImpactData";
import CountUp from "react-countup";
import ImpactModal from "./ImpactModal";
import MeasureImpact from "./MeasureImpact";

const HeroImpact = () => {
  const [showModal, setShowModal] = useState(false);
  const [itemIndex, setItemIndex] = useState("");
  const [measureImpact, setMeasureImpact] = useState(false);

  const openModal = (e) => {
    setShowModal(true);
    setItemIndex(e.currentTarget.id);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const showImpactMeasure = () => {
    setMeasureImpact(true);
  };

  const closeImpactMeasure = () => {
    setMeasureImpact(false);
  };

  return (
    <>
      <div className="impact-container">
        <div className="impact-items">
          {ImpactData.map((item, index) => {
            return (
              <div
                className="impact-item"
                key={index}
                onClick={openModal}
                id={index}
              >
                <span className={`${item.icon} impact-item__icon`}></span>
                <CountUp
                  start={0}
                  end={item.count}
                  duration={2}
                  separator=","
                  className="impact-item__count"
                />
                <p>{item.text}</p>
                <span className="icon-info-circled-alt"></span>
              </div>
            );
          })}
        </div>
        <div className="impact-data__link">
          <p>
            Data collected &amp; verifed by Yunus Social Business Center, CERAD
            Center for Research &amp; Development.{" "}
            <span onClick={showImpactMeasure}>How we measure our impact?</span>
          </p>
        </div>
      </div>
      <ImpactModal
        show={showModal.toString()}
        item={itemIndex}
        close={closeModal}
      />
      <MeasureImpact
        showImpactMeasure={measureImpact.toString()}
        closeImpactMeasure={closeImpactMeasure}
      />
    </>
  );
};

export default HeroImpact;
