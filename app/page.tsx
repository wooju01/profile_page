
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-foreground flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-4xl rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.7)] overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />

        <div className="p-6 md:p-9 lg:p-10 grid gap-10 md:grid-cols-[1.3fr,1fr] items-start">
          {/* LEFT: main profile */}
          <div className="space-y-7">
            <div className="flex items-center gap-5">
              <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br from-sky-500 via-emerald-400 to-violet-500 p-[2px] shadow-lg shadow-sky-900/50">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 text-xl md:text-2xl font-semibold text-slate-50">
                  WJ
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-400/80">
                  PORTFOLIO
                </p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                  <span className="bg-gradient-to-r from-sky-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                    Wooju
                  </span>
                  <span className="text-neutral-100"> · Frontend Developer</span>
                </h1>
                <p className="text-xs md:text-sm text-neutral-400">
                  React / Next.js 기반의 웹 프론트엔드를 설계하고 구현합니다.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs rounded-full bg-sky-500/10 text-sky-200 border border-sky-500/30">
                React · Next.js
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-emerald-500/10 text-emerald-200 border border-emerald-500/30">
                TypeScript
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-violet-500/10 text-violet-200 border border-violet-500/30">
                UI / UX
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-slate-500/20 text-slate-200 border border-slate-400/40">
                Clean Code
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-neutral-100">About</h2>
              <p className="text-sm leading-relaxed text-neutral-300">
                사용자 경험을 최우선으로 생각하며, 일관된 디자인 시스템과 재사용 가능한 컴포넌트를
                설계하는 것을 좋아합니다. 작은 디테일에서 오는 완성도를 중요하게 보고, 읽기 좋은
                코드와 명확한 커뮤니케이션을 지향합니다.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-4 space-y-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                  Focus
                </p>
                <ul className="space-y-1.5 text-neutral-200">
                  <li>· 인터랙션과 모션이 자연스러운 UI</li>
                  <li>· 유지보수하기 좋은 컴포넌트 구조</li>
                  <li>· 퍼포먼스와 접근성 고려</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-4 space-y-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                  Now
                </p>
                <ul className="space-y-1.5 text-neutral-200">
                  <li>· Next.js + App Router</li>
                  <li>· Tailwind CSS · Radix UI</li>
                  <li>· DX를 높이는 개발 환경</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT: meta & links */}
          <aside className="space-y-6 rounded-2xl border border-white/5 bg-slate-900/70 p-5 md:p-6">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-neutral-100">Profile</h3>
              <dl className="space-y-2 text-xs md:text-sm text-neutral-300">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-neutral-400">이름</dt>
                  <dd className="font-medium text-neutral-100">우주</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-neutral-400">역할</dt>
                  <dd className="font-medium text-neutral-100">Frontend Developer</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-neutral-400">기반</dt>
                  <dd className="text-right">
                    서울 · Remote
                    <br />
                    Korean / English
                  </dd>
                </div>
              </dl>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-neutral-100">Links</h3>
              <div className="space-y-2 text-xs md:text-sm">
                <a
                  href="https://github.com/wooju01"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-sky-100 hover:bg-sky-500/20 transition-colors"
                >
                  <span>GitHub</span>
                  <span className="text-[11px] text-sky-200/80">github.com/wooju01</span>
                </a>
                <a
                  href="mailto:example@email.com"
                  className="flex items-center justify-between rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-emerald-100 hover:bg-emerald-500/20 transition-colors"
                >
                  <span>Email</span>
                  <span className="text-[11px] text-emerald-200/80">example@email.com</span>
                </a>
              </div>
            </div>

            <div className="space-y-2 pt-1 border-t border-white/5">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                STACK
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-neutral-300">
                <span className="rounded-full bg-slate-800/80 px-2 py-1">Next.js</span>
                <span className="rounded-full bg-slate-800/80 px-2 py-1">React</span>
                <span className="rounded-full bg-slate-800/80 px-2 py-1">TypeScript</span>
                <span className="rounded-full bg-slate-800/80 px-2 py-1">Tailwind CSS</span>
                <span className="rounded-full bg-slate-800/80 px-2 py-1">Git · GitHub</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
