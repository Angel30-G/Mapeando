import styles from "./page.module.css";
import MainPage from "./Pages/MainPage";
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <MainPage />
      </main>
    </>
  );
}
