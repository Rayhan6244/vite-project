const CATEGORY_STYLES = {
  Frontend: "bg-sky-50 text-sky-700 border-sky-200",
  Backend: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Database: "bg-amber-50 text-amber-700 border-amber-200",
  Language: "bg-violet-50 text-violet-700 border-violet-200",
  Styling: "bg-cyan-50 text-cyan-700 border-cyan-200",
  DevOps: "bg-rose-50 text-rose-700 border-rose-200",
  Tools: "bg-slate-100 text-slate-700 border-slate-200",
};

export default function TechCard({ tech, isAdded, onAdd }) {
  const categoryStyle =
    CATEGORY_STYLES[tech.category] ?? CATEGORY_STYLES.Tools;

  return (
    <article className="flex flex-col rounded-2xl border border-line bg-panel p-5 shadow-sm shadow-ink/[0.03] transition hover:border-slate-300 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink/5">
          <img
            src={tech.icon}
            alt=""
            className="h-6 w-6"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <span className="rounded-full bg-brand-gradient px-2.5 py-1 text-[11px] font-semibold text-white">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 font-display text-base font-semibold text-ink">
        {tech.name}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">
        {tech.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span
          className={`rounded-md border px-2 py-0.5 text-xs font-medium ${categoryStyle}`}
        >
          {tech.category}
        </span>
        <span className="rounded-md border border-line px-2 py-0.5 text-xs font-medium text-muted">
          {tech.difficulty}
        </span>
        <span className="ml-auto flex items-center gap-1 text-xs font-semibold text-amber-600">
          <StarIcon />
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl py-2.5 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-emerald-50 text-emerald-700"
            : "bg-ink text-white hover:bg-black"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M6 0l1.76 3.57 3.94.57-2.85 2.78.67 3.93L6 9.02 2.48 10.85l.67-3.93L.3 4.14l3.94-.57L6 0z" />
    </svg>
  );
}
