import { ComplianceDashboard } from "@/components/ComplianceDashboard";
import styles from "./page.module.css";

export default function CompliancePage() {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Compliance Dashboard</h2>
      <ComplianceDashboard />
    </div>
  );
}
