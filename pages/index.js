// Styles
import styles from "../styles/Home.module.css";

// React
import { useState } from "react";

// Components
import Sidebar from "../components/sidebar/Sidebar";
import Map from "../components/map/Map";

// Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowLeftShort } from "react-icons/bs";

export default function Home() {
  const [menuVisible, isMenuVisible] = useState(false);
  function toggleMenuVisibility() {
    isMenuVisible(!menuVisible);
  }
  return (
    <div className={styles.home}>
      <Map style={{ zIndex: "1" }} />
      <Sidebar menuVisible={menuVisible} />
      {menuVisible ? (
        <BsArrowLeftShort
          className={styles["menu-icon"]}
          onClick={toggleMenuVisibility}
        />
      ) : (
        <GiHamburgerMenu
          className={styles["menu-icon"]}
          onClick={toggleMenuVisibility}
          style={{ zIndex: "5" }}
        />
      )}
    </div>
  );
}
