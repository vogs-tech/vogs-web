import styles from "./page.module.css";

const MOCK_POSITIONS = [
  { asset: "TER Gold", value: "$305,000", loan: "$200,000", ltv: "65.6%", health: "1.52", status: "Healthy" },
  { asset: "PAXG Gold", value: "$152,500", loan: "$120,000", ltv: "78.7%", health: "1.15", status: "Warning" },
];

export default function CollateralPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Collateral Positions</h2>
        <div className={styles.actions}>
          <button className={styles.actionBtn}>Pledge</button>
          <button className={styles.actionBtnSecondary}>Draw Credit</button>
        </div>
      </div>
      <table className={styles.table}>
        <thead><tr><th>Asset</th><th>Value</th><th>Loan</th><th>LTV</th><th>Health</th><th>Status</th></tr></thead>
        <tbody>
          {MOCK_POSITIONS.map((p, i) => (
            <tr key={i}><td>{p.asset}</td><td>{p.value}</td><td>{p.loan}</td><td>{p.ltv}</td>
              <td className={parseFloat(p.health) < 1.2 ? styles.warn : styles.ok}>{p.health}</td>
              <td><span className={`${styles.badge} ${p.status === "Healthy" ? styles.healthy : styles.warning}`}>{p.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
