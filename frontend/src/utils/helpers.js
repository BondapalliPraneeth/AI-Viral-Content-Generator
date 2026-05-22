export const copyToClipboard = async (text) => {
  try { await navigator.clipboard.writeText(text); return true; }
  catch { return false; }
};

export const downloadTxt = (content, filename = "viral-content.txt") => {
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
};

export const formatResult = (result, form) =>
`AI VIRAL CONTENT GENERATOR
Generated: ${new Date().toLocaleString()}
Niche: ${form.niche} | Platform: ${form.platform} | Tone: ${form.tone}
${"=".repeat(60)}

VIRAL HOOK
${result.hook}

REEL IDEAS
${result.reelIdeas?.map((r, i) => `${i + 1}. ${r}`).join("\n")}

CAPTION
${result.caption}

HASHTAGS
${result.hashtags?.join(" ")}

THUMBNAIL TEXT
${result.thumbnailText}

CTA
${result.cta}

STRATEGY TIPS
${result.strategyTips?.map((t, i) => `${i + 1}. ${t}`).join("\n")}`;

export const getHistory = () => {
  try { return JSON.parse(localStorage.getItem("vcg_history") || "[]"); } catch { return []; }
};
export const saveHistory = (h) => localStorage.setItem("vcg_history", JSON.stringify(h));
