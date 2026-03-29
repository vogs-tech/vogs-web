"use client";
import { useState } from "react";
import { PaymentForm } from "@/components/PaymentForm";
import styles from "./page.module.css";

const MOCK_PAYMENTS = [
  { date: "14:32", from: "0x1a2b...9f8e", to: "0x4f2d...3c1a", amount: "$50,000", currency: "USDC", status: "Completed" },
  { date: "14:28", from: "0xa3d1...8b2c", to: "0x7e5f...2d9b", amount: "€100,000", currency: "EURC", status: "Pending" },
  { date: "14:15", from: "0xb1c4...6a3d", to: "0x9f8e...1a2b", amount: "$25,000", currency: "USDC", status: "Blocked" },
];

export default function PaymentsPage() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Payment History</h2>
        <button className={styles.actionBtn} onClick={() => setShowForm(true)}>New Payment</button>
      </div>
      <table className={styles.table}>
        <thead><tr><th>Time</th><th>From</th><th>To</th><th>Amount</th><th>Currency</th><th>Status</th></tr></thead>
        <tbody>
          {MOCK_PAYMENTS.map((p, i) => (
            <tr key={i}><td>{p.date}</td><td>{p.from}</td><td>{p.to}</td><td>{p.amount}</td><td>{p.currency}</td>
              <td><span className={`${styles.badge} ${styles[p.status.toLowerCase()]}`}>{p.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && (
        <div className={styles.overlay} onClick={() => setShowForm(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>New Payment</h3>
            <PaymentForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
