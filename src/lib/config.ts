function getEnv(name: string, fallback?: string): string {
  const value = process.env[name];
  if (value) return value;
  if (fallback !== undefined) return fallback;
  if (typeof window !== "undefined") {
    console.warn(`${name} environment variable is not set — check .env.example`);
    return "";
  }
  return "";
}

export const config = {
  apiUrl: getEnv("NEXT_PUBLIC_API_URL"),
  wsUrl: getEnv("NEXT_PUBLIC_WS_URL"),
  solanaRpcUrl: getEnv("NEXT_PUBLIC_SOLANA_RPC_URL"),
  solanaNetwork: getEnv("NEXT_PUBLIC_SOLANA_NETWORK"),
} as const;
