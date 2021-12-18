// Styles
import styles from "../styles/Home.module.css";

// Components
import Map from "../components/map/Map";

export default function Home() {
  return (
    <div className={styles.home}>
      <Map style={{ zIndex: "1" }} />
    </div>
  );
}
