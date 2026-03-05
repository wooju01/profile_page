// app/projects/portfolio/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio Site | Wooju",
  description: "개인 포트폴리오와 소개를 담은 웹사이트 프로젝트",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 px-6 py-10 text-foreground dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        {/* 상단 뒤로가기 */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
          >
            <span className="text-sm">←</span>
            <span>프로필로 돌아가기</span>
          </Link>
          <span className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
            PROJECT
          </span>
        </div>

        {/* 메인 카드 */}
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-lg dark:border-white/10 dark:bg-slate-950/90">
          <header className="space-y-2 border-b border-slate-100 pb-5 dark:border-slate-800">
            <h1 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
              Portfolio Site
            </h1>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300">
              개인 포트폴리오와 소개를 담은 단일 페이지 웹사이트로, 라이트/다크 모드와
              반응형 레이아웃을 중심으로 설계했습니다.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                Next.js
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                React
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                Tailwind CSS
              </span>
            </div>
          </header>

          <div className="mt-5 space-y-4 text-sm md:text-base text-neutral-700 dark:text-neutral-200">
            <section className="space-y-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                목표
              </h2>
              <p>
                “나를 소개하는 한 장짜리 카드” 같은 느낌을 유지하면서도,
                읽기 좋은 타이포그래피와 선명한 정보 구조를 만드는 것이 목표였습니다.
              </p>
            </section>

            <section className="space-y-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                역할
              </h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>레이아웃, 다크모드 토글, 카드 디자인 전체 설계</li>
                <li>재사용 가능한 컴포넌트 분리 및 타입 정의</li>
                <li>접근성과 반응형 뷰포트 대응</li>
              </ul>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}