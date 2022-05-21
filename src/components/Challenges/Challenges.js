import { useState } from "react";
import { ChallengesData } from "../../data/ChallengesData";
import { v4 as uuid } from "uuid";
import LazyLoad from "react-lazyload";
import "./Challenges.scss";
import ChallengesModal from "../ChallengesModal/ChallengesModal";

const Challenges = () => {
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
    <div className="challenges">
      <h2>The challenges we address</h2>
      <LazyLoad height={200} offset={0}>
        <div className="challenges__container">
          {ChallengesData.map((item, index) => {
            return (
              <div
                className="circle__card"
                key={uuid()}
                id={index}
                onClick={openModal}
              >
                <img src={item.img} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <span className="material-icons-outlined" onClick={openModal}>
                  info
                </span>
              </div>
            );
          })}
        </div>
      </LazyLoad>
      <ChallengesModal
        show={showModal.toString()}
        item={itemIndex}
        close={closeModal}
      />
    </div>
  );
};

export default Challenges;
