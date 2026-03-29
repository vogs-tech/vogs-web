import { AgentChat } from "@/components/AgentChat";
import styles from "./page.module.css";

export default function AgentPage() {
  return (
    <div className={styles.page} style={{ height: "calc(100vh - 12rem)" }}>
      <h2 className={styles.heading}>AI Agent</h2>
      <AgentChat />
    </div>
  );
}
