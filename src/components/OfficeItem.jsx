import styles from "./OfficeItem.module.css";

function OfficeItem({ office }) {
  return (
    <li className={styles.officeItem}>
      <span>{office.emoji}</span>
      <span>{office.country}</span>
    </li>
  );
}

export default OfficeItem;
