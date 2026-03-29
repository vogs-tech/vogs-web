import styles from "./page.module.css";

export default function VaultsPage() {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Vault Management</h2>
      <div className={styles.content}>
        <p>Manage yield vaults across Ondo USDY, Maple syrupUSDC, and BlackRock BUIDL.</p>
      </div>
    </div>
  );
}
