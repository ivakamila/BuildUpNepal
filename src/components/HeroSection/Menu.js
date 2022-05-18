import { useEffect, useState } from "react";
import { MenuData } from "../../data/MenuData";
import * as Scroll from "react-scroll";
import { Link, Events, scrollSpy, animateScroll as scroll } from "react-scroll";
import { v4 as uuid } from "uuid";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const openMenu = () => {
    setActiveMenu(true);
  };

  const closeMenu = () => {
    setActiveMenu(false);
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      {activeMenu === false ? (
        <div className="menu-icon" onClick={openMenu}>
          <span className="icon-menu-icon"></span>
        </div>
      ) : (
        <div className="menu">
          <p>Navigation</p>
          <div className="menu__items">
            {MenuData.map((item, index) => (
              <Link
                activeClass="active"
                className="menu__link"
                to={`${item.toLocaleLowerCase().split(" ").join("-")}`}
                spy={true}
                smooth={true}
                duration={500}
                offset={0}
                key={uuid()}
              >
                {item}
              </Link>
            ))}
          </div>
          <span className="icon-close menu__close" onClick={closeMenu}></span>
        </div>
      )}
    </>
  );
};

export default Menu;
