import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nexus | Wooju",
  description:
    "Slack 실시간 채팅과 Linear 태스크 관리를 하나로 통합한 팀 협업 대시보드",
};

export default function NexusPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 px-8 py-12 text-foreground dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        {/* 상단 뒤로가기 */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
          >
            <span className="text-sm">←</span>
            <span>프로필로 돌아가기</span>
          </Link>
          <span className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
            PROJECT
          </span>
        </div>

        {/* 메인 카드 */}
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg dark:border-white/10 dark:bg-slate-950/90">
          <header className="space-y-2 border-b border-slate-100 pb-6 dark:border-slate-800">
            <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
              Nexus
            </h1>
            <p className="text-[16px] md:text-[18px] text-neutral-600 dark:text-neutral-300">
              Slack의 실시간 채팅과 Linear의 태스크 관리를 하나의 화면에 통합한
              팀 협업 대시보드입니다. 백엔드에서는{" "}
              <strong>NestJS 기반 REST API + WebSocket</strong>을, 프론트엔드에서는{" "}
              <strong>채팅·칸반·대시보드</strong>를 구현했습니다.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {[
                "Next.js 16",
                "React 19",
                "TypeScript",
                "NestJS",
                "Prisma",
                "PostgreSQL",
                "Socket.io",
                "Supabase",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              <a
                href="https://github.com/wooju01/Nexus-FE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
              >
                <span>Frontend 저장소</span>
                <span aria-hidden>↗</span>
              </a>
              <a
                href="https://github.com/wooju01/Nexus-BE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
              >
                <span>Backend 저장소</span>
                <span aria-hidden>↗</span>
              </a>
            </div>
          </header>

          <div className="mt-6 space-y-5 text-[16px] md:text-[17px] text-neutral-700 dark:text-neutral-200">
            <section className="space-y-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                목표
              </h2>
              <p>
                맥락 전환 없이 대화·작업·알림을 단일 허브에서 처리하는 것이
                목표였습니다. 협업 도구가 분산될수록 생산성이 떨어진다는 문제를
                해결하기 위해, 채팅·태스크·알림을 하나의 대시보드로 통합했습니다.
              </p>
            </section>

            <section className="space-y-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                역할
              </h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>BE</strong>: NestJS + Prisma + PostgreSQL 기반 REST API
                  전체 설계·구현, JWT 인증/인가, WebSocket 실시간 이벤트
                  (채널·DM·스레드), Supabase Storage 이미지 업로드, 태스크
                  CRUD(담당자·라벨·우선순위), 알림 생성·읽음 처리
                </li>
                <li>
                  <strong>FE</strong>: Next.js 16 App Router + React 19 기반
                  채널·DM 실시간 채팅, 스레드 패널, Ctrl+V 이미지 붙여넣기
                  업로드, 홈 대시보드 KPI 카드, 인박스, 칸반 보드, 캘린더, My
                  Week, 글로벌 사이드바
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                기술 스택
              </h2>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                    Frontend
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Next.js 16.2 (App Router), React 19, TypeScript 5</li>
                    <li>Tailwind CSS v4</li>
                    <li>ESLint 9</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                    Backend
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>NestJS, TypeScript</li>
                    <li>Prisma, PostgreSQL</li>
                    <li>Supabase Storage</li>
                    <li>Socket.io (WebSocket)</li>
                    <li>JWT (Access / Refresh Token)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                주요 구현 기능
              </h2>

              <div className="space-y-3">
                {/* 1) 실시간 채팅 — WebSocket Presence 관리 */}
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">1) 실시간 채팅 — 멀티 탭/디바이스 Presence 관리 (BE)</p>
                  <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                    Socket.io 기반 단일 게이트웨이로 채널·DM·스레드 이벤트를
                    처리했습니다. 같은 유저가 여러 탭·기기에서 동시 접속할 수
                    있어, 소켓 하나가 끊긴다고 바로 오프라인 처리하면 다른
                    탭은 연결이 남아 있는데도 상태가 어긋나는 문제가 있어
                    userId 단위로 소켓을 묶어 관리했습니다.
                  </p>

                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-neutral-500">
                        BE — userId → socketId Set 매핑
                      </p>
                      <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                        {`private readonly userSockets = new Map<string, Set<string>>();

async handleConnection(client: Socket) {
  const payload = this.jwtService.verify(token, { secret: ... });
  if (!this.userSockets.has(payload.sub)) {
    this.userSockets.set(payload.sub, new Set());
  }
  this.userSockets.get(payload.sub)!.add(client.id);

  // 첫 소켓 연결 시에만 ONLINE으로 전환
  if (this.userSockets.get(payload.sub)!.size === 1) {
    await this.setPresence(payload.sub, PresenceStatus.ONLINE);
  }
}

async handleDisconnect(client: Socket) {
  const sockets = this.userSockets.get(userId);
  sockets?.delete(client.id);
  // 마지막 연결이 끊길 때만 OFFLINE으로 전환
  if (sockets && sockets.size === 0) {
    await this.setPresence(userId, PresenceStatus.OFFLINE);
  }
}`}
                      </pre>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">트러블슈팅</p>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                        <li>
                          문제: 유저 1명 = 소켓 1개로 가정하면, 다른 탭이
                          열려 있어도 한 탭만 닫는 순간{" "}
                          <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">presence.changed</code>
                          가 OFFLINE으로 브로드캐스트됨
                        </li>
                        <li>
                          해결: userId → Set&lt;socketId&gt;로 다중 연결을
                          추적해 Set이 완전히 비었을 때만 OFFLINE 처리
                        </li>
                      </ul>
                    </div>

                    <ul className="list-disc space-y-1 pl-5 text-[16px]">
                      <li>
                        연결 시 JWT 검증 후 개인 알림 룸(
                        <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">user:userId</code>
                        )에 자동 join
                      </li>
                      <li>
                        DM/그룹 DM 채널도 연결 시점에 자동 join해 FE가 별도
                        이벤트를 emit하지 않아도 알림 수신 가능
                      </li>
                      <li>
                        채널·프로젝트(보드)를 Socket.io room으로 분리해{" "}
                        <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">message.created</code>,{" "}
                        <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">task.updated</code>{" "}
                        등 이벤트를 대상 룸에만 브로드캐스트
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2) Ctrl+V 이미지 붙여넣기 */}
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">2) Ctrl+V 이미지 붙여넣기 업로드 (FE + BE)</p>
                  <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                    클립보드 이미지를 채팅창에 붙여넣으면 즉시 Supabase Storage에
                    업로드되고, 미리보기와 함께 메시지에 첨부되는 플로우를
                    구현했습니다.
                  </p>

                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-neutral-500">
                        FE — clipboard paste 감지
                      </p>
                      <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                        {`async function handlePaste(e: React.ClipboardEvent) {
  const imageItems = [...e.clipboardData.items].filter(
    (item) => item.kind === "file" && item.type.startsWith("image/")
  );
  for (const item of imageItems) {
    const file = item.getAsFile();
    if (!file) continue;
    const previewUrl = URL.createObjectURL(file);
    setPendingFiles((prev) => [
      ...prev,
      { id, file, previewUrl, uploaded: null },
    ]);
    const result = await uploadFileApi(file); // 즉시 업로드
    setPendingFiles((prev) =>
      prev.map((p) => (p.id === id ? { ...p, uploaded: result } : p))
    );
  }
}`}
                      </pre>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-neutral-500">
                        BE — Supabase Storage 업로드
                      </p>
                      <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                        {`// Buffer는 BodyInit 타입과 호환되지 않아 Uint8Array로 변환
body: new Uint8Array(file.buffer)`}
                      </pre>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">트러블슈팅</p>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                        <li>
                          문제: <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">file.buffer</code>를 직접 fetch body에 전달 시 TypeScript 에러{" "}
                          (<code className="rounded bg-slate-100 px-1 dark:bg-slate-800">Buffer is not assignable to BodyInit</code>)
                        </li>
                        <li>
                          해결:{" "}
                          <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">new Uint8Array(file.buffer)</code>로 변환하여 해결
                        </li>
                      </ul>
                    </div>

                    <ul className="list-disc space-y-1 pl-5 text-[16px]">
                      <li>클립보드 이벤트에서 이미지 파일만 선별 처리</li>
                      <li>업로드 전 미리보기 URL 즉시 표시 (UX 개선)</li>
                      <li>업로드 완료 후 pendingFiles 상태 업데이트</li>
                    </ul>
                  </div>
                </div>

                {/* 3) 홈 KPI 카드 */}
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">3) 홈 KPI 카드 — 4개 API 병렬 호출 (FE)</p>
                  <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                    홈 대시보드 진입 시 미읽은 알림·오늘 마감 태스크·미읽은
                    메시지·온라인 팀원 수를 <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">Promise.all</code>로 병렬 조회해
                    로딩 시간을 최소화했습니다.
                  </p>

                  <div className="mt-4">
                    <pre className="overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                      {`Promise.all([
  countUnreadApi(token),            // 미읽은 알림
  getMyTasksApi(token),             // 내 태스크 목록
  getUnreadSummaryApi(token, wsId), // 채널별 미읽은 메시지
  getMembersApi(token, wsId),       // 워크스페이스 멤버
]).then(([{ count }, tasks, unreadSummary, members]) => {
  const dueToday = tasks.filter(
    (t) => t.dueDate?.slice(0, 10) === todayStr
  ).length;
  const totalUnread = unreadSummary.reduce((s, i) => s + i.unreadCount, 0);
  const online = members.filter((m) => m.user.status === "ONLINE").length;
  setKpi({
    unreadInbox: count,
    dueToday,
    unreadMessages: totalUnread,
    onlineMembers: online,
  });
});`}
                    </pre>
                  </div>

                  <ul className="mt-3 list-disc space-y-1 pl-5 text-[16px]">
                    <li>순차 호출 대비 응답 시간 약 60% 단축</li>
                    <li>4개 독립 API → 가장 느린 1개 기준으로 수렴</li>
                    <li>KPI 카드 4개를 단일 렌더 사이클에 업데이트</li>
                  </ul>
                </div>

                {/* 4) GET /tasks/my */}
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">4) GET /tasks/my — 프로젝트 횡단 태스크 조회 (BE)</p>
                  <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                    특정 프로젝트가 아닌 "나에게 할당된 모든 워크스페이스 태스크"를
                    한 번에 조회하는 전용 엔드포인트를 구현했습니다.
                  </p>

                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-neutral-500">
                        NestJS 컨트롤러 — 라우트 순서
                      </p>
                      <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                        {`@Get("tasks/my")       // ← 반드시 :id 라우트보다 위에 위치
