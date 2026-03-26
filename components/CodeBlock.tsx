"use client";

type CodeBlockProps = {
  /** 코드 문자열 */
  code: string;
  /** 언어 라벨 (예: PHP, JavaScript) */
  language?: string;
  /** 블록 제목 (예: "신청자 삭제 처리") */
  title?: string;
  /** 이 코드를 왜 사용했는지 설명 (포트폴리오용) */
  why?: string;
};

export function CodeBlock({ code, language = "text", title, why }: CodeBlockProps) {
  return (
    <div className="space-y-2">
      {(title || language) && (
        <div className="flex items-center gap-2 text-[12px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          {title && <span className="font-medium">{title}</span>}
          {language && (
            <span className="rounded bg-slate-200/80 px-1.5 py-0.5 dark:bg-slate-700/80">
              {language}
            </span>
          )}
        </div>
      )}
      <pre className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-900 px-4 py-3 text-sm leading-relaxed text-slate-100 dark:border-slate-700">
        <code>{code}</code>
      </pre>
      {why && (
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          <span className="font-medium text-neutral-700 dark:text-neutral-300">왜 사용했는지:</span>{" "}
          {why}
        </p>
      )}
    </div>
  );
}
