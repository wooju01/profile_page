// app/projects/snack/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Snack | Wooju",
  description:
    "상품/주문/회원 관리 기능을 포함한 풀스택 서비스에서 Product API와 관리자 페이지를 구현",
};

export default function PortfolioPage() {
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
              Snack
            </h1>
            <p className="text-[16px] md:text-[18px] text-neutral-600 dark:text-neutral-300">
              상품/주문/회사 구성원 관리와 결제까지 이어지는 운영 플로우를
              다루는 서비스입니다. 백엔드에서는 <strong>Product API</strong>를,
              프론트엔드에서는 <strong>회원 관리/주문 관리/프로필</strong>{" "}
              페이지를 구현했습니다.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                Next.js
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                React
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                TypeScript
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                Node.js
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                Express
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                Prisma
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                PostgreSQL
              </span>
            </div>
          </header>

          <div className="mt-6 space-y-5 text-[16px] md:text-[17px] text-neutral-700 dark:text-neutral-200">
            <section className="space-y-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                목표
              </h2>
              <p>
                운영자가 실무에서 바로 쓰는 화면(회원/주문/프로필)과 대용량
                목록을 견디는 상품 API를 만들어, “업무 플로우를 끊김 없이”
                이어주는 것이 목표였습니다.
              </p>
            </section>

            <section className="space-y-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                역할
              </h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>BE</strong>: Product API(등록/목록·상세/수정/삭제/내
                  상품), 이미지 업로드(S3+CloudFront), 소프트 딜리트 트랜잭션,
                  Swagger 문서화
                </li>
                <li>
                  <strong>FE</strong>: 회원 관리(검색/페이징/초대/삭제/권한),
                  주문 관리(정렬/페이징/승인·반려/예산 검증),
                  프로필(회사명/비밀번호 변경, 권한 기반 제어), 반응형·ARIA
                  접근성
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
                    <li>Next.js, React, TypeScript</li>
                    <li>Tailwind CSS, tailwind-merge, clsx</li>
                    <li>React Query, Zustand</li>
                    <li>Zod, React Hook Form</li>
                    <li>ESLint, Prettier, Sentry</li>
                    <li>OpenAI, TossPayments SDK</li>
                    <li>Vercel, GitHub, Figma, Notion</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                    Backend
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Node.js, Express, TypeScript</li>
                    <li>Prisma, PostgreSQL</li>
                    <li>Jest, Swagger, Sentry</li>
                    <li>AWS S3, CloudFront</li>
                    <li>Docker, node-cron</li>
                    <li>Route53, RDS, EC2, GitHub, Notion</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                주요 구현 기능
              </h2>

              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">1) Product API (BE)</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      Controller/Service/Repository 계층 분리 + Swagger 문서화
                    </li>
                    <li>
                      목록 조회: 정렬/카테고리 트리 필터 + 커서
                      페이지네이션(nextCursor)
                    </li>
                    <li>
                      이미지 업로드: Multer → S3 업로드 → CloudFront URL 반환
                    </li>
                    <li>
                      찜 연동: isFavorite를 서버에서 합성 반환(추가 쿼리 제거)
                    </li>
                    <li>
                      삭제 트랜잭션: Product 소프트 딜리트 + CartItem 소프트
                      딜리트 + Favorite 정리(원자적 처리)
                    </li>
                  </ul>
                  <div className="mt-4 space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      상품 조회 API 핵심 구현
                    </p>
                    {/* 설명 */}
                    <p className="text-[16px] text-neutral-600 dark:text-neutral-300">
                      커서 기반 페이지네이션과 정렬/카테고리 필터를 적용한 상품
                      조회 API를 구현했습니다. Controller → Service → Repository
                      구조를 통해 관심사를 분리하고, 사용자별 찜 여부를 서버에서
                      계산하여 프론트 로직을 단순화했습니다.
                    </p>

                    {/* Controller */}
                    <div>
                      <p className="text-sm font-semibold text-neutral-500">
                        Controller
                      </p>
                      <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                        {`const items = await productService.getProductList({
                            sort: sortOption,
                            category: categoryId,
                            take,
                            cursor: cursorObj,
                            userId: user?.id,
                          });

                          const nextCursor =
                            items.length === take ? items[items.length - 1].id : null;`}
                      </pre>
                    </div>

                    {/* Repository 핵심 */}
                    <div>
                      <p className="text-sm font-semibold text-neutral-500">
                        Repository
                      </p>
                      <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                        {`const products = await prisma.product.findMany({
                        where: {
                          deletedAt: null,
                          ...(categoryIds && { categoryId: { in: categoryIds } }),
                        },
                        orderBy,
                        take,
                        cursor,
                        skip: cursor ? 1 : 0, // 커서 기준 중복 데이터 제거
                          include: {
                            favorites: userId
                            ? { where: { userId }, select: { id: true } }
                            : false,
                          },
                        });

                        return products.map((product) => ({
                          ...product,
                          isFavorite: product.favorites.length > 0, // 서버에서 찜 여부 계산
                        }));`}
                      </pre>
                    </div>
                    <section className="space-y-2 mt-6">
                      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        트러블슈팅
                      </h2>

                      <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50 ">
                        <p className="font-semibold">
                          커서 페이지네이션 중 중복 데이터 발생 문제
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                          <li>
                            문제: 동일한 정렬 기준에서 커서 이동 시 중복 데이터
                            발생
                          </li>
                          <li>해결: skip: 1 처리로 이전 커서 데이터 제외</li>
                          <li>
                            결과: 중복/누락 없는 안정적인 페이지네이션 구현
                          </li>
                        </ul>
                      </div>
                    </section>

                    {/* 핵심 포인트 */}
                    <ul className="list-disc space-y-1 pl-5 text-[16px] text-neutral-700 dark:text-neutral-200">
                      <li>
                        커서 기반 페이지네이션으로 대용량 데이터 안정적 처리
                      </li>
                      <li>skip: 1 처리로 중복 데이터 제거</li>
                      <li>isFavorite 서버 계산으로 추가 API 호출 제거</li>
                      <li>계층 구조 분리로 유지보수성 향상</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">2) 회원 관리 핵심 구현 (FE)</p>
                  <p className="text-[16px] text-neutral-600 dark:text-neutral-300">
                    React Query를 활용하여 회원 목록을 서버 상태로 관리하고,
                    검색어 변경 시 자동으로 데이터를 재조회하도록 구현했습니다.
                    또한 mutation 이후 invalidateQueries를 통해 최신 상태를
                    유지했습니다.
                  </p>

                  {/* 핵심 코드 */}
                  <div>
                    <p className="text-sm font-semibold text-neutral-500">
                      React Query (데이터 조회)
                    </p>
                    <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                      {`const { data } = useQuery({
  queryKey: ["companyUsers", name],
  queryFn: () => fetchAllCompanyUsers({ name, limit: 50 }),
});`}
                    </pre>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-neutral-500">
                      Mutation + 캐시 무효화
                    </p>
                    <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                      {`const deleteUserMutation = useMutation({
  mutationFn: deleteUserById,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["companyUsers"] });
  },
});`}
                    </pre>
                  </div>

                  {/* 핵심 포인트 */}
                  <ul className="list-disc space-y-1 pl-5 text-[16px]">
                    <li>React Query로 서버 상태 관리</li>
                    <li>invalidateQueries로 데이터 일관성 유지</li>
                    <li>검색어 기반 자동 refetch</li>
                    <li>Toast UX로 사용자 피드백 제공</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">3) 주문 관리 (FE)</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>대기 주문 정렬/페이징 + 승인/반려 모달 처리</li>
                    <li>
                      승인 플로우에 예산 검증을 통합해 부족 시 결제 진입 차단
                    </li>
                    <li>
                      상태 변경 후 목록/예산 자동 재조회 + 로딩/토스트 피드백
                    </li>
                    <li>
                      React Query mutation + invalidateQueries로 상태 변경 후
                      데이터 일관성 유지
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                  <p className="font-semibold">4) 프로필 (FE)</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>권한 기반 제어: 최고관리자만 회사명 편집 가능</li>
                    <li>
                      입력 가드 + “실제 변경” 있을 때만 제출
                      가능(회사명/비밀번호)
                    </li>
                    <li>
                      성공 시 사용자 재조회 + 토스트 + 리다이렉트(/products)
                    </li>
                    <li>
                      조건부 렌더링으로 권한별 UI 분기 및 불필요한 입력 방지
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
