import { ThemeToggle } from "@/components/ThemeToggle";
import { ProfileMain } from "@/components/ProfileMain";
import { ProfileAside } from "@/components/ProfileAside";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 text-foreground flex items-center justify-center px-5 pt-20 pb-12 sm:px-6 sm:py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <ThemeToggle />
      <section className="w-full max-w-5xl sm:rounded-[32px] sm:border sm:border-slate-200 sm:bg-white/90 sm:backdrop-blur-xl sm:shadow-xl overflow-hidden sm:dark:border-white/10 sm:dark:bg-slate-950/80 sm:dark:shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
        <div className="hidden sm:block h-2 bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />

        <div className="p-0 sm:p-8 md:p-10 lg:p-12 grid gap-12 md:grid-cols-[1.35fr,1fr] items-start">
          {/* LEFT: main profile */}
          <ProfileMain />

          {/* RIGHT: meta & links */}
          <ProfileAside />
        </div>
      </section>
    </main>
  );
}

