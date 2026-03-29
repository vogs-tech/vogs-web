"use client";
import { useEffect, useState } from "react";
import type { PaymentStream } from "@/lib/types";

export function useStreams() {
  const [streams, setStreams] = useState<PaymentStream[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Streams data comes via WebSocket or REST fallback
    setLoading(false);
  }, []);

  return { streams, loading, error };
}
