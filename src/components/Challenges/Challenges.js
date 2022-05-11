import { ChallengesData } from "../../data/ChallengesData";
import { v4 as uuid } from "uuid";
import "./Challenges.scss";

const Challenges = () => {
  return (
    <div className="challenges">
      <h2>The challenges we address</h2>
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
    </div>
  );
};

export default Challenges;
