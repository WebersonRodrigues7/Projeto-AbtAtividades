import styles from "./loading.module.css";

export default function Loading() {
  return (
    <section className={styles.loading}>
      <div className={styles.content}>
        <h1>GRAND LAUNCHER</h1>
        <p>Preparing your library...</p>

        <div className={styles.progress}>
          <div></div>
        </div>
      </div>
    </section>
  );
}