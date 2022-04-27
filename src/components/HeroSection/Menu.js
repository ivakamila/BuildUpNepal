import { useState } from "react";
import { MenuData } from "../../data/MenuData";
import "./HeroSection.css";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const openMenu = () => {
    setActiveMenu(true);
  };

  const closeMenu = () => {
    setActiveMenu(false);
  };

  return (
    <>
      {activeMenu === false && (
        <div className="menuIcon" onClick={openMenu}>
          <span className="material-icons">menu</span>
        </div>
      )}
      {activeMenu && (
        <div className="menu">
          <p>Navigation</p>
          <div className="menuItems">
            {MenuData.map((item, index) => (
              <a href="/#" key={index}>
                {item}
              </a>
            ))}
          </div>
          <span className="material-icons closeIcon" onClick={closeMenu}>
            close
          </span>
        </div>
      )}
    </>
  );
};

export default Menu;
