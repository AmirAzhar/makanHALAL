import sidebarStyles from "/styles/Sidebar.module.css";
import SearchBar from "./Searchbar";
import { useState } from "react";

function Sidebar() {
  const [visible, setVisible] = useState(true);

  function toggleVisible() {
    setVisible(!visible);
  }

  return (
    <div
      className={
        visible
          ? sidebarStyles["sidebar--open"]
          : sidebarStyles["sidebar--close"]
      }
    >
      <div className={sidebarStyles["sidebar__header"]}>
        makan<b>HALAL</b>
      </div>
      <SearchBar />
      <div className={sidebarStyles["sidebar__filters"]}>Filters</div>
      <div className={sidebarStyles["sidebar__list"]}>List</div>
    </div>
  );
}

export default Sidebar;

{
  /* <button onClick={() => toggleVisible()}>Test</button> */
}
