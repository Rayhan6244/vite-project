import heroBanner from "../assets/hero-banner.webp";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-line/60"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-brand-gradient opacity-[0.18] blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
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
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-slate-400 hover:bg-panel"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <img
            src={heroBanner}
            alt="Isometric illustration of a layered technology stack"
            className="w-full drop-shadow-[0_20px_60px_rgba(124,58,237,0.25)]"
            width={900}
            height={825}
          />
        </div>
      </div>
    </section>
  );
}
