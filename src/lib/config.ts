function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} environment variable is required — check .env.example`);
  }
  return value;
}

export const config = {
  apiUrl: requireEnv("NEXT_PUBLIC_API_URL"),
  wsUrl: requireEnv("NEXT_PUBLIC_WS_URL"),
  solanaRpcUrl: process.env.NEXT_PUBLIC_SOLANA_RPC_URL ?? "https://api.devnet.solana.com",
  solanaNetwork: process.env.NEXT_PUBLIC_SOLANA_NETWORK ?? "devnet",
} as const;
