"use client";
import { useCallback, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { auth } from "@/lib/auth";
import bs58 from "bs58";
import styles from "./WalletSignIn.module.css";

export function WalletSignIn({ onSuccess }: { onSuccess: () => void }) {
  const { publicKey, signMessage, connected } = useWallet();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleWalletSignIn = useCallback(async () => {
    if (!publicKey || !signMessage) return;
    setLoading(true);
    setError(null);

    try {
      const { nonce } = await auth.getChallenge(publicKey.toBase58());

      const message = [
        "Sign this message to verify wallet ownership.",
        "",
        `Nonce: ${nonce}`,
        `Domain: ${window.location.host}`,
        `Issued At: ${new Date().toISOString()}`,
      ].join("\n");

      const encodedMessage = new TextEncoder().encode(message);
      const signature = await signMessage(encodedMessage);

      await auth.walletLogin(
        publicKey.toBase58(),
        bs58.encode(signature),
        message,
      );

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Wallet sign-in failed");
    } finally {
      setLoading(false);
    }
  }, [publicKey, signMessage, onSuccess]);

  if (!connected) return null;

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={handleWalletSignIn} disabled={loading}>
        {loading ? "Verifying..." : "Sign In with Wallet"}
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
