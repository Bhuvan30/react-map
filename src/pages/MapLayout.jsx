import PageNav from "../components/PageNav";
import Sidebar from "../components/Sidebar";
import styles from "./MapLayout.module.css";
import Map from "../components/Map";

function MapLayout() {
  return (
    <div>
      <PageNav />
      <div className={styles.app}>
        <Sidebar />
        <Map />
      </div>
    </div>
  );
}

export default MapLayout;
