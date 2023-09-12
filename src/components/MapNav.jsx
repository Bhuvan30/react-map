import { NavLink } from "react-router-dom";
import styles from "./MapNav.module.css";

function MapNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="bins">Bins</NavLink>
        </li>
        <li>
          <NavLink to="offices">Offices</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MapNav;
