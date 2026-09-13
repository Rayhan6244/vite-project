export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-line/60"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-brand-gradient opacity-[0.12] blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="text-gradient">Development Stack</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-pink/25 transition hover:brightness-110"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <IsometricStackArt />
        </div>
      </div>
    </section>
  );
}

function IsometricStackArt() {
  return (
    <svg
      viewBox="0 0 420 380"
      className="w-full drop-shadow-[0_20px_60px_rgba(124,58,237,0.25)]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF7A45" />
          <stop offset="100%" stopColor="#FF3D8A" />
        </linearGradient>
        <linearGradient id="cubeLeft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
        <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF3D8A" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>

      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(0 ${i * 78})`} opacity={1 - i * 0.12}>
          <polygon points="210,60 320,105 210,150 100,105" fill="url(#cubeTop)" />
          <polygon points="100,105 210,150 210,230 100,185" fill="url(#cubeLeft)" />
          <polygon points="320,105 210,150 210,230 320,185" fill="url(#cubeRight)" />
        </g>
      ))}

      <g stroke="#FF7A45" strokeWidth="1.5" opacity="0.5">
        <line x1="210" y1="20" x2="210" y2="60" />
        <line x1="60" y1="140" x2="100" y2="150" />
        <line x1="360" y1="140" x2="320" y2="150" />
      </g>
      <circle cx="210" cy="14" r="6" fill="#FF7A45" />
      <circle cx="52" cy="144" r="5" fill="#7C3AED" />
      <circle cx="368" cy="144" r="5" fill="#FF3D8A" />
    </svg>
  );
}
