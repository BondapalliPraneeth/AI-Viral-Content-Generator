import { Zap, Sparkles, Brain, Copy, Rocket, TrendingUp } from "lucide-react";

const features = ["🎯 Viral Hooks","📸 Captions","▶️ YouTube Titles","🔥 Hashtags","🖼️ Thumbnail Text","📈 Growth Strategy","💡 Reel Ideas","📣 CTAs"];
const stats = [["10K+","Creators"],["500K+","Generated"],["4","Platforms"],["<5s","Per Result"]];

export default function LandingPage({ dark, setPage }) {
  const c = dark ? { bg: "#020617", card: "#0f172a", border: "#1e293b", muted: "#64748b", text: "#f1f5f9" }
                 : { bg: "#f0f4ff", card: "#ffffff", border: "#e2e8f0", muted: "#94a3b8", text: "#0f172a" };
  return (
    <div style={{ minHeight: "100vh", background: c.bg, color: c.text, fontFamily: "Inter, sans-serif", overflowX: "hidden" }}>
      {/* Orbs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "-5%", left: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "5%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }} />
      </div>

      {/* Nav */}
      <nav style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 6vw", borderBottom: `1px solid ${c.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={17} color="white" />
          </div>
          <span style={{ fontWeight: 700, fontSize: 18, background: "linear-gradient(90deg,#6366f1,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>ViralAI</span>
        </div>
        <button onClick={() => setPage("generator")} style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", border: "none", borderRadius: 10, padding: "9px 22px", color: "#fff", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
          Launch App →
        </button>
      </nav>

      {/* Hero */}
      <main style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "100px 6vw 80px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 32, fontSize: 13, color: "#6366f1", fontWeight: 500 }}>
          <Sparkles size={13} /> Powered by Claude AI · Built for Creators
        </div>
        <h1 style={{ fontSize: "clamp(2.4rem,6vw,4.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.03em", color: c.text }}>
          Generate{" "}
          <span style={{ background: "linear-gradient(135deg,#6366f1,#a78bfa,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Viral Content</span>
          <br />in Seconds
        </h1>
        <p style={{ fontSize: "clamp(1rem,2.5vw,1.2rem)", color: c.muted, maxWidth: 560, margin: "0 auto 44px", lineHeight: 1.7 }}>
          AI-powered hooks, captions, hashtags, reel ideas & growth strategies for Instagram, YouTube, TikTok & LinkedIn creators.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => setPage("generator")} style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", border: "none", borderRadius: 12, padding: "14px 34px", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 8px 32px rgba(99,102,241,0.35)" }}>
            <Rocket size={17} /> Start Generating Free
          </button>
          <button onClick={() => setPage("history")} style={{ background: "none", border: `1px solid ${c.border}`, borderRadius: 12, padding: "14px 28px", color: c.text, fontWeight: 600, fontSize: 15, cursor: "pointer" }}>
            View History
          </button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginTop: 56 }}>
          {features.map(f => (
            <span key={f} style={{ background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", border: `1px solid ${c.border}`, borderRadius: 100, padding: "6px 16px", fontSize: 13, color: c.muted }}>{f}</span>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "clamp(24px,5vw,80px)", marginTop: 80, flexWrap: "wrap" }}>
          {stats.map(([n, l]) => (
            <div key={n} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: c.text }}>{n}</div>
              <div style={{ fontSize: 13, color: c.muted, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </main>

      {/* How it works */}
      <section style={{ position: "relative", zIndex: 1, padding: "60px 6vw 80px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, marginBottom: 40, color: c.text }}>How It Works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
          {[
            { icon: Brain, n: "01", title: "Describe Your Niche", desc: "Tell us your content category, platform, and target audience." },
            { icon: Zap, n: "02", title: "AI Generates", desc: "Claude crafts hooks, captions, hashtags, and strategy in seconds." },
            { icon: Copy, n: "03", title: "Copy & Post", desc: "One-click copy everything. Export to TXT. Go viral." },
          ].map(({ icon: Icon, n, title, desc }) => (
            <div key={n} style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: 16, padding: 28, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 14, right: 18, fontSize: 48, fontWeight: 900, color: dark ? "#1e293b" : "#f1f5f9", lineHeight: 1 }}>{n}</div>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(99,102,241,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, color: "#6366f1" }}>
                <Icon size={20} />
              </div>
              <h3 style={{ fontWeight: 700, marginBottom: 8, fontSize: 16, color: c.text }}>{title}</h3>
              <p style={{ color: c.muted, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: 24, color: c.muted, fontSize: 13, borderTop: `1px solid ${c.border}` }}>
        Built with ❤️ using Claude AI · ViralAI © 2025
      </footer>
    </div>
  );
}
