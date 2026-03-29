import styles from "./page.module.css";

export default function CollateralPage() {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Collateral Positions</h2>
      <div className={styles.content}>
        <p>Pledge tokenized real-world assets and draw stablecoin credit lines.</p>
      </div>
    </div>
  );
}
