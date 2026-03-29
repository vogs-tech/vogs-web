import { config } from "./config";

async function authFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const resp = await fetch(`${config.apiUrl}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!resp.ok) {
    const body = await resp.json().catch(() => ({}));
    throw new Error(body.message || `Auth error: ${resp.status}`);
  }
  return resp.json();
}

export const auth = {
  signup: (email: string, password: string, institutionId: string) =>
    authFetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, institution_id: institutionId }),
    }),

  login: (email: string, password: string) =>
    authFetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  logout: () =>
    authFetch("/api/auth/logout", { method: "POST" }),

  getChallenge: (wallet: string) =>
    authFetch<{ nonce: string }>(`/api/auth/challenge?wallet=${wallet}`),

  walletLogin: (pubkey: string, signature: string, message: string) =>
    authFetch("/api/auth/wallet-login", {
      method: "POST",
      body: JSON.stringify({ pubkey, signature, message }),
    }),

  getMe: () =>
    authFetch<{
      user_id: string;
      institution_id: string | null;
      auth_method: string;
      wallets: Array<{ id: string; pubkey: string; is_primary: boolean }>;
      passkey_count: number;
    }>("/api/auth/me"),
} as const;
