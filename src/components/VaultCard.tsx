import styles from "./VaultCard.module.css";

interface VaultCardProps {
  name: string;
  balance: string;
  apy: string;
  currency: string;
}

export function VaultCard({ name, balance, apy, currency }: VaultCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.currency}>{currency}</span>
      </div>
      <span className={styles.balance}>{balance}</span>
      <span className={styles.apy}>{apy} APY</span>
    </div>
  );
}
