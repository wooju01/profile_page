import { ProjectsSection } from "@/components/ProjectsSection";

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
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight">
            <span className="block bg-gradient-to-r from-sky-500 via-emerald-500 to-cyan-600 bg-clip-text text-transparent dark:from-sky-300 dark:via-emerald-300 dark:to-cyan-300">
              Wooju
            </span>

            <span className="block text-lg md:text-xl text-neutral-800 dark:text-neutral-100">
            Frontend Developer · Full-Stack
            </span>
          </h1>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
            React / Next.js 기반의 웹 프론트엔드를 설계하고 구현합니다.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5">
        <span className="px-3.5 py-1.5 text-xs md:text-sm rounded-full bg-sky-100 text-sky-800 border border-sky-200">
          React · Next.js · Vite
        </span>

        <span className="px-3.5 py-1.5 text-xs md:text-sm rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
          TypeScript · Zod
        </span>

        <span className="px-3.5 py-1.5 text-xs md:text-sm rounded-full bg-violet-100 text-violet-800 border border-violet-200">
          Zustand · React Query
        </span>

        <span className="px-3.5 py-1.5 text-xs md:text-sm rounded-full bg-orange-100 text-orange-800 border border-orange-200">
          Node.js · Express
        </span>

        <span className="px-3.5 py-1.5 text-xs md:text-sm rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">
          PostgreSQL · Prisma
        </span>

        <span className="px-3.5 py-1.5 text-xs md:text-sm rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Tailwind · SCSS · CSS Modules
        </span>
      </div>

      <div className="space-y-3.5">
        <h2 className="text-base md:text-xl font-semibold text-neutral-800 dark:text-neutral-100">
          About
        </h2>
        <p className="text-sm md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          사용자 경험을 최우선으로 생각하며, 화면에 보이는 기능 하나도 어떤
          의도를 위해 존재하는지 맥락을 먼저 이해하고 개발합니다.컴포넌트 구조와
          상태 흐름을 설계할 때 단순히 동작하는 코드가 아니라,서비스 전체 흐름
          속에서 데이터가 어떻게 이동하고 어떤 의미를 가지는지까지
          고려합니다.특히 View Model과 데이터 구조를 기준으로 UI와 로직을
          연결하여 유지보수성과 확장성을 높이는 개발 방식을 지향합니다.기획자,
          백엔드, 디자이너와의 협업 과정에서 서비스가 전달해야 할 본질적인
          가치가 무엇인지 고민하며, 단순한 기능 구현을 넘어 사용자에게 의도와
          의미가 자연스럽게 전달되는 인터페이스를 만드는 개발자입니다.
        </p>
      </div>

      <ProjectsSection />

      <div className="grid grid-cols-2 gap-5 text-xs md:text-sm">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 space-y-2.5 dark:border-white/5 dark:bg-slate-900/50">
          <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
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
