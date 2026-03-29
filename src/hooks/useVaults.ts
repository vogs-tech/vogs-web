"use client";
import { useEffect, useState } from "react";
import type { Vault } from "@/lib/types";
import { api } from "@/lib/api";

export function useVaults() {
  const [vaults, setVaults] = useState<Vault[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.getVaults()
      .then((data) => setVaults(data as Vault[]))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { vaults, loading, error };
}
