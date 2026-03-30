"use client";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.8rem",
        lineHeight: 1,
        padding: "0.4rem",
        color: "var(--color-text-primary)",
      }}
    >
      {theme === "light" ? "☾" : "☀"}
    </button>
  );
}
