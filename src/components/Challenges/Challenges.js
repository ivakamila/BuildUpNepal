import { ChallengesData } from "../../data/ChallengesData";
import { v4 as uuid } from "uuid";
import LazyLoad from "react-lazyload";
import "./Challenges.scss";

const Challenges = () => {
  return (
    <div className="challenges">
      <h2>The challenges we address</h2>
      <LazyLoad height={200} offset={0}>
        <div className="challenges__container">
          {ChallengesData.map((item) => {
            return (
              <div className="circle__card" key={uuid()}>
                <img src={item.img} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <span className="material-icons-outlined">info</span>
              </div>
            );
          })}
        </div>
      </LazyLoad>
    </div>
  );
};

export default Challenges;
