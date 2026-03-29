export interface Vault {
  id: string;
  name: string;
  currency: "USDC" | "EURC" | "XAUT";
  balance: number;
  apy: number;
  allocation: number;
  publicKey: string;
}

export interface Payment {
  id: string;
  timestamp: string;
  from: string;
  to: string;
  amount: number;
  currency: "USDC" | "EURC" | "XAUT";
  status: "pending" | "confirmed" | "failed" | "blocked";
  txSignature?: string;
}

export interface PaymentStream {
  id: string;
  sender: string;
  recipient: string;
  ratePerSecond: number;
  totalAmount: number;
  remainingAmount: number;
  currency: "USDC" | "EURC" | "XAUT";
  startTime: string;
  endTime: string;
  status: "active" | "paused" | "completed" | "cancelled";
}

export interface CollateralPosition {
  id: string;
  asset: string;
  assetType: "gold" | "bond" | "real_estate";
  collateralValue: number;
  loanAmount: number;
  ltvRatio: number;
  healthFactor: number;
  publicKey: string;
}

export interface KytAlert {
  id: string;
  timestamp: string;
  walletAddress: string;
  riskScore: number;
  riskLevel: "low" | "medium" | "high" | "critical";
  actionTaken: "pass" | "flag" | "block";
}

export interface AgentMessage {
  id: string;
  role: "user" | "agent";
  content: string;
  timestamp: string;
  action?: {
    type: "sign_tx";
    transaction: string;
    description: string;
  };
}

export interface WebSocketMessage<T = unknown> {
  type: "data" | "update" | "error";
  channel: string;
  data?: T;
  message?: string;
}