getMyTasks(@Request() req) { ... }

@Get("tasks/:id")      // ← 뒤에 위치해야 my가 id로 매칭되지 않음
getTask(@Param("id") id: string) { ... }`}
                      </pre>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-neutral-500">
                        Prisma 쿼리
                      </p>
                      <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                        {`return this.prisma.task.findMany({
  where: {
    assignees: { some: { userId } },
    deletedAt: null,
    status: { not: "DONE" },
  },
  include: {
    project: { select: { id: true, name: true } },
  },
  orderBy: [{ dueDate: "asc" }, { createdAt: "desc" }],
  take: 30,
});`}
                      </pre>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">트러블슈팅</p>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                        <li>
                          문제:{" "}
                          <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">/tasks/my</code>를{" "}
                          <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">/tasks/:id</code> 뒤에 등록하면 NestJS가{" "}
                          <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">my</code>를 taskId로 해석해 404 발생
                        </li>
                        <li>
                          해결: 리터럴 경로를 파라미터 경로보다 항상 앞에 선언
                        </li>
                      </ul>
                    </div>

                    <ul className="list-disc space-y-1 pl-5 text-[16px]">
                      <li>프로젝트 횡단 조회로 My Week·내 할 일 뷰 지원</li>
                      <li>완료 태스크 제외, 마감일 오름차순 정렬</li>
                      <li>project 정보를 include로 함께 반환해 추가 요청 제거</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                회고
              </h2>
              <p>
                채팅·태스크·알림이 하나의 이벤트 흐름으로 얽히다 보니, REST와
                WebSocket 중 어느 쪽으로 상태를 흘려보낼지 매번 판단이
                필요했습니다. 특히 Presence는 현재 서버 메모리(Map)에만
                저장되어 있어 인스턴스를 여러 대로 늘리면 그대로는 동작하지
                않는다는 한계가 있습니다. 다음 단계로는 Presence·타이핑 상태처럼
                휘발성이 강한 데이터를 Redis로 분리해, 서버가 여러 대여도
                일관된 온라인 상태를 유지하도록 개선하고 싶습니다.
              </p>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
