import { Awardsdata } from "../../data/AwardsData";
import { v4 as uuid } from "uuid";
import LazyLoad from "react-lazyload";
import "./Awards.scss";

const Awards = () => {
  return (
    <div className="awards" id="awards-&amp;-recognitions">
      <h2>Awards &amp; Recognition</h2>
      <LazyLoad height={200} offset={0}>
        <div className="awards__cards">
          {Awardsdata.map((item) => {
            return (
              <div className="awards__card" key={uuid()}>
                <a href={item.link} target="_blank" rel="noreferrer noopener">
                  <img src={item.img} alt="award logo" />
                </a>
              </div>
            );
          })}
          <div className="awards__card">
            <a
              href="https://ashden.org/news/nepal-returning-migrants-lead-a-green-recovery-from-coronavirus/"
              target="_blank"
              className="awards__card--link"
            >
              Nepal returning migrants lead a green recovery from corona virus
            </a>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default Awards;
