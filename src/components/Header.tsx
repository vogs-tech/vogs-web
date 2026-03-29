"use client";
import { useTheme } from "@/hooks/useTheme";
import styles from "./Header.module.css";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>VOGS Treasury</h1>
      <div className={styles.actions}>
        <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "light" ? "☾" : "☀"}
        </button>
        <button className={styles.walletBtn}>Connect Wallet</button>
      </div>
    </header>
  );
}
