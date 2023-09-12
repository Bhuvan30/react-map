import styles from "./OfficesList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import OfficeItem from "./OfficeItem";
import { useBins } from "../contexts/BinsContext";

function OfficesList() {
  const { bins, isLoading } = useBins();

  if (isLoading) return <Spinner />;

  if (!bins.length) return <Message message="hello" />;

  const offices = bins.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.officesList}>
      {offices.map((office) => (
        <OfficeItem office={office} key={office.id} />
      ))}
    </ul>
  );
}

export default OfficesList;
