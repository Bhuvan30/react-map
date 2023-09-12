import { Link } from "react-router-dom";
import styles from "./Binitem.module.css";
import { useBins } from "../contexts/BinsContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function Binitem({ bin }) {
  const { currentBin } = useBins();
  const { cityName, emoji, date, id, position } = bin;

  return (
    <li>
      <Link
        className={`${styles.binItem} ${
          id === currentBin.id ? styles["binItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.name}>{cityName}</span>
        <span className={styles.date}>({formatDate(date)})</span>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default Binitem;
