const LINK_GROUPS = [
  {
    title: "Product",
    links: ["Home", "Technologies", "Projects"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient font-display text-xs font-bold text-white">
              DS
            </span>
            <span className="font-display text-base font-bold text-ink">
              Dev Stack
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Compare technologies and pick the tools that fit your next
            project, from frontend to deployment.
          </p>
          <div className="mt-5 flex items-center gap-4">
            <SocialLink label="GitHub">
              <path d="M8 0C3.58 0 0 3.66 0 8.18c0 3.62 2.29 6.69 5.47 7.77.4.08.55-.18.55-.4 0-.2-.01-.86-.01-1.56-2.01.38-2.53-.5-2.69-.96-.09-.24-.48-.96-.82-1.15-.28-.15-.68-.53-.01-.54.63-.01 1.08.59 1.23.83.72 1.22 1.87.88 2.33.67.07-.53.28-.88.51-1.08-1.78-.2-3.64-.9-3.64-3.98 0-.88.31-1.6.82-2.16-.08-.2-.36-1.03.08-2.14 0 0 .67-.22 2.2.83a7.4 7.4 0 0 1 4 0c1.53-1.06 2.2-.83 2.2-.83.44 1.11.16 1.94.08 2.14.51.56.82 1.27.82 2.16 0 3.09-1.87 3.78-3.65 3.98.29.25.54.74.54 1.5 0 1.08-.01 1.95-.01 2.22 0 .22.15.48.55.4A8.18 8.18 0 0 0 16 8.18C16 3.66 12.42 0 8 0z" />
            </SocialLink>
            <SocialLink label="Twitter">
              <path d="M16 3.04c-.59.27-1.22.44-1.88.53a3.28 3.28 0 0 0 1.44-1.82c-.63.38-1.34.65-2.08.8A3.27 3.27 0 0 0 7.86 5.5c0 .26.03.5.08.74A9.28 9.28 0 0 1 1.11 2.9a3.28 3.28 0 0 0 1.01 4.37c-.54-.02-1.05-.17-1.5-.41v.04a3.27 3.27 0 0 0 2.62 3.21c-.48.13-1 .16-1.5.06a3.28 3.28 0 0 0 3.06 2.28A6.57 6.57 0 0 1 0 13.83a9.27 9.27 0 0 0 5.03 1.47c6.03 0 9.33-5 9.33-9.33 0-.14 0-.28-.01-.42A6.7 6.7 0 0 0 16 3.04z" />
            </SocialLink>
            <SocialLink label="LinkedIn">
              <path d="M3.58 5.44H.36V16h3.22V5.44zM1.97 4.03A1.87 1.87 0 1 1 2 .3a1.87 1.87 0 0 1-.03 3.73zM16 16h-3.22v-5.6c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95V16H5.57V5.44h3.09v1.44h.04c.43-.82 1.48-1.68 3.04-1.68 3.25 0 3.85 2.14 3.85 4.92V16z" />
            </SocialLink>
          </div>
        </div>

        {LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h4 className="font-display text-sm font-semibold text-ink">
              {group.title}
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {group.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted transition hover:text-ink"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-4 px-5 py-6 text-xs text-muted md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-ink">
              Privacy
            </a>
            <a href="#" className="transition hover:text-ink">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted transition hover:border-slate-400 hover:text-ink"
    >
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
