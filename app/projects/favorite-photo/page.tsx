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
        {/* 상단 */}
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
              최애의 포토
            </h1>

            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300">
              소중한 순간을 사진으로 기록하고 공유할 수 있는 감성 기반 포토카드
              플랫폼입니다. 포인트 기반 거래와 카드 교환 기능을 통해 사용자 간
              상호작용을 강화했습니다.
            </p>

            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">
                Next.js
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">
                React
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">
                React Query
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">
                Prisma
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">
                PostgreSQL
              </span>
            </div>
          </header>

          <div className="mt-5 space-y-4 text-sm md:text-base text-neutral-700 dark:text-neutral-200">
            {/* 목표 */}
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                목표
              </h2>
              <p>
                사용자 간 포토카드 거래 및 교환을 중심으로, 실시간 상호작용과
                필터 기반 탐색 경험을 제공하는 플랫폼을 구현하는 것을 목표로
                했습니다.
              </p>
            </section>

            {/* 역할 */}
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                역할
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>FE</strong>: 포토카드 목록 UI, 필터/정렬, 거래 및 교환
                  UI 구현
                </li>
                <li>
                  <strong>BE</strong>: 필터링 API, 구매 및 교환 요청 API 구현
                </li>
              </ul>
            </section>

            {/* 기술 스택 */}
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                기술 스택
              </h2>

              <div className="grid gap-3 md:grid-cols-2 mt-2">
                <div className="rounded-2xl border p-4">
                  <p className="text-xs font-semibold uppercase text-neutral-500">
                    Frontend
                  </p>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>React, Next.js</li>
                    <li>React Query</li>
                    <li>Tailwind CSS</li>
                    <li>React Router</li>
                  </ul>
                </div>

                <div className="rounded-2xl border p-4">
                  <p className="text-xs font-semibold uppercase text-neutral-500">
                    Backend
                  </p>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Node.js, Express</li>
                    <li>Prisma, PostgreSQL</li>
                    <li>Render, Vercel</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 주요 구현 기능 */}
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                주요 구현 기능
              </h2>

              <div className="space-y-3 mt-2">
                {/* 필터 */}
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">1) 포토카드 필터링 시스템</p>

                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                    다중 조건(등급, 장르, 판매 여부, 판매 타입)에 따른 필터링
                    UI와 API 연동 로직을 구현하고, 선택된 조건에 따라 실시간으로
                    결과 개수를 반영하도록 구성했습니다.
                  </p>

                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                    <li>
                      필터 조건을 문자열/배열로 유연하게 변환하여 API 쿼리 구성
                    </li>
                    <li>
                      React Hook 기반 커스텀 훅(useFilterSheet)으로 상태/로직
                      분리
                    </li>
                    <li>필터 변경 시 즉시 결과 개수 업데이트 (UX 개선)</li>
                    <li>URL 쿼리 파라미터와 연동하여 상태 유지 및 공유 가능</li>
                    <li>모바일 BottomSheet UI + 반응형 처리</li>
                  </ul>
                </div>

                {/* 거래/교환 */}
                <div className="rounded-2xl border p-4">
                  <p className="font-semibold">2) 포토카드 거래 및 교환 기능</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>포인트 기반 구매 기능 구현</li>
                    <li>포토카드 교환 요청 및 취소 API 구현</li>
                    <li>거래 상태에 따른 UI 분기 처리</li>
                  </ul>
                </div>

                {/* UI */}
                <div className="rounded-2xl border p-4">
                  <p className="font-semibold">3) 구매/교환 통합 UI</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>구매와 교환 흐름을 하나의 UI로 통합</li>
                    <li>상태 기반 버튼 제어 및 사용자 피드백 제공</li>
                    <li>공통 컴포넌트 설계로 재사용성 향상</li>
                  </ul>
                </div>
              </div>

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
        </section>
      </div>
    </main>
  );
}
