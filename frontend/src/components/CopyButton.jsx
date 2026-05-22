import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { copyToClipboard } from "../utils/helpers";

export default function CopyButton({ text, dark }) {
  const [copied, setCopied] = useState(false);
  const handle = async () => {
    await copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handle} className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border transition-all ${dark ? "border-slate-700 text-slate-400 hover:bg-slate-800" : "border-slate-200 text-slate-500 hover:bg-slate-100"}`}>
      {copied ? <Check size={11} /> : <Copy size={11} />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
