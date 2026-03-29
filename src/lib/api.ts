import { config } from "./config";

async function fetchJson<T>(path: string, options?: RequestInit): Promise<T> {
  const resp = await fetch(`${config.apiUrl}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!resp.ok) throw new Error(`API error: ${resp.status}`);
  return resp.json();
}

export const api = {
  getVaults: () => fetchJson("/api/vaults"),
  getPayments: () => fetchJson("/api/payments"),
  getCollateral: () => fetchJson("/api/collateral/positions"),
  getCompliance: () => fetchJson("/api/compliance/dashboard"),
  createPayment: (data: Record<string, unknown>) =>
    fetchJson("/api/payments", { method: "POST", body: JSON.stringify(data) }),
  sendAgentMessage: (command: string, sessionId: string) =>
    fetchJson("/api/agent/command", {
      method: "POST",
      body: JSON.stringify({ command, session_id: sessionId }),
    }),
  kytScore: (walletAddress: string) =>
    fetchJson("/api/kyt/score", {
      method: "POST",
      body: JSON.stringify({ wallet_address: walletAddress }),
    }),
} as const;
