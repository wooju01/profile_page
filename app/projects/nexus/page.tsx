import type { Metadata } from "next";
import Link from "next/link";
import { ProjectPager } from "@/components/ProjectPager";
import { PortfolioImage } from "@/components/PortfolioImage";

export const metadata: Metadata = {
  title: "Nexus | Wooju",
  description:
    "Slack 실시간 채팅과 Jira·Linear 스타일 태스크 보드를 하나로 묶은 팀 협업 워크스페이스",
};

export default function NexusPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 px-4 py-10 text-foreground sm:px-6 md:px-8 md:py-12 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
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
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg sm:p-6 md:p-8 dark:border-white/10 dark:bg-slate-950/90">
          <header className="space-y-2 border-b border-slate-100 pb-6 dark:border-slate-800">
            <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
              Nexus
            </h1>
            <p className="text-[16px] md:text-[18px] text-neutral-600 dark:text-neutral-300">
              대화(Slack)·업무 관리(Jira·Linear)·문서(Notion)가 흩어져
              맥락이 끊기는 문제를 해결하기 위해, 채널·DM·칸반 보드·알림을
              하나의 워크스페이스로 묶은 실시간 협업 플랫폼입니다. 2인
              팀으로 백엔드는{" "}
              <strong>NestJS REST API + Socket.IO 게이트웨이</strong>를,
              프론트엔드는 <strong>실시간 채팅·보드·대시보드</strong>를
              구현했습니다.
            </p>
            <p className="text-[13px] text-neutral-500 dark:text-neutral-400">
              2026.04.20 ~ 2026.08.05 (약 3.5개월, 2인 팀)
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {[
                "Next.js 16",
                "React 19",
                "TypeScript",
                "NestJS 11",
                "Prisma 7",
                "PostgreSQL",
                "Socket.IO",
                "Passport",
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
              <a
                href="https://nexus-fe-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
              >
                <span>사이트 바로가기</span>
                <span aria-hidden>↗</span>
              </a>
            </div>
          </header>

          <div className="pt-6">
            <ProjectPager
              pages={[
                {
                  label: "개요",
                  content: (
                    <div className="space-y-5">
                      <PortfolioImage
                        src="/projects/nexus/landing.png"
                        alt="Nexus 랜딩 페이지"
                        caption="랜딩 페이지"
                        width={1269}
                        height={1015}
                      />

                      <section className="space-y-1">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                          목표
                        </h2>
                        <p>
                          팀 대화는 Slack, 업무 관리는 Jira·Linear, 문서는
                          Notion에 흩어져 있어서 &ldquo;이 Task가 어느
                          대화에서 나왔지?&rdquo; 하는 맥락이 자꾸
                          끊긴다는 문제에서 출발했습니다. 채널·DM·칸반
                          보드·캘린더를 하나의 워크스페이스에 모으고,
                          프로젝트를 만들면 연동 채널이 자동으로 생기게
                          해서 대화와 작업이 끊기지 않고 이어지는 실시간
                          협업 환경을 만드는 것이 목표였습니다.
                        </p>
                      </section>

                      <section className="space-y-1">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                          역할 (2인 팀, FE·BE 모두 담당)
                        </h2>
                        <ul className="list-disc space-y-1 pl-5">
                          <li>
                            <strong>BE</strong>: Socket.IO 실시간
                            게이트웨이(채팅·보드·알림·프레즌스),
                            워크스페이스·멤버 권한,
                            채널·메시지·DM·스레드·리액션 API,
                            프로젝트·Task API, 친구 시스템, 알림·활동
                            기록, 파일 업로드, Google/Kakao OAuth, Render
                            배포
                          </li>
                          <li>
                            <strong>FE</strong>: 실시간 채팅
                            화면(스레드·리액션·수정/삭제·이미지
                            붙여넣기), 보드 실시간 동기화, 실시간 알림
                            패널, 프로젝트 멤버 권한 패널, 친구·DM, 홈
                            대시보드, OAuth 로그인, PWA
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
                              <li>Next.js 16 (App Router), React 19, TypeScript</li>
                              <li>Tailwind CSS v4</li>
                              <li>Socket.IO Client</li>
                              <li>@dnd-kit, Tiptap</li>
                              <li>next-pwa</li>
                              <li>Vercel, GitHub, Figma</li>
                            </ul>
                          </div>

                          <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                              Backend
                            </p>
                            <ul className="mt-2 list-disc space-y-1 pl-5">
                              <li>NestJS 11, TypeScript</li>
                              <li>Prisma 7, PostgreSQL</li>
                              <li>Socket.IO (@nestjs/websockets)</li>
                              <li>Passport (JWT · Google · Kakao), bcrypt</li>
                              <li>class-validator, Jest</li>
                              <li>Supabase Storage, Nodemailer, Render</li>
                            </ul>
                          </div>
                        </div>
                      </section>
                    </div>
                  ),
                },
                {
                  label: "WebSocket 게이트웨이",
                  content: (
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">
                        1) 실시간 WebSocket 게이트웨이 (BE)
                      </p>

                      <div className="mt-2 space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            구현 목표
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              채팅 메시지, 보드 변경, 알림, 접속 상태를
                              새로고침 없이 바로 반영
                            </li>
                            <li>
                              탭 여러 개나 여러 기기로 접속해도 접속
                              상태(프레즌스)가 정확하게 유지되도록 처리
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            Room 구조
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                channel:{"{id}"}
                              </code>{" "}
                              — 메시지·리액션·타이핑 이벤트
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                project:{"{id}"}
                              </code>{" "}
                              —{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                task.created / updated / deleted
                              </code>
                              ,{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                comment.created
                              </code>
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                user:{"{id}"}
                              </code>{" "}
                              — 개인 알림{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                notification.created
                              </code>
                            </li>
                            <li>
                              전역 —{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                presence.changed
                              </code>
                            </li>
                          </ul>
                        </div>

                        <p className="text-[16px] text-neutral-600 dark:text-neutral-300">
                          연결할 때 handshake에 담긴 JWT를 검증한 뒤 개인
                          Room에 자동으로 넣고, 내가 속한 DM Room에도 미리
                          join해 두어서 DM 화면을 열지 않은 상태에서도 새
                          메시지 알림을 받을 수 있게 했습니다. 소켓은
                          userId → Set&lt;socketId&gt; 형태로 관리합니다.
                          첫 소켓이 연결될 때만 ONLINE으로, 마지막 소켓이
                          끊길 때만 OFFLINE으로 바꿔서 탭 하나를 닫았다고
                          오프라인으로 표시되는 문제를 막았습니다.
                        </p>

                        <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                          <p className="font-semibold">트러블슈팅</p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              문제: 유저 1명 = 소켓 1개로 가정하면, 다른
                              탭이 열려 있어도 한 탭만 닫는 순간{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                presence.changed
                              </code>
                              가 OFFLINE으로 브로드캐스트됨
                            </li>
                            <li>
                              해결: userId → Set&lt;socketId&gt;로 다중
                              연결을 추적해 Set이 완전히 비었을 때만
                              OFFLINE 처리
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500">
                            Gateway — 멀티 탭 프레즌스
                          </p>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`// userId → socketId 집합 (멀티 탭/디바이스 지원)
private readonly userSockets = new Map<string, Set<string>>();

this.userSockets.get(payload.sub)!.add(client.id);
// 첫 소켓 연결 시에만 ONLINE으로 전환
if (this.userSockets.get(payload.sub)!.size === 1) {
  await this.setPresence(payload.sub, PresenceStatus.ONLINE);
}
await client.join(\`user:\${payload.sub}\`);`}
                          </pre>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500">
                            Service → Gateway 브로드캐스트
                          </p>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`this.gateway.broadcastToProject("task.updated", task.projectId, {
  task: updated,
  actorUserId: userId,
});`}
                          </pre>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            기술적 성과
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              채널·프로젝트·유저 단위로 Room을 나눠서
                              필요한 사용자에게만 이벤트 전송
                            </li>
                            <li>
                              Service 레이어에서 Gateway를 주입받아 쓰게
                              해서 REST 요청과 실시간 전파를 하나의
                              흐름으로 처리
                            </li>
                            <li>
                              알림 생성·전송은 best-effort 비동기로
                              처리해서 본 요청의 응답 속도에 영향이 없도록
                              구성
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "채널·메시지 API",
                  content: (
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">
                        2) 채널 · 메시지 · DM API (BE)
                      </p>

                      <div className="mt-2 space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            구현 목표
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              Slack 수준의 메시지 기능 제공(스레드, 리액션,
                              첨부, 읽음 위치)
                            </li>
                            <li>
                              워크스페이스와 상관없이 쓸 수 있는 글로벌 DM
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            주요 API
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                GET /channels/:id/messages
                              </code>{" "}
                              커서 페이지네이션 /{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                POST
                              </code>{" "}
                              메시지 전송(첨부 포함)
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                PATCH · DELETE /messages/:id
                              </code>{" "}
                              수정·소프트 삭제(작성자 또는 워크스페이스
                              ADMIN)
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                GET · POST /messages/:id/replies
                              </code>{" "}
                              스레드(1 depth로 제한)
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                POST · DELETE /messages/:id/reactions
                              </code>{" "}
                              이모지 리액션
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                POST /channels/:id/read-markers
                              </code>{" "}
                              읽음 위치 기록
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                POST /dms
                              </code>{" "}
                              DM 시작(이미 있으면 기존 채널 반환) /{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                POST /upload
                              </code>{" "}
                              Supabase Storage 업로드
                            </li>
                          </ul>
                        </div>

                        <p className="text-[16px] text-neutral-600 dark:text-neutral-300">
                          메시지 목록은 createdAt 기준 커서
                          페이지네이션으로 만들었습니다. 루트 메시지만
                          조회하면서 답글 수와 최근 참여자 3명을 같이
                          내려줘서, 스레드 아바타를 그리려고 클라이언트가
                          API를 한 번 더 부를 필요가 없게 했습니다.
                          메시지와 첨부파일 저장은 하나의 트랜잭션으로
                          묶었습니다.
                        </p>

                        <div>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`const cursorCondition = query.cursor
  ? { createdAt: { lt: await this.getMessageCreatedAt(query.cursor) } }
  : {};

return this.prisma.message.findMany({
  where: { channelId, parentId: null, deletedAt: null, ...cursorCondition },
  include: {
    _count: { select: { replies: true } },
    replies: { select: { author: {} }, orderBy: { createdAt: "desc" }, take: 3 },
  },
  orderBy: { createdAt: "desc" },
  take: limit,
});`}
                          </pre>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                          <p className="font-semibold">
                            트러블슈팅 — 업로드 Buffer 타입 에러
                          </p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              문제:{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                file.buffer
                              </code>
                              를 업로드 요청 body에 직접 전달 시 TypeScript
                              에러 (
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                Buffer is not assignable to BodyInit
                              </code>
                              )
                            </li>
                            <li>
                              해결:{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                new Uint8Array(file.buffer)
                              </code>
                              로 변환하여 해결
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            기술적 성과
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              리액션에{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                @@unique([messageId, userId, emoji])
                              </code>
                              를 걸고 upsert로 처리해 중복 클릭에도
                              결과가 같도록(멱등) 보장
                            </li>
                            <li>
                              스레드 depth를 1로 제한하고 parent가 같은
                              채널에 있는지 검증해서 데이터 정합성 확보
                            </li>
                            <li>
                              DM 채널을 workspaceId 없는 글로벌 채널로
                              바꿔 친구 관계만으로 대화를 시작할 수 있게
                              개선
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "프로젝트·Task API",
                  content: (
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">
                        3) 프로젝트 · Task API와 권한 (BE)
                      </p>

                      <div className="mt-2 space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            구현 목표
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              프로젝트와 채널을 1:1로 자동 연동해서
                              &ldquo;대화 ↔ 작업&rdquo; 맥락을 유지
                            </li>
                            <li>
                              워크스페이스 역할(OWNER/ADMIN/MEMBER)과
                              프로젝트 역할(MANAGER/MEMBER)을 2단계로
                              권한 관리
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            주요 API
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                POST /workspaces/:id/projects
                              </code>{" "}
                              생성 → 동명 채널 생성 + 생성자를 MANAGER로
                              등록
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                DELETE /projects/:id
                              </code>{" "}
                              삭제할 때 연동 채널도 같이 정리
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                POST · PATCH · DELETE /projects/:id/members
                              </code>{" "}
                              멤버 추가·역할 변경·제거 → 연동 채널
                              멤버십 동기화
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                GET · POST /projects/:id/tasks
                              </code>
                              ,{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                PATCH · DELETE /tasks/:id
                              </code>
                              ,{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                GET /tasks/my
                              </code>
                            </li>
                          </ul>
                        </div>

                        <p className="text-[16px] text-neutral-600 dark:text-neutral-300">
                          프로젝트 생성, 채널 생성, 멤버 등록을 하나의{" "}
                          <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                            $transaction
                          </code>
                          으로 묶어서 중간에 실패해도 채널만 남는 일이
                          없게 했습니다. Task 번호(NX-12)는 프로젝트의
                          taskCount를 트랜잭션 안에서 increment해서
                          발급하므로 동시에 생성해도 번호가 겹치지
                          않습니다.
                        </p>

                        <div>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`return this.prisma.$transaction(async (tx) => {
  const channel = await tx.channel.create({ data: { workspaceId, name: dto.name } });
  const project = await tx.project.create({
    data: { workspaceId, ...dto, linkedChannelId: channel.id },
  });
  await tx.projectMember.create({
    data: { projectId: project.id, userId, role: ProjectRole.MANAGER },
  });
  await tx.channelMember.create({ data: { channelId: channel.id, userId } });
  return project;
});`}
                          </pre>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                          <p className="font-semibold">
                            트러블슈팅 — GET /tasks/my 라우트 순서
                          </p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              문제:{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                /tasks/my
                              </code>
                              를{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                /tasks/:id
                              </code>{" "}
                              뒤에 등록하면 NestJS가{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                my
                              </code>
                              를 taskId로 해석해 404 발생
                            </li>
                            <li>
                              해결: 리터럴 경로를 파라미터 경로보다 항상
                              앞에 선언
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            기술적 성과
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              프로젝트 멤버가 바뀌면 연동 채널 접근 권한도
                              자동으로 따라가도록 해서 권한 불일치 제거
                            </li>
                            <li>
                              담당자 변경 시 새로 추가된 담당자에게만
                              TASK_ASSIGNED 알림을 보내 중복 알림 방지
                            </li>
                            <li>
                              Task·메시지는 소프트 삭제로 처리해서 활동
                              기록과 이력 보존
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "실시간 채팅 화면",
                  content: (
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">4) 실시간 채팅 화면 (FE)</p>

                      <div className="mt-2 space-y-4">
                        <PortfolioImage
                          src="/projects/nexus/chat.png"
                          alt="Nexus 실시간 채팅 화면 — 채널, 스레드 패널"
                          caption="채널 채팅 + 스레드 패널"
                          width={1292}
                          height={1278}
                        />

                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            구현 목표
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              메시지·리액션·수정·삭제·스레드 답글이 모든
                              참여자 화면에 바로 반영되도록 구현
                            </li>
                            <li>
                              Discord·Slack처럼 이미지를 붙여넣으면 바로
                              업로드되는 UX
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            컴포넌트 구조
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                ChannelView
                              </code>
                              : 메시지 조회, 소켓 구독, 작성·첨부·수정
                              상태를 관리하는 컨테이너
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                MessageRow
                              </code>{" "}
                              /{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                ReactionPill
                              </code>
                              : 메시지 단위 렌더링, 리액션 토글, 호버
                              액션
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                ThreadPanel
                              </code>
                              : 우측 스레드 패널, 답글 작성
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                NotificationPanel
                              </code>
                              :{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                notification.created
                              </code>{" "}
                              수신, 읽음 처리
                            </li>
                          </ul>
                        </div>

                        <ul className="list-disc space-y-1 pl-5 text-[16px]">
                          <li>
                            소켓 재연결 시 채널 Room에 다시 join해서
                            네트워크가 끊겼다 돌아와도 메시지를 놓치지
                            않도록 처리
                          </li>
                          <li>
                            스레드 답글 이벤트가 오면 본문에는 추가하지
                            않고 부모 메시지의 답글 수만 갱신
                          </li>
                          <li>
                            같은 id의 메시지가 다시 와도 dedup 처리해서
                            중복 렌더링 방지
                          </li>
                          <li>
                            붙여넣은 이미지는 즉시 업로드하면서 미리보기
                            표시, 업로드가 끝나야 전송 가능, objectURL은
                            revoke해서 메모리 누수 방지
                          </li>
                        </ul>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500">
                            소켓 구독 + 재연결 처리
                          </p>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`socket.emit("channel.join", channelId);
// 소켓 재연결 시 채널 룸 재진입 (끊김→재연결 시 서버 룸에서 빠지기 때문)
function onReconnect() {
  socket.emit("channel.join", channelId);
}
socket.on("connect", onReconnect);

function onMessageCreated(message: Message) {
  if (message.parentId) { /* 부모의 reply count만 +1 */ return; }
  setMessages((prev) =>
    prev.some((m) => m.id === message.id) ? prev : [...prev, message],
  );
}`}
                          </pre>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500">
                            클립보드 이미지 즉시 업로드
                          </p>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`const imageItems = Array.from(e.clipboardData.items)
  .filter((item) => item.type.startsWith("image/"));

// paste 즉시 업로드 — Discord/Slack 방식
newFiles.forEach((pf) => {
  uploadFileApi(pf.file).then((res) => /* 해당 파일만 uploading:false */);
});`}
                          </pre>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            기술적 성과
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              재연결, 중복 이벤트, 스레드 이벤트를 각각
                              처리해서 실제 사용 환경에서도 안정적으로
                              실시간 동기화
                            </li>
                            <li>
                              이벤트 핸들러를 effect cleanup에서 off·leave로
                              정리해서 채널을 옮겨도 리스너가 쌓이지 않음
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "칸반 보드",
                  content: (
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">
                        5) 칸반 보드 실시간 동기화 (FE)
                      </p>

                      <div className="mt-2 space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            구현 목표
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              같은 보드를 보는 팀원끼리 Task
                              생성·수정·삭제·이동을 즉시 공유
                            </li>
                            <li>
                              드래그 앤 드롭은 낙관적 업데이트로 바로
                              반응하고, 실패하면 원래대로 롤백
                            </li>
                          </ul>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <PortfolioImage
                            src="/projects/nexus/board-new-task.png"
                            alt="Nexus 칸반 보드 — 새 태스크 생성 모달"
                            caption="새 태스크 생성"
                            width={1279}
                            height={837}
                          />
                          <PortfolioImage
                            src="/projects/nexus/board-task-detail.png"
                            alt="Nexus 칸반 보드 — 태스크 상세 패널"
                            caption="태스크 상세 패널"
                            width={994}
                            height={892}
                          />
                        </div>

                        <p className="text-[16px] text-neutral-600 dark:text-neutral-300">
                          보드에 들어가면{" "}
                          <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                            project.join
                          </code>
                          으로 Room에 들어가고{" "}
                          <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                            task.*
                          </code>{" "}
                          이벤트를 구독합니다. 내 변경은 낙관적
                          업데이트로 이미 화면에 반영돼 있기 때문에,
                          서버가 같은 이벤트를 echo로 다시 보내도 id
                          기준 덮어쓰기와 dedup으로 안전하게 처리됩니다.
                          열려 있는 Task 상세 패널도 함께 동기화합니다.
                        </p>

                        <div>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`socket.emit("project.join", project.id);

function onUpdated({ task }: { task: Task }) {
  setTasks((prev) => prev.map((t) => (t.id === task.id ? task : t)));
  setSelectedTask((curr) => (curr?.id === task.id ? task : curr));
}

// 낙관적 업데이트 실패 시 status + order 롤백
updateTaskApi(token, activeId, payload).catch(() => {
  setTasks((prev) => prev.map((t) =>
    t.id === activeId ? { ...t, status: prevStatus, order: prevOrder } : t));
});`}
                          </pre>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            기술적 성과
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              상세 패널을 열면 캐시된 데이터를 먼저
                              보여주고 API 응답으로 교체해서 지연 없는
                              UX 구현
                            </li>
                            <li>
                              필터·검색·뷰 상태를 URL query로 관리해서
                              링크로 공유하거나 새로고침해도 상태 유지
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "홈 KPI 카드",
                  content: (
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">
                        6) 홈 KPI 카드 — 4개 API 병렬 호출 (FE)
                      </p>
                      <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                        홈 대시보드 진입 시 미읽은 알림·오늘 마감
                        태스크·미읽은 메시지·온라인 팀원 수를{" "}
                        <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                          Promise.all
                        </code>
                        로 병렬 조회해 로딩 시간을 최소화했습니다.
                      </p>

                      <div className="mt-4">
                        <PortfolioImage
                          src="/projects/nexus/home-dashboard.png"
                          alt="Nexus 홈 대시보드 — KPI 카드, Inbox, My tasks"
                          caption="홈 대시보드"
                          width={1292}
                          height={813}
                        />
                      </div>

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
                  ),
                },
                {
                  label: "소셜 로그인",
                  content: (
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">
                        7) 소셜 로그인 &amp; 트러블슈팅 (BE)
                      </p>

                      <div className="mt-2 space-y-4">
                        <ul className="list-disc space-y-1 pl-5 text-[16px]">
                          <li>
                            Google·Kakao OAuth와 이메일 로그인을 하나의
                            계정 체계로 통합(Account 테이블로 provider
                            분리)
                          </li>
                          <li>
                            Refresh Token Rotation(7일)으로 로그인 유지
                          </li>
                        </ul>

                        <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                          <p className="font-semibold">
                            트러블슈팅 — 배포 환경에서만 카카오 로그인이
                            간헐적으로 실패
                          </p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              원인: Render 프록시가 응답이 느린 콜백
                              요청을 자동으로 재시도하면서, 같은 인가
                              코드로 토큰 교환이 두 번 일어남. 카카오
                              인가 코드는 일회용이라 두 번째 교환은{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                invalid_grant
                              </code>
                              로 실패
                            </li>
                            <li>
                              분석: 토큰 요청 단계마다 로그를 넣어 같은
                              code가 짧은 간격으로 두 번 들어오는 것을
                              확인
                            </li>
                            <li>
                              해결:{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                getOAuthAccessToken
                              </code>
                              을 감싸서 진행 중인 교환을 code 기준으로
                              Promise 캐싱하고, 중복 요청은 첫 번째
                              결과를 재사용(60초 뒤 캐시 정리)
                            </li>
                          </ul>
                        </div>

                        <div>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`const existing = inFlightExchanges.get(code);
if (existing) {
  // Render 재시도: 동일 코드로 두 번째 요청 → 첫 번째 결과 재사용
  void existing.then(({ err, at, rt, p }) => callback(err, at, rt, p));
  return;
}
inFlightExchanges.set(code, promise);
setTimeout(() => inFlightExchanges.delete(code), 60_000);`}
                          </pre>
                        </div>

                        <p className="text-[16px] text-neutral-600 dark:text-neutral-300">
                          같은 이유로 유저·Account 생성이 동시에 들어오는
                          경우도 Prisma P2002(unique 충돌)를 잡아서 다시
                          조회하는 방식으로 멱등 처리했습니다.
                        </p>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            기술적 성과
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              로컬에서는 재현되지 않는 인프라 레벨 문제를
                              로그로 추적해서 원인을 찾고 해결
                            </li>
                            <li>
                              동시성 상황에서도 사용자·계정이 중복
                              생성되지 않음
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "배포 & PWA",
                  content: (
                    <section className="space-y-2">
                      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                        8) 배포 &amp; PWA
                      </h2>
                      <ul className="list-disc space-y-1.5 pl-5 text-[16px]">
                        <li>
                          <strong>BE</strong>: Render. 빌드할 때{" "}
                          <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                            prisma generate
                          </code>
                          , 시작할 때{" "}
                          <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                            prisma migrate deploy
                          </code>
                          를 실행하도록 구성하고, 빌드 출력 경로 문제도
                          해결
                        </li>
                        <li>
                          <strong>CORS</strong>: 환경변수로 여러 origin을
                          허용하고 trust proxy를 설정해 프록시 환경에
                          대응
                        </li>
                        <li>
                          <strong>FE</strong>: Vercel + next-pwa로 앱
                          설치 지원, 자동 로그인, 오프라인 후 재연결 시
                          리로드
                        </li>
                        <li>
                          GitHub Actions로 feature 브랜치 자동 PR, Discord
                          알림 → PR 기반 협업
                        </li>
                      </ul>
                    </section>
                  ),
                },
                {
                  label: "회고",
                  content: (
                    <section className="space-y-1">
                      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                        회고
                      </h2>
                      <p>
                        잘한 점: 실시간 기능을 &ldquo;Service → Gateway →
                        Room&rdquo; 구조로 통일해서 채팅·보드·알림을 같은
                        패턴으로 확장할 수 있었습니다.
                      </p>
                      <p className="mt-2">
                        아쉬운 점: 소켓 클라이언트 싱글톤이 두 군데(
                        <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                          lib/ws/socket.ts
                        </code>
                        ,{" "}
                        <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                          lib/ws/client.ts
                        </code>
                        )로 나뉘어 연결이 중복될 수 있는 구조입니다.
                        서버의 userSockets도 인메모리라 서버를 여러 대로
                        늘리면 Redis Adapter가 필요합니다.
                      </p>
                      <p className="mt-2">
                        다음 단계: React Query를 도입해 서버 상태를
                        관리하고, 채팅 무한 스크롤(이미 만든 커서 API
                        활용)과 긴 목록 가상 스크롤을 적용할 계획입니다.
                      </p>
                    </section>
                  ),
                },
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
