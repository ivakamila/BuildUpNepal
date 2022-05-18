import { LearnMoreData } from "../../data/LearnMoreData";
import { v4 as uuid } from "uuid";
import LazyLoad from "react-lazyload";
import "./LearnMore.scss";

const LearnMore = () => {
  return (
    <div className="learn-more" id="learn-more">
      <h2>Learn More</h2>
      <p>Lorem ipsum dolor</p>
      <LazyLoad height={200} offset={0}>
        <div className="learn-more__docs">
          {LearnMoreData.map((item) => {
            return (
              <div className="learn-more__doc" key={uuid()}>
                <img src="" alt="" />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </LazyLoad>
    </div>
  );
};

export default LearnMore;
