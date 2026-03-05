import Link from "next/link";

type Project = {
  slug: string;
  name: string;
  short: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    slug: "portfolio",
    name: "Portfolio Site",
    short: "개인 포트폴리오와 소개를 담은 웹사이트",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    slug: "dashboard",
    name: "Analytics Dashboard",
    short: "데이터를 시각화하는 대시보드 인터페이스",
    tags: ["Charts", "UX", "Performance"],
  },
  {
    slug: "design-system",
    name: "Design System",
    short: "재사용 가능한 UI 컴포넌트와 토큰 설계",
    tags: ["Design System", "Accessibility", "Storybook"],
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
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-sky-300 dark:border-slate-700/80 dark:bg-slate-900/60 dark:hover:border-sky-500/60"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1.5">
                <h3 className="text-sm md:text-base font-semibold text-neutral-800 dark:text-neutral-100">
                  {project.name}
                </h3>
                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
                  {project.short}
                </p>
              </div>
              <span className="mt-0.5 inline-flex h-7 items-center rounded-full border border-slate-200 bg-white/70 px-2.5 text-[11px] font-medium text-slate-600 shadow-sm group-hover:border-sky-300 group-hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:group-hover:border-sky-500 dark:group-hover:text-sky-300">
                View
              </span>
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
          </Link>
        ))}
      </div>
    </section>
  );
}

