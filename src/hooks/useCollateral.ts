"use client";
import { useEffect, useState } from "react";
import type { CollateralPosition } from "@/lib/types";
import { api } from "@/lib/api";

export function useCollateral() {
  const [positions, setPositions] = useState<CollateralPosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.getCollateral()
      .then((data) => setPositions(data as CollateralPosition[]))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { positions, loading, error };
}
