"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LoginForm } from "@/components/LoginForm";
import { WalletSignIn } from "@/components/WalletSignIn";
import styles from "./page.module.css";

export default function LoginPage() {
  const router = useRouter();
  const handleSuccess = () => router.push("/dashboard");

  return (
    <div className={styles.page}>
      <div className={styles.card}>
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
