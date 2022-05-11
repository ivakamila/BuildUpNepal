import "./Footer.scss";
import BunLogo from "../../assets/bun-logo-2.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={BunLogo} alt="Build Up Nepal Logo" className="logo" />
      <p>© Build Up Nepal 2022</p>
    </div>
  );
};

export default Footer;
