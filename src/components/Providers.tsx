"use client";

import { useMemo, type ReactNode } from "react";
import { config } from "@/lib/config";

let ConnectionProvider: any;
let WalletProvider: any;
let WalletModalProvider: any;

try {
  const walletAdapter = require("@solana/wallet-adapter-react");
  const walletModal = require("@solana/wallet-adapter-react-ui");
  ConnectionProvider = walletAdapter.ConnectionProvider;
  WalletProvider = walletAdapter.WalletProvider;
  WalletModalProvider = walletModal.WalletModalProvider;
  require("@solana/wallet-adapter-react-ui/styles.css");
} catch {
  // Wallet adapter not available — render children without wallet context
}

export function Providers({ children }: { children: ReactNode }) {
  const endpoint = config.solanaRpcUrl || "https://api.devnet.solana.com";
  const wallets = useMemo(() => [], []);

  if (!ConnectionProvider || !WalletProvider || !WalletModalProvider) {
    return <>{children}</>;
  }

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
