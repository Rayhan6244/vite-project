export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-line border-t-brand-pink" />
      <p className="text-sm text-muted">Loading technologies…</p>
    </div>
  );
}
