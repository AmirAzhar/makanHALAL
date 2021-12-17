import sidebarStyles from "../styles/Sidebar.module.css";
import { useState } from "react";

function Sidebar() {
  const [visible, setVisible] = useState(true);

  function toggleVisible() {
    setVisible(!visible);
  }

  return (
    <div
      className={
        visible ? sidebarStyles.sidebarOpen : sidebarStyles.sidebarClose
      }
    >
      <button onClick={() => toggleVisible()}>Test</button>
    </div>
  );
}

export default Sidebar;
