import { Moon, Sun, Zap, History, Plus } from "lucide-react";

export default function Navbar({ dark, toggleDark, page, setPage }) {
  return (
    <nav className={`sticky top-0 z-50 flex justify-between items-center px-6 py-4 border-b backdrop-blur-md ${dark ? "bg-slate-950/90 border-slate-800" : "bg-blue-50/90 border-slate-200"}`}>
      <button onClick={() => setPage("landing")} className="flex items-center gap-2 font-bold text-lg">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
          <Zap size={15} color="white" />
        </div>
        <span className="bg-gradient-to-r from-indigo-500 to-violet-400 bg-clip-text text-transparent">ViralAI</span>
      </button>
      <div className="flex gap-2">
        {page !== "landing" && (
          <>
            <button onClick={() => setPage("generator")} className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold border transition ${page === "generator" ? "border-indigo-500 text-indigo-500" : dark ? "border-slate-700 text-slate-400" : "border-slate-300 text-slate-500"}`}>
              <Plus size={14} /> Generate
            </button>
            <button onClick={() => setPage("history")} className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold border transition ${page === "history" ? "border-indigo-500 text-indigo-500" : dark ? "border-slate-700 text-slate-400" : "border-slate-300 text-slate-500"}`}>
              <History size={14} /> History
            </button>
          </>
        )}
        <button onClick={toggleDark} className={`p-2 rounded-lg border ${dark ? "border-slate-700 text-slate-400" : "border-slate-300 text-slate-500"}`}>
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
}
