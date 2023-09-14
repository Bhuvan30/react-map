import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import { useAuth } from "../../contexts/AuthContext";
import Login from "../../pages/Login";
import { useLocation } from "react-router-dom";

function PageNav() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.home}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {!isAuthenticated || currentPath === "/" ? (
            <NavLink to="/login">Map</NavLink>
          ) : (
            <div className={styles.NotLogin}>Map</div>
          )}
        </li>
        <li>
          {!isAuthenticated ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <div className={styles.NotLogin}>Login</div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
