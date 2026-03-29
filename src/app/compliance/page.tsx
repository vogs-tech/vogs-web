import styles from "./page.module.css";

export default function CompliancePage() {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Compliance Dashboard</h2>
      <div className={styles.content}>
        <p>Monitor KYT risk assessments, Travel Rule audit trails, and blocked payments.</p>
      </div>
    </div>
  );
}
