import { ThemeToggle } from "@/components/ThemeToggle";
import { ProfileMain } from "@/components/ProfileMain";
import { ProfileAside } from "@/components/ProfileAside";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 text-foreground flex items-center justify-center px-6 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <ThemeToggle />
      <section className="w-full max-w-5xl rounded-[32px] border border-slate-200 bg-white/90 backdrop-blur-xl shadow-xl overflow-hidden dark:border-white/10 dark:bg-slate-950/80 dark:shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
        <div className="h-2 bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />

        <div className="p-8 md:p-10 lg:p-12 grid gap-12 md:grid-cols-[1.35fr,1fr] items-start">
          {/* LEFT: main profile */}
          <ProfileMain />

          {/* RIGHT: meta & links */}
          <ProfileAside />
        </div>
      </section>
    </main>
  );
}

