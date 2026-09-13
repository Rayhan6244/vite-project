export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-2xl border border-line bg-panel p-5 xl:sticky xl:top-24">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-base font-semibold text-ink">
            Your Stack
          </h3>
          <p className="mt-0.5 text-xs text-muted" aria-live="polite">
            {stack.length} Technology Selected
          </p>
        </div>
        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs font-medium text-rose-600 transition hover:text-rose-700"
          >
            Remove All
          </button>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-3">
        {stack.length === 0 ? (
          <div className="rounded-xl border border-dashed border-line px-4 py-10 text-center">
            <p className="text-sm text-muted">
              No technologies selected yet. Add one from the grid to start
              building your stack.
            </p>
          </div>
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-line bg-white px-3 py-2.5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink/5">
                <img
                  src={tech.icon}
                  alt=""
                  className="h-4 w-4"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">
                  {tech.name}
                </p>
                <p className="truncate text-xs text-muted">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name} from stack`}
                className="grid h-6 w-6 shrink-0 place-items-center rounded-md text-muted transition hover:bg-rose-50 hover:text-rose-600"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}
