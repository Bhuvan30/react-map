import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.home}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/mapLayout">Map</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
