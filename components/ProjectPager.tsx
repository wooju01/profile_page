"use client";

import { useState, type ReactNode } from "react";

type Page = {
  label: string;
  content: ReactNode;
};

export function ProjectPager({ pages }: { pages: Page[] }) {
  const [index, setIndex] = useState(0);
  const page = pages[index];

  return (
    <div className="space-y-5">
      <nav className="flex flex-wrap gap-1.5 text-xs">
        {pages.map((p, i) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setIndex(i)}
            className={
              i === index
                ? "rounded-full border border-sky-400 bg-sky-50 px-3 py-1.5 font-medium text-sky-700 shadow-sm dark:border-sky-500 dark:bg-sky-500/10 dark:text-sky-300"
                : "rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 font-medium text-slate-600 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-300"
            }
          >
            {i + 1}. {p.label}
          </button>
        ))}
      </nav>

      <div className="text-[16px] md:text-[17px] text-neutral-700 dark:text-neutral-200">
        {page.content}
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:border-sky-300 hover:text-sky-700 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-300"
        >
          <span aria-hidden>←</span>
          <span>이전</span>
        </button>
        <span className="text-xs text-neutral-400 dark:text-neutral-500">
          {index + 1} / {pages.length}
        </span>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(pages.length - 1, i + 1))}
          disabled={index === pages.length - 1}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:border-sky-300 hover:text-sky-700 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-300"
        >
          <span>다음</span>
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}
