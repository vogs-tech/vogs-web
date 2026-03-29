"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import styles from "./WalletConnect.module.css";

export function WalletConnect() {
  const { publicKey, disconnect, connected } = useWallet();
  const { setVisible } = useWalletModal();

  if (connected && publicKey) {
    const truncated = `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}`;
    return (
      <div className={styles.connected}>
        <span className={styles.address}>{truncated}</span>
        <button className={styles.disconnectBtn} onClick={() => disconnect()}>
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button className={styles.connectBtn} onClick={() => setVisible(true)}>
      Connect Wallet
    </button>
  );
}
