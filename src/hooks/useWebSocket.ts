"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { config } from "@/lib/config";

type ConnectionState = "connected" | "reconnecting" | "disconnected";

export function useWebSocket() {
  const [lastEvent, setLastEvent] = useState<Record<string, unknown> | null>(null);
  const [connectionState, setConnectionState] = useState<ConnectionState>("disconnected");
  const wsRef = useRef<WebSocket | null>(null);
  const retryRef = useRef(0);

  const connect = useCallback(() => {
    try {
      const ws = new WebSocket(config.wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        setConnectionState("connected");
        retryRef.current = 0;
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          setLastEvent(data);
        } catch {}
      };

      ws.onclose = () => {
        setConnectionState("reconnecting");
        const delay = Math.min(1000 * 2 ** retryRef.current, 30000);
        retryRef.current++;
        setTimeout(connect, delay);
      };

      ws.onerror = () => ws.close();
    } catch {
      setConnectionState("disconnected");
    }
  }, []);

  useEffect(() => {
    connect();
    return () => wsRef.current?.close();
  }, [connect]);

  return { lastEvent, connectionState };
}
