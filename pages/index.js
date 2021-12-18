// Styles
import styles from "../styles/Home.module.css";

// React
import { useState } from "react";

// Components
import Sidebar from "../components/sidebar/Sidebar";

// Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowLeftShort } from "react-icons/bs";

export default function Home() {
  const [menuVisible, isMenuVisible] = useState(true);
  function toggleMenuVisibility() {
    isMenuVisible(!menuVisible);
  }
  return (
    <div className={styles.home}>
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
        />
      )}

      <h1 className={styles.title}>Welcome to makanHALAL</h1>
    </div>
  );
}
