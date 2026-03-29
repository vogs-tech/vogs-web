"use client";
import styles from "./ComplianceDashboard.module.css";

export function ComplianceDashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.stats}>
        <div className={styles.stat}><span className={styles.statLabel}>Scanned</span><span className={styles.statValue}>1,247</span></div>
        <div className={styles.stat}><span className={styles.statLabel}>Flagged</span><span className={styles.statValue}>23</span></div>
        <div className={styles.stat}><span className={styles.statLabel}>Blocked</span><span className={styles.statValue}>4</span></div>
        <div className={styles.stat}><span className={styles.statLabel}>Avg Risk</span><span className={styles.statValue}>12.3</span></div>
      </div>

      <div className={styles.section}>
        <h3>KYT Alerts</h3>
        <table className={styles.table}>
          <thead><tr><th>Time</th><th>Wallet</th><th>Score</th><th>Level</th><th>Action</th></tr></thead>
          <tbody>
            <tr className={styles.critical}><td>14:32</td><td>0x4f2...</td><td>92</td><td>CRITICAL</td><td>BLOCK</td></tr>
            <tr><td>14:28</td><td>0xa3d...</td><td>45</td><td>MEDIUM</td><td>PASS</td></tr>
            <tr><td>14:15</td><td>0xb1c...</td><td>12</td><td>LOW</td><td>PASS</td></tr>
          </tbody>
        </table>
      </div>

      <div className={styles.section}>
        <h3>Travel Rule Log</h3>
        <table className={styles.table}>
          <thead><tr><th>Time</th><th>From</th><th>To</th><th>Amount</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>14:32</td><td>Acme SA</td><td>Bank X</td><td>$50K</td><td>SENT</td></tr>
          </tbody>
        </table>
      </div>

      <div className={styles.section}>
        <h3>Blocked Payments</h3>
        <table className={styles.table}>
          <thead><tr><th>Time</th><th>From</th><th>To</th><th>Amount</th><th>Reason</th></tr></thead>
          <tbody>
            <tr><td>14:32</td><td>0x4f2...</td><td>0x9a1...</td><td>$25K</td><td>KYT: OFAC</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
