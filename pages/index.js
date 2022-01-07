// Styles
import styles from "../styles/Home.module.css";

// Components
import Map from "../components/map";

export default function Home() {
  return (
    <div className={styles.home}>
      <Map />
    </div>
  );
}
