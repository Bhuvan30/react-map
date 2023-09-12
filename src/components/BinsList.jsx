import Binitem from "./Binitem";
import styles from "./BinsList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useBins } from "../contexts/BinsContext";

function BinsList() {
  const { bins, isLoading } = useBins();

  if (isLoading) return <Spinner />;

  if (!bins.length) return <Message message="hello" />;

  return (
    <ul className={styles.binsList}>
      {bins.map((bin) => (
        <Binitem bin={bin} key={bin.id} />
      ))}
    </ul>
  );
}

export default BinsList;
