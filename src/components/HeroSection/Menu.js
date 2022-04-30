import { useState } from "react";
import { MenuData } from "../../data/MenuData";

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
      {activeMenu === false ? (
        <div className="menu-icon" onClick={openMenu}>
          <span className="material-icons">menu</span>
        </div>
      ) : (
        <div className="menu">
          <p>Navigation</p>
          <div className="menu__items">
            {MenuData.map((item, index) => (
              <a href="/#" key={index}>
                {item}
              </a>
            ))}
          </div>
          <span className="material-icons menu__close" onClick={closeMenu}>
            close
          </span>
        </div>
      )}
    </>
  );
};

export default Menu;
