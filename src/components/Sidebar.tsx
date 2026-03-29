"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Sidebar.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Dashboard", icon: "D" },
  { href: "/vaults", label: "Vaults", icon: "V" },
  { href: "/payments", label: "Payments", icon: "P" },
  { href: "/streams", label: "Streams", icon: "S" },
  { href: "/collateral", label: "Collateral", icon: "C" },
  { href: "/compliance", label: "Compliance", icon: "K" },
  { href: "/agent", label: "Agent", icon: "A" },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>VOGS</div>
      <ul className={styles.nav}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={`${styles.link} ${pathname === item.href ? styles.active : ""}`}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
