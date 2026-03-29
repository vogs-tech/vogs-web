import styles from "./page.module.css";

export default function PaymentsPage() {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Payment History</h2>
      <div className={styles.content}>
        <p>View and manage cross-border payments with KYT screening and Travel Rule compliance.</p>
      </div>
    </div>
  );
}
