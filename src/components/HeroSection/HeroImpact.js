import { useState } from "react";
import { ImpactData } from "../../data/ImpactData";
import CountUp from "react-countup";
import ImpactModal from "./ImpactModal";

const HeroImpact = () => {
  const [showModal, setShowModal] = useState(false);
  const [itemIndex, setItemIndex] = useState("");

  const openModal = (e) => {
    setShowModal(true);
    setItemIndex(e.currentTarget.id);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="impactContainer">
        <div className="impactItems">
          {ImpactData.map((item, index) => {
            return (
              <div
                className="impactItem"
                key={index}
                onClick={openModal}
                id={index}
              >
                <img src={item.icon} alt={item.text} className="impactIcon" />
                <CountUp
                  start={0}
                  end={item.count}
                  duration={2}
                  separator=","
                  className="impactCount"
                />
                <p>{item.text}</p>
                <span className="material-icons infoIcon">info</span>
              </div>
            );
          })}
        </div>
        <div className="dataLinkContainer">
          <p>
            Data collected &amp; verifed by Yunus Social Business Center, CERAD
            Center for Research &amp; Development.{" "}
            <a href="/">How we measure our impact?</a>
          </p>
        </div>
      </div>
      <ImpactModal
        show={showModal.toString()}
        item={itemIndex}
        close={closeModal}
      />
    </>
  );
};

export default HeroImpact;
