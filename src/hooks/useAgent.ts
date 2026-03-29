"use client";
import { useCallback, useState } from "react";
import type { AgentMessage } from "@/lib/types";
import { api } from "@/lib/api";

export function useAgent() {
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (text: string) => {
    const userMsg: AgentMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsStreaming(true);
    setError(null);

    try {
      const result = await api.sendAgentMessage(text, "session-1") as Record<string, unknown>;
      const agentMsg: AgentMessage = {
        id: crypto.randomUUID(),
        role: "agent",
        content: JSON.stringify(result, null, 2),
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, agentMsg]);
    } catch (err) {
      setError("Agent unavailable. Please try again.");
    } finally {
      setIsStreaming(false);
    }
  }, []);

  return { messages, sendMessage, isStreaming, error };
}
