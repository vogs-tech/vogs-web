import { Connection } from "@solana/web3.js";
import { config } from "./config";

let connection: Connection | null = null;

export function getConnection(): Connection {
  if (!connection) {
    connection = new Connection(config.solanaRpcUrl, "confirmed");
  }
  return connection;
}

export const SOLANA_NETWORK = config.solanaNetwork;
