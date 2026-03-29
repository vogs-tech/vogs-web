"use client";
import { useState } from "react";
import styles from "./PaymentForm.module.css";

interface PaymentFormProps {
  onClose: () => void;
}

export function PaymentForm({ onClose }: PaymentFormProps) {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USDC");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call api.createPayment
    onClose();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label}>Recipient Address</label>
        <input className={styles.input} value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="Solana public key" required />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Amount</label>
        <input className={styles.input} type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" required />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Currency</label>
        <select className={styles.input} value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="USDC">USDC</option>
          <option value="EURC">EURC</option>
          <option value="XAUT">XAUT</option>
        </select>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.cancelBtn} onClick={onClose}>Cancel</button>
        <button type="submit" className={styles.submitBtn}>Send Payment</button>
      </div>
    </form>
  );
}
