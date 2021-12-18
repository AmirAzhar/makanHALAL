// Styles
import fullMenuStyles from "/styles/FullMenu.module.css";

// React
import { useState } from "react";

// Components
import Sidebar from "./Sidebar";

// Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowLeftShort } from "react-icons/bs";

function FullMenu() {
  const [menuVisible, setMenuVisible] = useState(false);
  function toggleMenuVisibility() {
    setMenuVisible(!menuVisible);
  }
  return (
    <div>
      <Sidebar menuVisible={menuVisible} style={{ zIndex: "10" }} />
      {menuVisible ? (
        <BsArrowLeftShort
          className={fullMenuStyles["menu-icon"]}
          onClick={toggleMenuVisibility}
          style={{ zIndex: "5" }}
        />
      ) : (
        <GiHamburgerMenu
          className={fullMenuStyles["menu-icon"]}
          onClick={toggleMenuVisibility}
          style={{ zIndex: "5" }}
        />
      )}
    </div>
  );
}

export default FullMenu;
