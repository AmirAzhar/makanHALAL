// Styles
import sidebarStyles from "/styles/Sidebar.module.css";

// Components
import FilterOptions from "./helpers/FilterOptions";

function Sidebar({ menuVisible }) {
  return (
    <div
      className={
        menuVisible
          ? sidebarStyles["sidebar--open"]
          : sidebarStyles["sidebar--close"]
      }
    >
      <div className={sidebarStyles["sidebar__header"]}>
        makan<b>HALAL</b>
      </div>
      <FilterOptions />
      <div className={sidebarStyles["sidebar__list"]}></div>
    </div>
  );
}

export default Sidebar;

{
  /* <button onClick={() => toggleVisible()}>Test</button> */
}
