"use client";
import { useCallback, useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>("light");

  useEffect(() => {
    const stored = localStorage.getItem("vogs-theme") as ThemeMode | null;
    const initial = stored ?? "light";
    setThemeState(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeState(mode);
    localStorage.setItem("vogs-theme", mode);
    document.documentElement.setAttribute("data-theme", mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  return { theme, setTheme, toggleTheme };
}
