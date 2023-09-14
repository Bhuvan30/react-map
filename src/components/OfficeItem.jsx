import styles from "./OfficeItem.module.css";
import { Link } from "react-router-dom";

import { useIcons } from "../contexts/IconsContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function OfficeItem({ icon }) {
  const { currentIcon } = useIcons();
  const { iconName, emoji, area, id, position } = icon;

  return (
    <li>
      <Link
        className={`${styles.officeItem} ${
          id === currentIcon.id ? styles["officeItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.name}>{iconName}</span>
        <span className={styles.date}>{area}</span>
      </Link>
    </li>
  );
}

export default OfficeItem;
