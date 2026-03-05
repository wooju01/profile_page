export function ProfileAside() {
  return (
    <aside className="space-y-7 rounded-2xl border border-slate-200 bg-slate-50/90 p-6 md:p-7 dark:border-white/5 dark:bg-slate-900/70">
      <div className="space-y-3.5">
        <h3 className="text-base md:text-lg font-semibold text-neutral-800 dark:text-neutral-100">Profile</h3>
        <dl className="space-y-2.5 text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
          <div className="flex items-start justify-between gap-4">
            <dt className="text-neutral-500 dark:text-neutral-400">이름</dt>
            <dd className="font-medium text-neutral-800 dark:text-neutral-100">우주</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-neutral-500 dark:text-neutral-400">역할</dt>
            <dd className="font-medium text-neutral-800 dark:text-neutral-100">Frontend Developer</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-neutral-500 dark:text-neutral-400">기반</dt>
            <dd className="text-right text-neutral-800 dark:text-neutral-100">
              서울 · Remote
              <br />
              Korean / English
            </dd>
          </div>
        </dl>
      </div>

      <div className="space-y-3.5">
        <h3 className="text-base md:text-lg font-semibold text-neutral-800 dark:text-neutral-100">Links</h3>
        <div className="space-y-2.5 text-xs md:text-sm">
          <a
            href="https://github.com/wooju01"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl border border-sky-300 bg-sky-50 px-3 py-2 text-sky-800 hover:bg-sky-100 transition-colors dark:border-sky-500/40 dark:bg-sky-500/10 dark:text-sky-100 dark:hover:bg-sky-500/20"
          >
            <span>GitHub</span>
            <span className="text-[11px] text-sky-600 dark:text-sky-200/80">github.com/wooju01</span>
          </a>
          <a
            href="mailto:example@email.com"
            className="flex items-center justify-between rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-emerald-800 hover:bg-emerald-100 transition-colors dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-100 dark:hover:bg-emerald-500/20"
          >
            <span>Email</span>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-200/80">example@email.com</span>
          </a>
        </div>
      </div>

      <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-white/5">
        <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          STACK
        </p>
        <div className="flex flex-wrap gap-1.5 text-[11px] md:text-xs text-neutral-600 dark:text-neutral-300">
          <span className="rounded-full bg-slate-200/90 px-2.5 py-1.5 dark:bg-slate-800/80">Next.js</span>
          <span className="rounded-full bg-slate-200/90 px-2.5 py-1.5 dark:bg-slate-800/80">React</span>
          <span className="rounded-full bg-slate-200/90 px-2.5 py-1.5 dark:bg-slate-800/80">TypeScript</span>
          <span className="rounded-full bg-slate-200/90 px-2.5 py-1.5 dark:bg-slate-800/80">Tailwind CSS</span>
          <span className="rounded-full bg-slate-200/90 px-2.5 py-1.5 dark:bg-slate-800/80">Git · GitHub</span>
        </div>
      </div>
    </aside>
  );
}

