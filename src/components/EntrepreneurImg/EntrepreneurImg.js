import PartnersImg from "../../assets/Key-partners-img.png";
import "./EntrepreneurImg.scss";

const EntrepreneurImg = () => {
  return (
    <div className="partners__img">
      <img src={PartnersImg} alt="Build Up Nepal Partners" />
      <div className="partners__img--text">
        <h2>
          “I earn 850 Nrs ($7) per day making eco-friendly bricks. It is hard
          work, but I can feed my two daughters, so it is worth it”
        </h2>
        <p>Maya Nepali - CSEB worker</p>
      </div>
    </div>
  );
};

export default EntrepreneurImg;
