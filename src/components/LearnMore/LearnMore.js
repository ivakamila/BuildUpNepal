import { LearnMoreData } from "../../data/LearnMoreData";
import { v4 as uuid } from "uuid";
import "./LearnMore.scss";

const LearnMore = () => {
  return (
    <div className="learn-more">
      <h2>Learn More</h2>
      <p>Lorem ipsum dolor</p>
      <div className="learn-more__docs">
        {LearnMoreData.map((item) => {
          return (
            <div className="learn-more__doc" key={uuid()}>
              <img src="" alt="" />
              <p>{item.title}</p>
              <span className="material-icons-outlined">info</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearnMore;
