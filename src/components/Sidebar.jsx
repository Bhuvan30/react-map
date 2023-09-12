import { Outlet } from "react-router-dom";
import styles from "./Sidebar.module.css";
import MapNav from "./MapNav";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <MapNav />
      <Outlet />
    </div>
  );
}

export default Sidebar;
