import Link from "next/link";

type Project = {
  slug: string;
  name: string;
  short: string;
  tags: string[];
  url?: string;
};

function formatUrlLabel(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}

const PROJECTS: Project[] = [
  {
    slug: "snack",
    name: "Snack Site",
    short: "기업의 간식 구매·관리 프로세스를 디지털화해 예산 집행과 자원 운영의 효율성을 높이는 사내 복지 관리 서비스",
    tags: ["Next.js", "React", "Tailwind CSS", "AWS"],
    url: "https://5nack.site",
  },
  {
    slug: "mbn-marathon",
    name: "MBN 거제마라톤",
    short: "마라톤 대회 참가자의 신청부터 관리자 운영까지 전 과정을 디지털화한 대회 운영 웹 서비스",
    tags: ["WordPress", "PHP", "JavaScript", "Forminator"],
    url: "https://marathon-mbngj.com/",
  },
  {
    slug: "pandamarket",
    name: "Pandamarket",
    short: "재사용 가능한 UI 컴포넌트와 토큰 설계",
    tags: ["Design System", "Accessibility", "Storybook"],
  },
  {
    slug: "favorite-photo",
    name: "FavoritePhoto",
    short: "포인트 기반 포토카드 거래·교환 플랫폼",
    tags: ["Next.js", "React", "Vercel"],
    url: "https://favorite-photo-psi.vercel.app/",
  },
  {
    slug: "nexus",
    name: "Nexus",
    short: "Slack 실시간 채팅과 Linear 태스크 관리를 하나로 통합한 팀 협업 대시보드",
    tags: ["Next.js 16", "NestJS", "Socket.io", "PostgreSQL"],
  },
];

export function ProjectsSection() {
  return (
    <section className="space-y-4">
      <header className="flex items-baseline justify-between gap-3">
        <h2 className="text-base md:text-lg font-semibold text-neutral-800 dark:text-neutral-100">
          Projects
        </h2>
        <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
          SELECTED WORKS
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <div
            key={project.slug}
            className="group rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-sky-300 dark:border-slate-700/80 dark:bg-slate-900/60 dark:hover:border-sky-500/60"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1.5">
                <h3 className="text-sm md:text-base font-semibold text-neutral-800 dark:text-neutral-100">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    {project.name}
                  </Link>
                </h3>
                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
                  {project.short}
                </p>
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="mt-0.5 inline-flex h-7 items-center rounded-full border border-slate-200 bg-white/70 px-2.5 text-[11px] font-medium text-slate-600 shadow-sm outline-none transition-colors group-hover:border-sky-300 group-hover:text-sky-700 focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:group-hover:border-sky-500 dark:group-hover:text-sky-300"
              >
                View
              </Link>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-2 py-1 text-[11px] text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.url ? (
              <div className="mt-3">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 text-[11px] font-medium text-slate-600 shadow-sm outline-none transition-colors group-hover:border-sky-300 group-hover:text-sky-700 focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:group-hover:border-sky-500 dark:group-hover:text-sky-300"
                >
                  {formatUrlLabel(project.url)}
                </Link>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

