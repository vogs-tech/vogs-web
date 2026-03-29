import styles from "./page.module.css";

export default function StreamsPage() {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Payment Streams</h2>
      <div className={styles.content}>
        <p>Manage per-second payment streams and milestone-based escrow payments.</p>
      </div>
    </div>
  );
}
