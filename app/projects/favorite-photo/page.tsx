import type { Metadata } from "next";
import Link from "next/link";
import { ProjectPager } from "@/components/ProjectPager";

export const metadata: Metadata = {
  title: "FavoritePhoto | Wooju",
  description: "포인트 기반 포토카드 거래·교환 플랫폼",
};

export default function FavoritePhotoPage() {
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
                  label: "주요 구현 기능",
                  content: (
              <div className="space-y-3">
                {/* 1) 필터링 시스템 — useFilterSheet */}
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
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

                {/* 2) 판매 상세 + 교환 조건 통합 API */}
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">
                    2) 판매 상세 + 교환 조건 통합 API 설계 (FE 관점 제안)
                  </p>
                  <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                    화면 하나에서 &apos;판매 상세 정보&apos;와 &apos;교환
                    조건(원하는 장르/등급)&apos;을 동시에 보여줘야 했는데,
                    두 정보가 서로 다른 서비스/모델에서 관리되고 있어 API를
                    분리할지 통합할지 논의가 필요했습니다.
                  </p>

                  <div className="mt-4 space-y-4">
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
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

                {/* 3) 구매 트랜잭션 */}
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">
                    3) 구매 처리 트랜잭션 — Prisma $transaction (BE)
                  </p>
                  <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                    구매 처리는 포인트 차감 → 포인트 지급 → 카드 소유권
                    이전 → 판매 수량/상태 변경을 순차적으로 실행합니다.
                    초기에는 실패 시 try-catch로 이전 작업을 수동
                    롤백했는데, 롤백 로직이 누락되면 포인트와 카드 소유권
                    상태가 서로 어긋나는 데이터 불일치가 발생했습니다.
                  </p>

                  <div className="mt-4 space-y-4">
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">트러블슈팅</p>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                        <li>
                          문제: 포인트는 차감됐는데 카드 소유권은 안 바뀌거나,
                          반대로 소유권만 바뀌는 등 수동 롤백 누락으로 데이터
                          무결성이 깨짐
                        </li>
                        <li>
                          해결: 구매 처리 전체를{" "}
                          <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                            prisma.$transaction
                          </code>
                          으로 묶어, 중간에 하나라도 실패하면 전체가 자동
                          롤백되도록 전환
                        </li>
                      </ul>
                    </div>

                    <div>
                      <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                        {`await prisma.$transaction(async (tx) => {
  // 1. 판매 데이터 확인 및 유효성 검사
  // 2. 구매자 포인트 차감
  // 3. 판매자 포인트 지급 (create 또는 update)
  // 4. 카드 소유권 이전
  // 5. 판매 수량 및 상태 업데이트
  // 6. 알림 메시지 생성 및 발송
});`}
                      </pre>
                    </div>

                    <ul className="list-disc space-y-1 pl-5 text-[16px]">
                      <li>어떤 단계에서든 에러가 나면 전체 작업이 취소되어 불완전한 상태가 DB에 남지 않음</li>
                      <li>try-catch 기반 수동 롤백 코드를 제거해 로직이 간결해지고 실수 가능성 감소</li>
                      <li>효과: 여러 개발자가 신뢰하고 쓸 수 있는 핵심 구매 처리 로직 확보</li>
                    </ul>
                  </div>
                </div>

                {/* 4) 구매 후 UI 즉시 반영 */}
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">
                    4) 구매 후 UI 즉시 반영 — useMutation (FE)
                  </p>
                  <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                    구매 버튼을 누르면 잔여 수량이 즉시 반영돼야 하는데,
                    처음에는 useEffect로 서버 데이터 변화를 감지해 반영하려
                    했지만 네트워크 딜레이 때문에 원하는 타이밍에 UI가
                    갱신되지 않았습니다.
                  </p>

                  <div className="mt-4 space-y-4">
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
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
                        팀원들로부터 반응형 CSS에 대한 좋은 인사이트를 많이 얻었지만
                        실제 프로젝트에 완벽히 적용하지 못한 점, 그리고 중복되는
                        로직·상태 관리를 커스텀 훅으로 분리하는 작업이 일부
                        미흡해 재사용성을 더 높일 기회를 놓친 점이 아쉬웠습니다.
                        후속 리팩토링 계획이 있었지만 일정상 실행하지 못해 앞으로
                        개선할 여지가 있습니다. 백엔드 쪽에서는 에러 응답이 단순
                        상태 코드와 메시지 수준에 머물러 있어, 다양한 에러 케이스에
                        대한 구체적이고 일관된 응답·로깅 체계와 표준화된 응답
                        포맷(JSON 스키마 등) 도입이 필요하다고 느꼈습니다.
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
