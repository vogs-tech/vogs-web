"use client";
import { useVaults } from "@/hooks/useVaults";
import { usePayments } from "@/hooks/usePayments";
import styles from "./page.module.css";

export default function DashboardPage() {
  const { vaults, loading: vaultsLoading } = useVaults();
  const { payments, loading: paymentsLoading } = usePayments();

  const totalAum = vaults.reduce((sum: number, v: any) => sum + (Number(v.balance) || 0), 0);
  const formattedAum = totalAum > 0 ? `$${(totalAum / 1_000_000).toFixed(1)}M` : "$0";

  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Dashboard Overview</h2>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total AUM</span>
          <span className={styles.statValue}>{vaultsLoading ? "..." : formattedAum}</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Vaults</span>
          <span className={styles.statValue}>{vaultsLoading ? "..." : vaults.length}</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Payments</span>
          <span className={styles.statValue}>{paymentsLoading ? "..." : payments.length}</span>
        </div>
      </div>

      <div className={styles.section}>
        <h3>Recent Payments</h3>
        {paymentsLoading ? (
          <p>Loading...</p>
        ) : payments.length === 0 ? (
          <p className={styles.empty}>No payments yet</p>
        ) : (
          <div className={styles.list}>
            {payments.slice(0, 5).map((p: any) => (
              <div key={p.id} className={styles.item}>
                <span>{p.sender_wallet?.slice(0, 8)}... → {p.recipient_wallet?.slice(0, 8)}...</span>
                <span>{p.amount} {p.currency}</span>
                <span className={styles.badge}>{p.status}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
