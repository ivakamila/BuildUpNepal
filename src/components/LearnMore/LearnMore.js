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
                <a href={item.link} target="_blank">
                  <img src={item.img} alt="report screenshot" />
                  <p>{item.title}</p>
                </a>
              </div>
            );
          })}
        </div>
      </LazyLoad>
    </div>
  );
};

export default LearnMore;
