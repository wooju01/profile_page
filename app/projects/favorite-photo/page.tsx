import type { Metadata } from "next";
import Link from "next/link";
import { ProjectPager } from "@/components/ProjectPager";
import { PortfolioImage } from "@/components/PortfolioImage";

export const metadata: Metadata = {
  title: "FavoritePhoto | Wooju",
  description: "포인트 기반 포토카드 거래·교환 플랫폼",
};

export default function FavoritePhotoPage() {
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
              최애의 포토
            </h1>

            <p className="text-[16px] md:text-[18px] text-neutral-600 dark:text-neutral-300">
              소중한 순간을 사진으로 기록하고 공유할 수 있는 감성 기반 포토카드
              플랫폼입니다. 포인트 기반 거래와 카드 교환 기능을 통해 사용자 간
              상호작용을 강화했습니다. <strong>6인 팀 프로젝트</strong>로
              진행했으며, 저는 <strong>FE와 BE를 함께 담당</strong>했습니다.
            </p>

            <p className="text-[13px] text-neutral-500 dark:text-neutral-400">
              2025.05.14 ~ 2025.06.05
            </p>

            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {[
                "Next.js",
                "React",
                "React Query",
                "React Router",
                "JavaScript",
                "Tailwind CSS",
                "Express",
                "Prisma",
                "PostgreSQL",
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
                href="https://github.com/wooju01/6-FavoritePhoto-4team-fe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
              >
                <span>Frontend 저장소</span>
                <span aria-hidden>↗</span>
              </a>
              <a
                href="https://github.com/wooju01/6-FavoritePhoto-4team-be"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
              >
                <span>Backend 저장소</span>
                <span aria-hidden>↗</span>
              </a>
              <a
                href="https://favorite-photo-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
              >
                <span>라이브 데모</span>
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
                      <div className="grid items-start gap-4 md:grid-cols-[1fr_220px]">
                        <div className="min-w-0 space-y-5">
                          <section className="space-y-1">
                            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                              목표
                            </h2>
                            <p>
                              사용자 간 포토카드 거래 및 교환을 중심으로, 실시간 상호작용과
                              필터 기반 탐색 경험을 제공하는 플랫폼을 구현하는 것을 목표로
                              했습니다. &apos;최애&apos;와 &apos;사진&apos;을 결합한
                              이름처럼, 특별한 순간을 의미 있는 아카이브 공간에서 간직하고
                              거래·교환할 수 있도록 설계했습니다.
                            </p>
                          </section>

                          <section className="space-y-1">
                            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                              역할
                            </h2>
                            <ul className="list-disc space-y-1 pl-5">
                              <li>
                                <strong>FE</strong>: 공통 컴포넌트(등급 Dropdown, Title),
                                마이 갤러리 페이지, 카드 생성 페이지, 나의 판매
                                포토카드(구매자) 페이지 구현
                              </li>
                              <li>
                                <strong>BE</strong>: 전체 카드 조회, 카드 상세 조회, 교환
                                제안, 교환 제안 목록 조회, 교환 제안 취소 API 구현
                              </li>
                            </ul>
                          </section>
                        </div>

                        <PortfolioImage
                          src="/projects/favorite-photo/my-gallery.png"
                          alt="최애의 포토 마이 갤러리 화면"
                          caption="마이 갤러리"
                          width={220}
                          height={168}
                        />
                      </div>

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
                              <li>Next.js, React, JavaScript</li>
                              <li>React Query, React Router</li>
                              <li>Tailwind CSS</li>
                            </ul>
                          </div>

                          <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                              Backend
                            </p>
                            <ul className="mt-2 list-disc space-y-1 pl-5">
                              <li>Express, Prisma, PostgreSQL</li>
                              <li>Render (BE 배포), Vercel (FE 배포)</li>
                              <li>Git / GitHub</li>
                            </ul>
                          </div>
                        </div>
                      </section>
                    </div>
                  ),
                },
                {
                  label: "필터링",
                  content: (
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <div className="grid gap-4 md:grid-cols-[1fr_280px]">
                    <div className="min-w-0">
                      <p className="font-semibold">
                        1) 포토카드 필터링 시스템 — useFilterSheet 훅 도입
                      </p>
                      <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                        다중 조건(등급, 장르, 판매 여부, 판매 타입)에 따른 필터링
                        UI와 API 연동 로직을 구현했습니다. 기존에는 필터 UI
                        컴포넌트마다 API 호출과 카운트 집계 로직을 각자
                        중복해서 구현해야 했고, 상태 관리가 분산되어 동기화가
                        어려웠습니다.
                      </p>

                      <div className="mt-4 space-y-4">
                        <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                          <p className="font-semibold">트러블슈팅</p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              문제: 필터 컴포넌트마다 API 호출/파싱 로직이
                              중복되어 유지보수가 어렵고, 필터를 열 때마다
                              불필요한 재호출이 발생
                            </li>
                            <li>
                              해결:{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                useFilterSheet
                              </code>{" "}
                              훅으로 카운트 조회·필터링 결과 조회·로딩 상태를
                              중앙화하고,{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                fetcher
                              </code>{" "}
                              함수를 주입받아 여러 API에 재사용 가능하도록 설계
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500">
                            useFilterSheet 사용부
                          </p>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`const { counts, filteredCount, loading, fetchCounts, fetchFilteredCount } =
  useFilterSheet(storeService.getAllStoreCards);

useEffect(() => {
  if (isOpen) fetchCounts();
}, [isOpen]);`}
                          </pre>
                        </div>

                        <ul className="list-disc space-y-1 pl-5 text-[16px]">
                          <li>필터 조건을 문자열/배열로 유연하게 변환해 API 쿼리 구성</li>
                          <li>필터 변경 시 즉시 결과 개수 업데이트 (UX 개선)</li>
                          <li>URL 쿼리 파라미터와 연동하여 상태 유지 및 공유 가능</li>
                          <li>모바일 BottomSheet UI + 반응형 처리</li>
                          <li>
                            효과: 필터 오픈 시 1회만 집계 호출하도록 최적화해
                            불필요한 API 호출을 줄였고, UI는 렌더링에만
                            집중하도록 역할을 분리
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex md:h-full md:flex-col md:justify-center">
                      <PortfolioImage
                        src="/projects/favorite-photo/mobile-filter.png"
                        alt="최애의 포토 모바일 필터 BottomSheet 화면"
                        caption="모바일 필터"
                        width={280}
                        height={509}
                      />
                    </div>
                  </div>
                </div>
                  ),
                },
                {
                  label: "판매·교환 API",
                  content: (
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">
                    2) 판매 상세 + 교환 조건 통합 API 설계 (FE 관점 제안)
                  </p>

                  <div className="mt-2 grid items-start gap-4 md:grid-cols-[1fr_220px]">
                    <div className="min-w-0">
                      <p className="text-[16px] text-neutral-600 dark:text-neutral-300">
                        화면 하나에서 &apos;판매 상세 정보&apos;와 &apos;교환
                        조건(원하는 장르/등급)&apos;을 동시에 보여줘야 했는데,
                        두 정보가 서로 다른 서비스/모델에서 관리되고 있어 API를
                        분리할지 통합할지 논의가 필요했습니다.
                      </p>

                      <div className="mt-4 rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                        <p className="font-semibold">트러블슈팅</p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                          <li>
                            문제: API를 분리하면 프론트에서 두 번 요청해야 해
                            비동기 호출 순서·에러 핸들링이 복잡해지고, DB
                            호출도 불필요하게 늘어남
                          </li>
                          <li>
                            해결: 판매 상세 조회 API 하나로 통합하기로 결정,
                            백엔드 담당자와 협의해 카드 정보 + 교환 조건까지
                            한 응답에 포함되도록 구조를 제안·설계
                          </li>
                        </ul>
                      </div>
                    </div>

                    <PortfolioImage
                      src="/projects/favorite-photo/sale-exchange.png"
                      alt="최애의 포토 판매 상세 및 교환 제안 화면"
                      caption="판매 상세 + 교환 제안"
                      width={220}
                      height={223}
                    />
                  </div>

                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-neutral-500">
                        통합 응답 — Repository
                      </p>
                      <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                        {`async function findSaleDetailById(saleId) {
  return prisma.sale.findUnique({
    where: { id: saleId },
    include: {
      photoCard: {
        include: {
          grade: true,
          genre: true,
          creator: { select: { id: true, nickname: true } },
          userCards: {
            where: { status: 'ACTIVE' },
            include: { owner: { select: { id: true, nickname: true } } },
          },
        },
      },
      saleUserCards: { include: { userCard: true } },
      desiredGrade: true,
      desiredGenre: true,
    },
  });
}`}
                      </pre>
                    </div>

                    <ul className="list-disc space-y-1 pl-5 text-[16px]">
                      <li>
                        프론트에서 API 한 번 호출로 판매 상세 + 교환 조건을
                        모두 받아 복잡성 최소화
                      </li>
                      <li>
                        효과: 교환 요청 시 조건 일치 여부를 한 화면에서
                        바로 판단 가능해지고, 상세 페이지 렌더링 속도도
                        개선됨
                      </li>
                    </ul>
                  </div>
                </div>
                  ),
                },
                {
                  label: "트랜잭션 개선",
                  content: (
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">
                    3) 구매 트랜잭션 원자성·동시성 개선 — 조건부 Atomic Update
                    (BE){" "}
                    <span className="ml-1 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-normal text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                      프로젝트 종료 후 추가 개선
                    </span>
                  </p>
                  <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                    구매 처리를 <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">prisma.$transaction</code>으로
                    감싸뒀지만, 프로젝트 종료 후 코드를 다시 보니 그 안에서도
                    원자성과 동시성이 완전히 보장되지 않는 지점들이 남아 있어
                    추가로 리팩토링했습니다.
                  </p>

                  <div className="mt-4 space-y-4">
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">트러블슈팅</p>

                      <p className="mt-3 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                        문제
                      </p>
                      <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                        <li>
                          포인트 차감/지급을 맡은{" "}
                          <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                            PointService.updatePoint()
                          </code>
                          가 트랜잭션 객체(tx)가 아닌 전역{" "}
                          <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                            prisma
                          </code>
                          를 사용 → 트랜잭션 밖에서 실행되어, 이후 카드
                          이전이 실패해도 포인트는 롤백되지 않음
                        </li>
                        <li>
                          재고·잔액을 &quot;조회 → JS에서 비교 →
                          업데이트&quot;(Check-then-Act) 순서로 처리 → 같은
                          판매에 요청이 동시에 오면 둘 다 검증을 통과해
                          초과 판매·마이너스 잔액이 생길 수 있음
                        </li>
                        <li>
                          소켓 알림을 트랜잭션 커밋 전에 전송 → 롤백되더라도
                          사용자에게는 이미 구매 완료 알림이 가 있음
                        </li>
                        <li>
                          인증만 통과하면 포인트를 임의로 늘릴 수 있는
                          API가 열려 있음
                        </li>
                      </ul>

                      <p className="mt-3 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                        해결
                      </p>
                      <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                        <li>
                          PointService 호출을 tx 컨텍스트로 통일해 포인트
                          처리까지 같은 트랜잭션 안에 포함
                        </li>
                        <li>
                          조건부 원자적 업데이트(
                          <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                            updateMany + where
                          </code>
                          )로 검증과 변경을 하나의 SQL로 묶어 동시성 제어
                        </li>
                        <li>
                          소켓 알림은 트랜잭션 커밋 성공 후에만 전송, 포인트
                          임의 증감 API 제거, 에러 코드를 404/409/400으로
                          세분화
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-neutral-500">
                        조건부 원자적 업데이트 — 재고 검증 + 차감을 한 SQL로
                      </p>
                      <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                        {`// 재고가 충분할 때만 차감 → count === 0이면 409
await tx.sale.updateMany({
  where: {
    id,
    status: 'AVAILABLE',
    saleQuantity: { gte: quantity },
  },
  data: { saleQuantity: { decrement: quantity } },
});
// 잔액 차감(points >= totalPrice), 카드 이전(ownerId = seller)에도
// 같은 조건부 updateMany 패턴 적용 → 검증과 변경이 한 번에 원자적으로 처리됨`}
                      </pre>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full min-w-120 border-collapse text-[14px]">
                        <thead>
                          <tr className="border-b border-slate-200 text-left text-neutral-500 dark:border-slate-700 dark:text-neutral-400">
                            <th className="py-1.5 pr-3 font-semibold">항목</th>
                            <th className="py-1.5 pr-3 font-semibold">Before</th>
                            <th className="py-1.5 font-semibold">After</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          <tr>
                            <td className="py-1.5 pr-3 font-medium">포인트 처리</td>
                            <td className="py-1.5 pr-3 text-neutral-500 dark:text-neutral-400">트랜잭션 밖 (prisma)</td>
                            <td className="py-1.5 text-neutral-700 dark:text-neutral-200">트랜잭션 안 (tx)</td>
                          </tr>
                          <tr>
                            <td className="py-1.5 pr-3 font-medium">재고·잔액 검증</td>
                            <td className="py-1.5 pr-3 text-neutral-500 dark:text-neutral-400">조회 후 JS 비교 (Check-then-Act)</td>
                            <td className="py-1.5 text-neutral-700 dark:text-neutral-200">조건부 updateMany 한 번</td>
                          </tr>
                          <tr>
                            <td className="py-1.5 pr-3 font-medium">카드 이전</td>
                            <td className="py-1.5 pr-3 text-neutral-500 dark:text-neutral-400">update N번 (Promise.all)</td>
                            <td className="py-1.5 text-neutral-700 dark:text-neutral-200">updateMany 1번 + 이전 수 검증</td>
                          </tr>
                          <tr>
                            <td className="py-1.5 pr-3 font-medium">소켓 알림</td>
                            <td className="py-1.5 pr-3 text-neutral-500 dark:text-neutral-400">트랜잭션 도중 전송</td>
                            <td className="py-1.5 text-neutral-700 dark:text-neutral-200">커밋 후 전송</td>
                          </tr>
                          <tr>
                            <td className="py-1.5 pr-3 font-medium">실패 응답</td>
                            <td className="py-1.5 pr-3 text-neutral-500 dark:text-neutral-400">전부 500</td>
                            <td className="py-1.5 text-neutral-700 dark:text-neutral-200">404 / 409 / 400</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <blockquote className="border-l-4 border-sky-300 pl-3 text-[15px] italic text-neutral-600 dark:border-sky-600 dark:text-neutral-300">
                      &quot;$transaction으로 감쌌다고 원자성이 보장되는 게
                      아니다. 내부에서 호출하는 함수까지 같은 트랜잭션
                      컨텍스트를 쓰는지 확인해야 한다. 동시성 문제는 락보다
                      조건부 UPDATE로 더 가볍게 풀 수 있다.&quot;
                    </blockquote>

                    <ul className="list-disc space-y-1 pl-5 text-[16px]">
                      <li>
                        락 없이 DB가 조건부 UPDATE로 원자적 처리하도록 바꿔
                        구현을 단순하게 유지하면서 race condition을 제거
                      </li>
                      <li>
                        효과: 재고 1장짜리 판매에 동시 요청이 몰려도 1건만
                        성공하고 나머지는 409로 안전하게 거부되도록 설계
                      </li>
                      <li>
                        후속 개선: 포인트 서비스의{" "}
                        <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                          claimRandomBox()
                        </code>
                        (랜덤 상자 뽑기)에도 같은 Check-then-Act 패턴이 남아
                        있는 걸 발견해 동일한 방식으로 추가 수정 (다음 페이지
                        참고)
                      </li>
                    </ul>
                  </div>
                </div>
                  ),
                },
                {
                  label: "랜덤 상자 동시성",
                  content: (
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">
                    5) 랜덤 상자 뽑기 — 동시 요청 시 제한 우회 문제 해결 (BE){" "}
                    <span className="ml-1 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-normal text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                      프로젝트 종료 후 추가 개선
                    </span>
                  </p>
                  <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                    1시간에 1번, 하루 최대 3번 포인트(10~100P)를 지급하는
                    &quot;랜덤 상자&quot; 기능입니다. 구매 트랜잭션에서 찾은
                    Check-then-Act 패턴이 이 기능에도 그대로 남아 있는 걸
                    발견해 같은 방식으로 고쳤습니다.
                  </p>

                  <div className="mt-4 space-y-4">
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">트러블슈팅</p>

                      <p className="mt-3 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                        문제
                      </p>
                      <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                        <li>
                          제한을 조회 후 JS에서 비교하는 방식(Check-then-Act)
                          으로 검사하고, 포인트 적립과 뽑기 시각·횟수 갱신을
                          따로 저장 → 조회~저장 사이 DB를 4~5번 왕복
                        </li>
                        <li>
                          동시에 여러 요청이 오면 모두 같은 이전 상태를 읽어
                          검사를 통과함
                        </li>
                        <li>
                          동시 요청들이 서로의 횟수 갱신을 덮어써(Lost
                          Update) 기록된 횟수가 실제 지급 횟수보다 적게 남음
                          → 기록만 봐서는 부정 지급을 알아챌 수 없음
                        </li>
                        <li>
                          제한에 걸려도 모두 500으로 응답해 서버 오류와
                          제한 초과를 구분할 수 없음
                        </li>
                      </ul>

                      <p className="mt-3 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                        해결
                      </p>
                      <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                        <li>
                          제한 검사와 적립을 조건부 UPDATE 하나로 통합, 제한
                          조건을 WHERE 절에 넣어 DB가 원자적으로 판단하도록
                          변경
                        </li>
                        <li>
                          변경된 행 수(count)로 성공 여부 판단 — 0개면 최신
                          상태를 다시 읽어 어떤 제한에 걸렸는지 확인 후 429
                          Too Many Requests로 응답
                        </li>
                        <li>
                          같은 문제가 있던 범용 함수{" "}
                          <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                            updatePoint
                          </code>
                          를 제거하고 중복 조회도 없앰
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-neutral-500">
                        조건부 UPDATE — 제한 검사 + 적립을 한 번에
                      </p>
                      <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                        {`// 오늘 첫 뽑기: 뽑은 적 없거나 마지막 뽑기가 어제 이전 → 횟수 초기화
updateMany({
  where: { id, OR: [{ lastClaimed: null }, { lastClaimed: { lt: todayStart } }] },
  data:  { points: { increment }, lastClaimed: now, todayClaimCount: 1 },
});

// 오늘 재뽑기: 1시간 경과 + 3회 미만일 때만
updateMany({
  where: {
    id,
    lastClaimed: { gte: todayStart, lte: oneHourAgo },
    todayClaimCount: { lt: 3 },
  },
  data: { points: { increment }, lastClaimed: now, todayClaimCount: { increment: 1 } },
});`}
                      </pre>
                    </div>

                    <div className="overflow-x-auto">
                      <p className="text-sm font-semibold text-neutral-500">
                        검증 — 동일 사용자에게 동시 요청 10건, 시나리오 3종 ×
                        5회 반복
                      </p>
                      <table className="mt-2 w-full min-w-120 border-collapse text-[14px]">
                        <thead>
                          <tr className="border-b border-slate-200 text-left text-neutral-500 dark:border-slate-700 dark:text-neutral-400">
                            <th className="py-1.5 pr-3 font-semibold">시나리오</th>
                            <th className="py-1.5 pr-3 font-semibold">Before</th>
                            <th className="py-1.5 font-semibold">After</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          <tr>
                            <td className="py-1.5 pr-3 font-medium">오늘 첫 뽑기</td>
                            <td className="py-1.5 pr-3 text-neutral-500 dark:text-neutral-400">10/10 성공 (+376~692P)</td>
                            <td className="py-1.5 text-neutral-700 dark:text-neutral-200">1/10 성공, 9건 429</td>
                          </tr>
                          <tr>
                            <td className="py-1.5 pr-3 font-medium">1회 뽑음, 1시간 경과</td>
                            <td className="py-1.5 pr-3 text-neutral-500 dark:text-neutral-400">10/10 성공 (+383~817P)</td>
                            <td className="py-1.5 text-neutral-700 dark:text-neutral-200">1/10 성공, 9건 429</td>
                          </tr>
                          <tr>
                            <td className="py-1.5 pr-3 font-medium">마지막 1회 남음</td>
                            <td className="py-1.5 pr-3 text-neutral-500 dark:text-neutral-400">10/10 성공 (+505~629P)</td>
                            <td className="py-1.5 text-neutral-700 dark:text-neutral-200">1/10 성공, 9건 429</td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="mt-2 text-[14px] text-neutral-500 dark:text-neutral-400">
                        Before는 5회 모두 10건 전부 성공해, 하루 최대
                        300P인 기능에서 한 번에 최대 817P가 지급됐고
                        횟수 카운터는 10건 지급에도 적게 기록됐습니다.
                        After는 15회 모두 정확히 1건만 성공했습니다.
                      </p>
                    </div>

                    <blockquote className="border-l-4 border-sky-300 pl-3 text-[15px] italic text-neutral-600 dark:border-sky-600 dark:text-neutral-300">
                      &quot;제한 로직은 애플리케이션 코드가 아니라 DB가
                      원자적으로 판단하게 해야 한다. 앱에서 검사한 결과는
                      저장하는 순간 이미 낡은 정보일 수 있다. 동시성 버그는
                      &apos;될 것 같다&apos;가 아니라 동시 요청 테스트로
                      재현하고 수치로 확인해야 한다.&quot;
                    </blockquote>

                    <ul className="list-disc space-y-1 pl-5 text-[16px]">
                      <li>
                        PostgreSQL에서 같은 행에 대한 UPDATE는 행 단위
                        락으로 하나씩 차례대로 실행되므로, 별도의 락이나
                        Redis 없이도 하나만 성공하도록 보장됨
                      </li>
                      <li>
                        비관적 락은 Prisma에서 raw SQL이 필요하고 낙관적
                        락은 스키마 변경과 재시도 로직이 필요한데,
                        &quot;횟수 &lt; N&quot;·&quot;시각 ≤ T&quot;처럼
                        단순한 조건에는 조건부 UPDATE가 가장 가벼움
                      </li>
                      <li>
                        효과: 카드 구매 기능의 초과 판매 문제에 썼던 패턴을
                        다른 기능에도 일관되게 적용한 사례
                      </li>
                    </ul>
                  </div>
                </div>
                  ),
                },
                {
                  label: "UI 즉시 반영",
                  content: (
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">
                    4) 구매 후 UI 즉시 반영 — useMutation (FE)
                  </p>

                  <div className="mt-2 grid items-start gap-4 md:grid-cols-[1fr_220px]">
                    <div className="min-w-0">
                      <p className="text-[16px] text-neutral-600 dark:text-neutral-300">
                        구매 버튼을 누르면 잔여 수량이 즉시 반영돼야 하는데,
                        처음에는 useEffect로 서버 데이터 변화를 감지해 반영하려
                        했지만 네트워크 딜레이 때문에 원하는 타이밍에 UI가
                        갱신되지 않았습니다.
                      </p>

                      <div className="mt-4 rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                        <p className="font-semibold">트러블슈팅</p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                          <li>
                            문제: 외부 API 호출 완료 시점과 React 상태 변화가
                            비동기적으로 분리되어, 구매 직후 잔여 수량이 즉각
                            반영되지 않음
                          </li>
                          <li>
                            해결: React Query{" "}
                            <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                              useMutation
                            </code>
                            으로 구매 요청과 상태 변경을 한 곳에서 관리하고,
                            성공 시 로컬 상태를 바로 업데이트
                          </li>
                        </ul>
                      </div>
                    </div>

                    <PortfolioImage
                      src="/projects/favorite-photo/purchase-success.png"
                      alt="최애의 포토 구매 성공 모달"
                      caption="구매 성공 모달"
                      width={220}
                      height={175}
                    />
                  </div>

                  <div className="mt-4 space-y-4">
                    <div>
                      <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                        {`const { mutate, isPending } = useMutation({
  mutationFn: () => storeService.purchaseCard(cardId, quantity),
  onSuccess: (data) => {
    setLocalRemaining((prev) => prev - quantity); // 잔여 수량 즉각 반영
    if (onSuccess) onSuccess(data);
    openStateModal(200, "구매", { grade, name: cardName, count: quantity });
  },
  onError: (err) => {
    openStateModal(err.status || 400, "구매", { grade, name: cardName, count: quantity });
  },
});`}
                      </pre>
                    </div>

                    <ul className="list-disc space-y-1 pl-5 text-[16px]">
                      <li>구매 직후 잔여 수량·총 가격이 즉시 반영되어 사용자 경험 개선</li>
                      <li>비동기 요청과 상태 변경을 한 번에 관리해 코드가 간결해짐</li>
                      <li>효과: 네트워크 딜레이·실패 상황에서도 안정적인 상태 관리와 에러 핸들링 확보</li>
                    </ul>
                  </div>
                </div>
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
                        프로젝트를 마친 뒤에도 구매 트랜잭션과 랜덤 상자
                        기능에 동시성 문제가 남아있다는 걸 직접 찾아내
                        조건부 UPDATE로 고치고, 동시 요청 테스트로 수치까지
                        확인해봤습니다. &quot;$transaction으로 감쌌다고
                        끝이 아니다&quot;라는 걸 코드로 검증하면서 배운 게
                        가장 컸던 부분입니다.
                      </p>
                      <p className="mt-3">
                        아쉬운 점도 있었습니다. 팀원들로부터 반응형 CSS
                        관련 좋은 인사이트를 들었지만 프로젝트 안에 완전히
                        녹이지 못했고, 중복되는 로직·상태 관리를 커스텀
                        훅으로 분리하는 작업도 일부만 끝냈습니다. 백엔드
                        에러 응답도 상태 코드와 메시지 수준에 머물러 있어
                        일관된 응답·로깅 체계가 필요하다고 느꼈는데, 이
                        부분도 트랜잭션 수정 때처럼 나중에 직접 찾아서
                        보완할 계획입니다.
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
