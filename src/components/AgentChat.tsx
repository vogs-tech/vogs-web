"use client";
import { useState } from "react";
import { useAgent } from "@/hooks/useAgent";
import styles from "./AgentChat.module.css";

export function AgentChat() {
  const { messages, sendMessage, isStreaming, error } = useAgent();
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isStreaming) return;
    sendMessage(input.trim());
    setInput("");
  };

  return (
    <div className={styles.chat}>
      <div className={styles.messages}>
        {messages.map((msg) => (
          <div key={msg.id} className={`${styles.message} ${styles[msg.role]}`}>
            <div className={styles.content}>{msg.content}</div>
          </div>
        ))}
        {isStreaming && <div className={styles.typing}>Agent is thinking...</div>}
        {error && <div className={styles.error}>{error}</div>}
      </div>
      <form className={styles.inputBar} onSubmit={handleSubmit}>
        <input className={styles.input} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a command..." disabled={isStreaming} />
        <button className={styles.sendBtn} type="submit" disabled={isStreaming || !input.trim()}>Send</button>
      </form>
    </div>
  );
}
