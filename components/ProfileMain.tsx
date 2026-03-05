export function ProfileMain() {
  return (
    <div className="space-y-7">
      <div className="flex items-center gap-6">
        <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-3xl bg-gradient-to-br from-sky-500 via-emerald-400 to-violet-500 p-[3px] shadow-xl shadow-sky-200/60 dark:shadow-sky-900/60">
          <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white text-2xl md:text-3xl font-semibold text-slate-700 dark:bg-slate-950 dark:text-slate-50">
            WJ
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-xs md:text-sm font-medium uppercase tracking-[0.26em] text-sky-600 dark:text-sky-400/80">
            PORTFOLIO
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-sky-500 via-emerald-500 to-cyan-600 bg-clip-text text-transparent dark:from-sky-300 dark:via-emerald-300 dark:to-cyan-300">
              Wooju
            </span>
            <span className="text-neutral-800 dark:text-neutral-100"> · Frontend Developer</span>
          </h1>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
            React / Next.js 기반의 웹 프론트엔드를 설계하고 구현합니다.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5">
        <span className="px-3.5 py-1.5 text-xs md:text-sm rounded-full bg-sky-100 text-sky-800 border border-sky-200 dark:bg-sky-500/10 dark:text-sky-200 dark:border-sky-500/30">
          React · Next.js
        </span>
        <span className="px-3.5 py-1.5 text-xs md:text-sm rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-200 dark:border-emerald-500/30">
          TypeScript
        </span>
        <span className="px-3.5 py-1.5 text-xs md:text-sm rounded-full bg-violet-100 text-violet-800 border border-violet-200 dark:bg-violet-500/10 dark:text-violet-200 dark:border-violet-500/30">
          UI / UX
        </span>
        <span className="px-3.5 py-1.5 text-xs md:text-sm rounded-full bg-slate-100 text-slate-700 border border-slate-300 dark:bg-slate-500/20 dark:text-slate-200 dark:border-slate-400/40">
          Clean Code
        </span>
      </div>

      <div className="space-y-3.5">
        <h2 className="text-base md:text-lg font-semibold text-neutral-800 dark:text-neutral-100">About</h2>
        <p className="text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
          사용자 경험을 최우선으로 생각하며, 일관된 디자인 시스템과 재사용 가능한 컴포넌트를 설계하는 것을
          좋아합니다. 작은 디테일에서 오는 완성도를 중요하게 보고, 읽기 좋은 코드와 명확한 커뮤니케이션을
          지향합니다.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 text-xs md:text-sm">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 space-y-2.5 dark:border-white/5 dark:bg-slate-900/50">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Focus
          </p>
          <ul className="space-y-1.5 text-neutral-700 dark:text-neutral-200">
            <li>· 인터랙션과 모션이 자연스러운 UI</li>
            <li>· 유지보수하기 좋은 컴포넌트 구조</li>
            <li>· 퍼포먼스와 접근성 고려</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 space-y-2.5 dark:border-white/5 dark:bg-slate-900/50">
          <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Now
          </p>
          <ul className="space-y-1.5 text-neutral-700 dark:text-neutral-200">
            <li>· Next.js + App Router</li>
            <li>· Tailwind CSS · Radix UI</li>
            <li>· DX를 높이는 개발 환경</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

