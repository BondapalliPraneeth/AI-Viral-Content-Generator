import { useState } from "react";
import { Sparkles, Download, Copy, Zap, Megaphone, Hash, Image, TrendingUp, Star, ArrowRight } from "lucide-react";
import { generateContent } from "../services/api";
import { getHistory, saveHistory, formatResult, downloadTxt } from "../utils/helpers";
import SectionCard from "../components/SectionCard";
import TypingLoader from "../components/TypingLoader";

const PLATFORMS = ["Instagram", "YouTube", "LinkedIn", "TikTok"];
const CONTENT_TYPES = ["Reel", "Carousel", "Shorts", "Post", "Video"];
const TONES = ["Viral", "Professional", "Funny", "Motivational", "Educational"];
const PLATFORM_ICONS = { Instagram: "📸", YouTube: "▶️", LinkedIn: "💼", TikTok: "🎵" };

export default function GeneratorPage({ dark }) {
  const [form, setForm] = useState({ niche: "", platform: "Instagram", contentType: "Reel", audience: "", tone: "Viral" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const c = dark ? { bg: "#020617", card: "#0f172a", border: "#1e293b", muted: "#64748b", text: "#f1f5f9", input: "#0f172a", inputBorder: "#1e293b" }
                 : { bg: "#f0f4ff", card: "#ffffff", border: "#e2e8f0", muted: "#94a3b8", text: "#0f172a", input: "#f8fafc", inputBorder: "#e2e8f0" };

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const generate = async () => {
    if (!form.niche.trim()) { setError("Please enter your content niche."); return; }
    if (!form.audience.trim()) { setError("Please describe your target audience."); return; }
    setError(""); setLoading(true); setResult(null);
    try {
      const res = await generateContent(form);
      setResult(res.data);
      const entry = { id: Date.now(), form: { ...form }, result: res.data, timestamp: new Date().toISOString() };
      const history = [entry, ...getHistory()].slice(0, 20);
      saveHistory(history);
    } catch (e) {
      setError(e.response?.data?.error || "Generation failed. Check your API connection and try again.");
    }
    setLoading(false);
  };

  const inputS = { width: "100%", padding: "10px 13px", borderRadius: 9, border: `1px solid ${c.inputBorder}`, background: c.input, color: c.text, fontSize: 14, boxSizing: "border-box", outline: "none", fontFamily: "inherit" };
  const labelS = { display: "block", fontSize: 11, fontWeight: 700, color: c.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" };

  return (
    <div style={{ minHeight: "100vh", background: c.bg, color: c.text, fontFamily: "Inter, sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 5vw", display: "grid", gridTemplateColumns: "clamp(300px,35%,400px) 1fr", gap: 28, alignItems: "start" }}>

        {/* ─ Form ─ */}
        <div style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: 18, padding: 28, position: "sticky", top: 88 }}>
          <h2 style={{ fontWeight: 700, fontSize: 18, marginBottom: 4, marginTop: 0, color: c.text }}>Content Setup</h2>
          <p style={{ color: c.muted, fontSize: 13, marginBottom: 24 }}>Configure your content parameters.</p>

          <div style={{ marginBottom: 15 }}>
            <label style={labelS}>Content Niche *</label>
            <input value={form.niche} onChange={e => set("niche", e.target.value)} placeholder="e.g. Fitness, Finance, Travel..." style={inputS} />
          </div>

          <div style={{ marginBottom: 15 }}>
            <label style={labelS}>Platform</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
              {PLATFORMS.map(p => (
                <button key={p} onClick={() => set("platform", p)} style={{
                  padding: "9px 8px", borderRadius: 9, cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .15s",
                  border: `1px solid ${form.platform === p ? "#6366f1" : c.inputBorder}`,
                  background: form.platform === p ? (dark ? "rgba(99,102,241,0.2)" : "rgba(99,102,241,0.08)") : "transparent",
                  color: form.platform === p ? "#6366f1" : c.muted,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 5
                }}>
                  {PLATFORM_ICONS[p]} {p}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 15 }}>
            <label style={labelS}>Content Type</label>
            <select value={form.contentType} onChange={e => set("contentType", e.target.value)} style={{ ...inputS, cursor: "pointer" }}>
              {CONTENT_TYPES.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>

          <div style={{ marginBottom: 15 }}>
            <label style={labelS}>Target Audience *</label>
            <input value={form.audience} onChange={e => set("audience", e.target.value)} placeholder="e.g. Women 25-34, gym beginners" style={inputS} />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={labelS}>Tone</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {TONES.map(t => (
                <button key={t} onClick={() => set("tone", t)} style={{
                  padding: "6px 13px", borderRadius: 100, cursor: "pointer", fontSize: 12, fontWeight: 600, transition: "all .15s",
                  border: `1px solid ${form.tone === t ? "#6366f1" : c.inputBorder}`,
                  background: form.tone === t ? "#6366f1" : "transparent",
                  color: form.tone === t ? "#fff" : c.muted,
                }}>{t}</button>
              ))}
            </div>
          </div>

          {error && (
            <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 9, padding: "10px 13px", fontSize: 13, color: "#ef4444", marginBottom: 16 }}>{error}</div>
          )}

          <button onClick={generate} disabled={loading} style={{
            width: "100%", padding: 14, borderRadius: 12, border: "none",
            background: loading ? c.muted : "linear-gradient(135deg,#6366f1,#8b5cf6)",
            color: "#fff", fontWeight: 700, fontSize: 15, cursor: loading ? "not-allowed" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            boxShadow: loading ? "none" : "0 6px 24px rgba(99,102,241,0.35)"
          }}>
            {loading ? <>Generating...</> : <><Sparkles size={16} /> Generate Viral Content</>}
          </button>
        </div>

        {/* ─ Output ─ */}
        <div>
          {!result && !loading && (
            <div style={{ background: c.card, border: `1px dashed ${c.border}`, borderRadius: 18, padding: "60px 40px", textAlign: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: 18, background: "rgba(99,102,241,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#6366f1" }}>
                <Sparkles size={28} />
              </div>
              <h3 style={{ fontWeight: 700, marginBottom: 8, color: c.text }}>Your Content Will Appear Here</h3>
              <p style={{ color: c.muted, fontSize: 14, margin: 0 }}>Fill in the form and click Generate.</p>
            </div>
          )}

          {loading && <TypingLoader dark={dark} />}

          {result && (
            <>
              <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
                <button onClick={() => downloadTxt(formatResult(result, form), `viral-content-${Date.now()}.txt`)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 8, border: `1px solid ${c.border}`, background: "none", color: c.text, cursor: "pointer", fontSize: 13, fontWeight: 500 }}>
                  <Download size={13} /> Export TXT
                </button>
                <button onClick={generate} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 8, border: "none", background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
                  <Zap size={13} /> Regenerate
                </button>
              </div>

              <SectionCard icon={Megaphone} label="Viral Hook" content={result.hook} dark={dark} accent="#6366f1" />
              <SectionCard icon={Zap} label="Reel / Content Ideas" content={result.reelIdeas} dark={dark} accent="#8b5cf6" />
              <SectionCard icon={Star} label="Caption" content={result.caption} dark={dark} accent="#ec4899" />
              <SectionCard icon={Hash} label="Hashtags" content={result.hashtags?.join("  ")} dark={dark} accent="#06b6d4" />
              <SectionCard icon={Image} label="Thumbnail Text" content={result.thumbnailText} dark={dark} accent="#f59e0b" />
              <SectionCard icon={ArrowRight} label="Call to Action" content={result.cta} dark={dark} accent="#10b981" />
              <SectionCard icon={TrendingUp} label="Strategy Tips" content={result.strategyTips} dark={dark} accent="#f97316" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
