import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "./page.module.css";

export default function LandingPage() {
  return (
    <div className={styles.landing}>
      <header className={styles.header}>
        <span className={styles.logo}>VOGS</span>
        <nav className={styles.nav}>
          <ThemeToggle />
          <Link href="/login" className={styles.signIn}>Sign In</Link>
          <Link href="/signup" className={styles.getStarted}>Get Started</Link>
        </nav>
      </header>

      <main className={styles.hero}>
        <h1 className={styles.title}>AI-Powered Institutional Treasury on Solana</h1>
        <p className={styles.subtitle}>
          Manage yield vaults, cross-border payments, compliance, and collateral
          with AI agents that execute on-chain — all from a single dashboard.
        </p>
        <div className={styles.cta}>
          <Link href="/signup" className={styles.primaryBtn}>Get Started</Link>
          <Link href="/login" className={styles.secondaryBtn}>Sign In</Link>
        </div>
      </main>

      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>Yield Optimization</h3>
          <p>AI agents allocate across Ondo USDY, Maple, and BlackRock BUIDL for optimal returns.</p>
        </div>
        <div className={styles.feature}>
          <h3>Compliance First</h3>
          <p>KYC via Civic Pass, KYT screening, Travel Rule compliance — all enforced on-chain.</p>
        </div>
        <div className={styles.feature}>
          <h3>Cross-Border FX</h3>
          <p>Natural language payments with automatic FX conversion and atomic settlement.</p>
        </div>
        <div className={styles.feature}>
          <h3>RWA Collateral</h3>
          <p>Pledge tokenized gold to draw stablecoin credit lines with real-time LTV monitoring.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Built for StableHacks 2026 on Solana</p>
      </footer>
    </div>
  );
}
