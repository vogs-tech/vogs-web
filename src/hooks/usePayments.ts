"use client";
import { useEffect, useState } from "react";
import type { Payment } from "@/lib/types";
import { api } from "@/lib/api";

export function usePayments() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.getPayments()
      .then((data) => setPayments(data as Payment[]))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { payments, loading, error };
}
