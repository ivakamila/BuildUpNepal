import "./Footer.scss";
import BunLogo from "../../assets/bun-logo-2.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <p>
          Contact us:{" "}
          <a href="mailto: info@buildupnepal.com">info@buildupnepal.com</a>
        </p>
        <a href="https://www.buildupnepal.com">www.buildupnepal.com</a>
      </div>
      <img src={BunLogo} alt="Build Up Nepal Logo" className="logo" />
      <p className="footer__copyright">© Build Up Nepal 2022</p>
    </div>
  );
};

export default Footer;
