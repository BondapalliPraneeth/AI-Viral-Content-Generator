import { Zap } from "lucide-react";

const steps = [
  "Analyzing your niche and audience...",
  "Crafting irresistible viral hooks...",
  "Generating captions & hashtags...",
  "Building your content strategy...",
];

export default function TypingLoader({ dark }) {
  return (
    <div className={`rounded-2xl p-8 border ${dark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
          <Zap size={18} color="white" />
        </div>
        <div>
          <p className="font-semibold text-sm m-0">AI is crafting your content...</p>
          <p className={`text-xs m-0 ${dark ? "text-slate-400" : "text-slate-500"}`}>Optimized for reach & engagement</p>
        </div>
      </div>
      <div className="flex gap-1.5 mb-6">
        {[0, 1, 2].map(i => (
          <div key={i} className="w-2 h-2 rounded-full bg-indigo-500"
            style={{ animation: `bounce-dot 1.2s ease-in-out ${i * 0.2}s infinite` }} />
        ))}
      </div>
      <div className={`rounded-xl divide-y ${dark ? "divide-slate-800 border border-slate-800" : "divide-slate-100 border border-slate-100"}`}>
        {steps.map((msg, i) => (
          <div key={i} className={`flex items-center gap-3 px-4 py-3 text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>
            <div className="w-5 h-5 rounded-full bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
              <Zap size={9} className="text-indigo-500" />
            </div>
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}
