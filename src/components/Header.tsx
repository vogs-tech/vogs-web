"use client";
import { useTheme } from "@/hooks/useTheme";
import { useAuth } from "@/hooks/useAuth";
import { WalletConnect } from "@/components/WalletConnect";
import styles from "./Header.module.css";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { logout, isAuthenticated } = useAuth();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>VOGS Treasury</h1>
      <div className={styles.actions}>
        <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "light" ? "☾" : "☀"}
        </button>
        <WalletConnect />
        {isAuthenticated && (
          <button className={styles.logoutBtn} onClick={() => logout()}>
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
}
