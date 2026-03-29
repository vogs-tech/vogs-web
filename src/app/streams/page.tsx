import styles from "./page.module.css";

const MOCK_STREAMS = [
  { sender: "0x1a2b...9f8e", recipient: "0x4f2d...3c1a", rate: "$2.78/sec", remaining: "$45,000", status: "Active" },
  { sender: "0xa3d1...8b2c", recipient: "0x7e5f...2d9b", rate: "$1.15/sec", remaining: "$12,300", status: "Paused" },
];

export default function StreamsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Payment Streams</h2>
        <button className={styles.actionBtn}>Create Stream</button>
      </div>
      <div className={styles.grid}>
        {MOCK_STREAMS.map((s, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={`${styles.badge} ${s.status === "Active" ? styles.active : styles.paused}`}>{s.status}</span>
            </div>
            <div className={styles.row}><span className={styles.muted}>From</span><span>{s.sender}</span></div>
            <div className={styles.row}><span className={styles.muted}>To</span><span>{s.recipient}</span></div>
            <div className={styles.row}><span className={styles.muted}>Rate</span><span>{s.rate}</span></div>
            <div className={styles.row}><span className={styles.muted}>Remaining</span><span className={styles.bold}>{s.remaining}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}
