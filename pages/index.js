import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className={styles.home}>
      <Sidebar />
      <h1 className={styles.title}>Welcome to makanHALAL</h1>
    </div>
  );
}
