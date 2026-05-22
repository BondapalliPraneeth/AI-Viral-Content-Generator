import CopyButton from "./CopyButton";

export default function SectionCard({ icon: Icon, label, content, dark, accent }) {
  const text = Array.isArray(content) ? content.join("\n") : content;
  return (
    <div className={`rounded-xl p-5 mb-3.5 border transition-all ${dark ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"}`}
      style={{ borderLeft: `3px solid ${accent}` }}>
      <div className="flex justify-between items-center mb-3">
        <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider" style={{ color: accent }}>
          <Icon size={13} />{label}
        </span>
        <CopyButton text={text} dark={dark} />
      </div>
      {Array.isArray(content) ? (
        <ul className="pl-4 space-y-1.5">
          {content.map((item, i) => (
            <li key={i} className={`text-sm leading-relaxed ${dark ? "text-slate-300" : "text-slate-700"}`}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className={`text-sm leading-relaxed whitespace-pre-wrap m-0 ${dark ? "text-slate-300" : "text-slate-700"}`}>{content}</p>
      )}
    </div>
  );
}
