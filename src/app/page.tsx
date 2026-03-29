import styles from "./page.module.css";

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Dashboard Overview</h2>
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total AUM</span>
          <span className={styles.statValue}>$12.4M</span>
          <span className={styles.statChange}>+2.3%</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Yield Earned</span>
          <span className={styles.statValue}>$142.3K</span>
          <span className={styles.statChange}>+8.1%</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Active Streams</span>
          <span className={styles.statValue}>23</span>
        </div>
      </div>
      <div className={styles.section}>
        <h3>Vault Balances</h3>
        <div className={styles.vaultGrid}>
          <div className={styles.vaultCard}>USDC Vault — $4.2M — 4.8% APY</div>
          <div className={styles.vaultCard}>EURC Vault — $3.1M — 3.2% APY</div>
          <div className={styles.vaultCard}>XAUT Vault — $5.1M — 1.5% APY</div>
        </div>
      </div>
    </div>
  );
}
