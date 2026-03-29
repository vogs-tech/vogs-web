"use client";
import { VaultCard } from "@/components/VaultCard";
import styles from "./page.module.css";

const MOCK_VAULTS = [
  { name: "USDC Vault", balance: "$4,200,000", apy: "4.82%", currency: "USDC" },
  { name: "EURC Vault", balance: "$3,100,000", apy: "3.20%", currency: "EURC" },
  { name: "Gold Vault", balance: "$5,100,000", apy: "1.50%", currency: "XAUT" },
];

export default function VaultsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Vault Management</h2>
        <button className={styles.actionBtn}>Deposit</button>
      </div>
      <div className={styles.grid}>
        {MOCK_VAULTS.map((v) => (
          <VaultCard key={v.name} name={v.name} balance={v.balance} apy={v.apy} currency={v.currency} />
        ))}
      </div>
      <div className={styles.section}>
        <h3>Allocation Strategy</h3>
        <div className={styles.allocations}>
          <div className={styles.alloc}><span>Ondo USDY</span><span>40% — 4.82% APY</span></div>
          <div className={styles.alloc}><span>Maple syrupUSDC</span><span>35% — 6.51% APY</span></div>
          <div className={styles.alloc}><span>BlackRock BUIDL</span><span>25% — 4.25% APY</span></div>
        </div>
      </div>
    </div>
  );
}
