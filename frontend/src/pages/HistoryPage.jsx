import { ArrowRight, Trash2, Zap } from "lucide-react";
import { getHistory, saveHistory } from "../utils/helpers";
import { useState } from "react";

export default function HistoryPage({ dark, setPage, loadResult }) {
  const [history, setHistory] = useState(getHistory);

  const clearAll = () => { setHistory([]); saveHistory([]); };
  const openEntry = (entry) => { loadResult(entry); setPage("generator"); };

  const c = dark ? { bg: "#020617", card: "#0f172a", border: "#1e293b", muted: "#64748b", text: "#f1f5f9" }
                 : { bg: "#f0f4ff", card: "#ffffff", border: "#e2e8f0", muted: "#94a3b8", text: "#0f172a" };

  return (
    <div style={{ minHeight: "100vh", background: c.bg, color: c.text, fontFamily: "Inter, sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 5vw" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
          <div>
            <h1 style={{ fontWeight: 700, fontSize: 24, marginBottom: 4, marginTop: 0, color: c.text }}>Generation History</h1>
            <p style={{ color: c.muted, fontSize: 14, margin: 0 }}>{history.length} saved generations</p>
          </div>
          {history.length > 0 && (
            <button onClick={clearAll} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 8, border: "1px solid rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.1)", color: "#ef4444", cursor: "pointer", fontSize: 13 }}>
              <Trash2 size={13} /> Clear All
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 20px", background: c.card, borderRadius: 18, border: `1px dashed ${c.border}` }}>
            <h3 style={{ fontWeight: 600, marginBottom: 8, color: c.text }}>No history yet</h3>
            <p style={{ color: c.muted, fontSize: 14, marginBottom: 20 }}>Start generating content to see history.</p>
            <button onClick={() => setPage("generator")} style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", border: "none", borderRadius: 10, padding: "11px 24px", color: "#fff", fontWeight: 600, cursor: "pointer" }}>
              Generate Content
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {history.map(entry => (
              <div key={entry.id} onClick={() => openEntry(entry)} style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: 16, padding: 22, cursor: "pointer", transition: "border-color .2s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div>
                    <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 8 }}>
                      {[entry.form.platform, entry.form.contentType, entry.form.tone].map(tag => (
                        <span key={tag} style={{ background: "rgba(99,102,241,0.12)", color: "#6366f1", borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 600 }}>{tag}</span>
                      ))}
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: 16, margin: "0 0 4px", color: c.text }}>{entry.form.niche}</h3>
                    <p style={{ color: c.muted, fontSize: 12, margin: 0 }}>{new Date(entry.timestamp).toLocaleString()}</p>
                  </div>
                  <ArrowRight size={18} style={{ color: c.muted }} />
                </div>
                <p style={{ color: c.muted, fontSize: 13, lineHeight: 1.6, borderTop: `1px solid ${c.border}`, paddingTop: 12, margin: 0 }}>
                  <strong style={{ color: "#6366f1" }}>Hook:</strong> {entry.result.hook?.slice(0, 120)}...
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
