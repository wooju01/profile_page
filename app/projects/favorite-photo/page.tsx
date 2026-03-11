import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FavoritePhoto | Wooju",
  description: "포인트 기반 포토카드 거래·교환 플랫폼",
};

export default function FavoritePhotoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 px-6 py-10 text-foreground dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
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

        <section className="rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-lg dark:border-white/10 dark:bg-slate-950/90">
          <header className="space-y-2 border-b border-slate-100 pb-5 dark:border-slate-800">
            <h1 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
              FavoritePhoto
            </h1>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300">
              포인트로 안전하게 포토카드를 거래하고, 교환 제안부터 완료까지 알림으로
              빠르게 흐름을 이어가는 거래 플랫폼입니다.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                Next.js
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                React
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                Vercel
              </span>
            </div>
          </header>

          <div className="mt-5 space-y-4 text-sm md:text-base text-neutral-700 dark:text-neutral-200">
            <section className="space-y-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                링크
              </h2>
              <Link
                href="https://favorite-photo-psi.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
              >
                favorite-photo-psi.vercel.app 열기
              </Link>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

