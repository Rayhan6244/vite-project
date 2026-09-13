import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-surface/85 backdrop-blur-md">
      <nav className="mx-auto grid max-w-7xl grid-cols-3 items-center px-5 py-4 md:flex md:justify-between md:px-8">
        {/* Mobile: hamburger (left only, hidden on desktop) */}
        <button
          className="grid h-9 w-9 place-items-center justify-self-start rounded-lg border border-line text-slate-200 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {open ? (
              <path
                d="M2 2L16 16M16 2L2 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M1 4H17M1 9H17M1 14H17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        {/* Brand: left on desktop, centered on mobile */}
        <a
          href="#home"
          className="col-start-2 flex items-center justify-self-center gap-2.5 md:col-auto md:justify-self-auto md:mr-auto"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient font-display text-sm font-bold text-white">
            DS
          </span>
          <span className="font-display text-lg font-bold text-white">
            Dev <span className="text-gradient">Stack</span>
          </span>
        </a>

        {/* Center: nav links (desktop only) */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-muted transition hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons (always visible) */}
        <div className="flex items-center justify-self-end gap-2.5 md:gap-5">
          <button className="hidden text-sm font-medium text-slate-200 transition hover:text-white md:block">
            Sign In
          </button>
          <button className="text-xs font-medium text-slate-200 transition hover:text-white md:hidden">
            Sign In
          </button>
          <button className="rounded-full bg-brand-gradient px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-brand-pink/20 transition hover:brightness-110 md:px-5 md:py-2 md:text-sm">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-line/70 bg-surface px-5 pb-5 pt-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-sm font-medium text-slate-200 hover:bg-panel"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-3 border-t border-line/70 pt-4">
            <button className="flex-1 rounded-full border border-line py-2 text-sm font-medium text-slate-200">
              Sign In
            </button>
            <button className="flex-1 rounded-full bg-brand-gradient py-2 text-sm font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
