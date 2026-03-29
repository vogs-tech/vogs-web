"use client";
import styles from "./TreasurySummary.module.css";

export function TreasurySummary() {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <span className={styles.label}>Total AUM</span>
        <span className={styles.value}>$12.4M</span>
        <span className={styles.change}>+2.3%</span>
      </div>
      <div className={styles.card}>
        <span className={styles.label}>Yield Earned</span>
        <span className={styles.value}>$142.3K</span>
        <span className={styles.change}>+8.1%</span>
      </div>
      <div className={styles.card}>
        <span className={styles.label}>Active Streams</span>
        <span className={styles.value}>23</span>
      </div>
    </div>
  );
}
