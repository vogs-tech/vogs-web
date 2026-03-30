"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LoginForm } from "@/components/LoginForm";
import { WalletSignIn } from "@/components/WalletSignIn";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "./page.module.css";

export default function LoginPage() {
  const router = useRouter();
  const handleSuccess = () => router.push("/dashboard");

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
          <Link href="/" style={{ fontSize: "1.3rem", color: "var(--color-text-muted)" }}>← Back to home</Link>
          <ThemeToggle />
        </div>
        <h1 className={styles.title}>Sign In to VOGS</h1>

        <div className={styles.section}>
          <WalletSignIn onSuccess={handleSuccess} />
        </div>

        <div className={styles.divider}>
          <span>or use email</span>
        </div>

        <LoginForm onSuccess={handleSuccess} />

        <p className={styles.footer}>
          Don't have an account? <Link href="/signup" className={styles.link}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
