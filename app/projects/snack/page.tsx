// app/projects/snack/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ProjectPager } from "@/components/ProjectPager";
import { PortfolioImage } from "@/components/PortfolioImage";

export const metadata: Metadata = {
  title: "Snack | Wooju",
  description:
    "상품/주문/회원 관리 기능을 포함한 풀스택 서비스에서 Product API와 관리자 페이지를 구현",
};

export default function PortfolioPage() {
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
              Snack
            </h1>
            <p className="text-[16px] md:text-[18px] text-neutral-600 dark:text-neutral-300">
              여러 플랫폼에 흩어져 있는 사내 간식 구매 내역을 한 곳에서
              관리하는 원스톱 솔루션입니다. 백엔드에서는{" "}
              <strong>Product API</strong>를, 프론트엔드에서는{" "}
              <strong>회원 관리/주문 관리/프로필</strong> 페이지를
              구현했습니다.
            </p>
            <p className="text-[13px] text-neutral-500 dark:text-neutral-400">
              2025.07.01 ~ 2025.08.18
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
            <div className="flex flex-wrap gap-2 text-sm">
              <a
                href="https://github.com/wooju01/6-Snack-FE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
              >
                <span>Frontend 저장소</span>
                <span aria-hidden>↗</span>
              </a>
              <a
                href="https://github.com/wooju01/6-Snack-BE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
              >
                <span>Backend 저장소</span>
                <span aria-hidden>↗</span>
              </a>
              <a
                href="https://6-snack-fe.vercel.app/"
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
                      <section className="space-y-1">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                          목표
                        </h2>
                        <p>
                          쿠팡·네이버 쇼핑 등 여러 플랫폼에서 산발적으로
                          구입하는 사내 간식 구매 내역을 한 곳에서 관리하기
                          어렵다는 문제에서 출발했습니다. 운영자가 실무에서
                          바로 쓰는 화면(회원/주문/프로필)과 대용량 목록을
                          견디는 상품 API를 만들어, &ldquo;업무 플로우를 끊김
                          없이&rdquo; 이어주는 것이 목표였습니다.
                        </p>
                      </section>

                      <section className="space-y-1">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                          역할
                        </h2>
                        <ul className="list-disc space-y-1 pl-5">
                          <li>
                            <strong>BE</strong>: 상품 목록·상세 조회, 내가
                            등록한 상품 목록, 카테고리 전체 조회, 상품
                            등록·수정·삭제, 관리자 상품 삭제 API 구현
                          </li>
                          <li>
                            <strong>FE</strong>: 공통 컴포넌트(Button, Card,
                            SearchBar, Badge), 회원 관리 페이지, 구매 요청
                            관리 페이지, 프로필 페이지 구현
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
                              <li>Jest, Swagger, Sentry, Morgan</li>
                              <li>AWS S3, CloudFront, Axios</li>
                              <li>Docker, node-cron</li>
                              <li>Route53, RDS, EC2, GitHub, Notion</li>
                            </ul>
                          </div>
                        </div>
                      </section>
                    </div>
                  ),
                },
                {
                  label: "Product API",
                  content: (
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">1) Product API (BE)</p>

                      <div className="mt-2 space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            구현 목표
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              상품 등록/목록·상세/수정/삭제 및 내 상품 관리
                              제공, Swagger 문서화로 협업 효율 확보
                            </li>
                            <li>
                              대용량 목록을 위한 커서 페이지네이션·정렬·카테고리
                              트리 필터와 안정적인 이미지 업로드 파이프라인
                              구축
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
                                POST /product
                              </code>{" "}
                              상품 등록 /{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                GET /products
                              </code>{" "}
                              목록 조회(정렬·카테고리·커서 페이지네이션)
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                GET /products/:id
                              </code>{" "}
                              상세 조회 /{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                PATCH /products/:id
                              </code>{" "}
                              수정(작성자/관리자)
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                DELETE /products/:id
                              </code>{" "}
                              삭제(소프트 딜리트) /{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                GET /product/category
                              </code>{" "}
                              카테고리 트리
                            </li>
                            <li>
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                GET /my/products
                              </code>{" "}
                              내 상품 목록(메타 포함)
                            </li>
                            <li>
                              이미지 업로드: Multer → S3 업로드 →
                              CloudFront URL 반환
                            </li>
                          </ul>
                        </div>

                        <p className="text-[16px] text-neutral-600 dark:text-neutral-300">
                          커서 기반 페이지네이션과 정렬/카테고리 필터를
                          적용한 상품 조회 API를 구현했습니다. Controller →
                          Service → Repository 구조를 통해 관심사를
                          분리하고, 사용자별 찜 여부를 서버에서 계산하여
                          프론트 로직을 단순화했습니다.
                        </p>

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

                        <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                          <p className="font-semibold">트러블슈팅</p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              문제: 동일한 정렬 기준에서 커서 이동 시 중복
                              데이터 발생
                            </li>
                            <li>
                              해결:{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                skip: 1
                              </code>{" "}
                              처리로 이전 커서 데이터 제외 → 중복/누락 없는
                              안정적인 페이지네이션 구현
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            기술적 성과
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              커서 페이지네이션·카테고리 트리·정렬로 대용량
                              목록 응답 성능 향상 및 FE 구현 단순화
                              (isFavorite 서버 합성)
                            </li>
                            <li>
                              S3+CloudFront 업로드 파이프라인(안전
                              파일명·에러 매핑)으로 안정적 이미지 제공
                            </li>
                            <li>
                              삭제 트랜잭션(Product + CartItem 소프트 딜리트
                              + Favorite 정리)으로 데이터 일관성 보장
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "회원 관리",
                  content: (
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">2) 회원 관리 페이지 (FE)</p>

                      <div className="mt-2 grid items-start gap-4 md:grid-cols-[1fr_280px]">
                        <div className="min-w-0 space-y-4">
                          <div>
                            <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                              구현 목표
                            </p>
                            <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                              <li>
                                회사 구성원 목록을 한 화면에서
                                검색/페이징/초대/삭제/권한 변경까지
                                직관적으로 제공
                              </li>
                              <li>
                                모바일/태블릿/데스크톱 반응형 UI와 접근성
                                (ARIA) 준수
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
                                  User
                                </code>
                                : 목록 조회·검색·페이징, 초대/삭제 액션,
                                모달/토스트 관리 컨테이너
                              </li>
                              <li>
                                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                  InviteMemberModal
                                </code>
                                : 회원 초대(이름·이메일·권한) 및 권한 수정
                                모드 통합, 입력 검증/제출
                              </li>
                              <li>
                                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                  MemberList
                                </code>
                                : 구성원 단위 행(모바일/데스크톱 레이아웃),
                                권한 변경/계정 삭제 트리거
                              </li>
                            </ul>
                          </div>
                        </div>

                        <PortfolioImage
                          src="/projects/snack/member-management.png"
                          alt="Snack 회원 관리 페이지 화면"
                          caption="회원 관리"
                          width={280}
                          height={169}
                        />
                      </div>

                      <div className="mt-4 space-y-4">
                        <ul className="list-disc space-y-1 pl-5 text-[16px]">
                          <li>
                            권한 변경/계정 삭제/회원 초대는 관리 권한
                            시나리오에 맞춰 모달로 수행, 권한 수정 모드에서는
                            이름/이메일 읽기 전용
                          </li>
                          <li>
                            변경 작업 후 목록을 재요청해 서버 데이터 최신성
                            보장
                          </li>
                          <li>
                            초대 시 이름 공백·이메일 형식(Zod) 검증, &ldquo;이미
                            초대됨/이미 등록됨&rdquo; 등 충돌 상황은 구체
                            메시지로 안내
                          </li>
                          <li>
                            모바일은 카드형 + 메뉴 드롭다운, 데스크톱은
                            테이블형(이름/메일/권한/비고), 목록·내비게이션에
                            ARIA 역할·라벨 적용
                          </li>
                        </ul>

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

                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            기술적 성과
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              변경 작업 후 목록 자동 갱신 + 즉시 토스트
                              피드백으로 데이터 최신성·사용자 신뢰 확보
                            </li>
                            <li>
                              초대/권한수정/삭제 플로우를 모듈형 컴포넌트로
                              분리해 재사용성과 유지보수성 향상
                            </li>
                            <li>
                              모바일·데스크톱 반응형과 ARIA 적용으로 실사용
                              환경 전반에서 접근성·가독성 강화
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "주문 관리",
                  content: (
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">3) 주문 관리 페이지 (FE)</p>

                      <div className="mt-2 grid items-start gap-4 md:grid-cols-[1fr_220px]">
                        <div className="min-w-0 space-y-4">
                          <div>
                            <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                              구현 목표
                            </p>
                            <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                              <li>
                                보류(대기) 중인 주문을 한 화면에서
                                조회·정렬·페이징하고, 승인/반려 처리 및 예산
                                확인까지 즉시 수행
                              </li>
                              <li>
                                모바일/태블릿/데스크톱 반응형 UI와 접근성
                                (ARIA) 준수
                              </li>
                            </ul>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                              컴포넌트 구조 &amp; 동작 흐름
                            </p>
                            <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                              <li>
                                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                  Order
                                </code>
                                : 대기 주문 목록 조회·정렬·페이징, 승인/반려
                                모달 열기, 결제 진입, 토스트/로딩/쿼리 갱신
                              </li>
                              <li>
                                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                  RequestList
                                </code>
                                : 주문 요약 행 목록(모바일/데스크톱
                                레이아웃), 각 행의 승인/반려 트리거
                              </li>
                              <li>
                                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                  OrderManageModal
                                </code>
                                : 승인/반려 입력(관리자 메시지)과 예산
                                검증, 상태 업데이트 실행
                              </li>
                              <li>
                                승인 시 총액·배송비 반영 후 예산 차감 금액을
                                계산해 부족하면 차단, 충분하면 결제
                                플로우로 이동
                              </li>
                              <li>
                                승인/반려 완료 시 주문/예산 목록을 다시
                                불러와 최신 상태 유지
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-col gap-3">
                          <PortfolioImage
                            src="/projects/snack/order-list.png"
                            alt="Snack 구매 요청 관리 목록 화면"
                            caption="구매 요청 관리"
                            width={220}
                            height={194}
                          />
                          <PortfolioImage
                            src="/projects/snack/order-approve-modal.png"
                            alt="Snack 구매 요청 승인 모달"
                            caption="구매 요청 승인 모달"
                            width={140}
                            height={183}
                          />
                        </div>
                      </div>

                      <div className="mt-4 space-y-4">
                        <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                          <p className="font-semibold">
                            트러블슈팅 — 반응형 전환 시 페이지네이션 어긋남
                          </p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              문제: 데스크톱/태블릿/모바일마다 한 화면에
                              보이는 항목 수가 달라, 태블릿에선 1페이지만
                              존재하는데 데스크톱(2페이지) 상태에서 태블릿으로
                              전환하면 2페이지에 그대로 머무는 불일치 발생
                            </li>
                            <li>
                              해결: 화면 크기에 따른 항목 수(
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                visibleCount
                              </code>
                              )를 훅으로 일원화하고, 화면 전환으로 값이
                              바뀌면 이전 offset을 유지한 채 새
                              visibleCount에 맞춰 페이지 번호를 재계산(최소
                              1로 클램핑)
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500">
                            주문 목록 조회
                          </p>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`const offset = (currentPaginationPage - 1) * visibleCount;

const { data: orderData, isLoading, error } = usePendingOrders({
  offset,
  limit: visibleCount,
  orderBy,
});`}
                          </pre>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500">
                            visibleCount가 변경될 때 페이지 조정
                          </p>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`useEffect(() => {
  if (prevVisibleCountRef.current !== visibleCount) {
    const currentOffset =
      (currentPaginationPage - 1) * prevVisibleCountRef.current;
    const newPage = Math.floor(currentOffset / visibleCount) + 1;
    const adjustedPage = Math.max(1, newPage);

    setCurrentPaginationPage(adjustedPage);
    prevVisibleCountRef.current = visibleCount;
  }
}, [visibleCount, currentPaginationPage]);`}
                          </pre>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            기술적 성과
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              반응형 전환 후에도 같은 전체 위치(offset)를
                              유지하도록 새 페이지를 즉시 보정해 빈 화면·불일치
                              제거
                            </li>
                            <li>
                              예산 검증을 승인 플로우에 통합해 비즈니스
                              제약을 UI 레벨에서 선제적으로 보장
                            </li>
                            <li>
                              상태 변경 후 목록 자동 갱신으로 데이터
                              최신성·사용자 신뢰 향상
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "프로필",
                  content: (
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">4) 프로필 페이지 (FE)</p>

                      <div className="mt-2 grid items-start gap-4 md:grid-cols-[1fr_240px]">
                        <div className="min-w-0 space-y-4">
                          <div>
                            <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                              구현 목표
                            </p>
                            <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                              <li>
                                사용자 정보 확인과 프로필 변경(회사명/비밀번호)을
                                직관적으로 제공
                              </li>
                              <li>
                                권한에 따라 편집 가능 항목을 구분하고,
                                반응형·접근성(ARIA)을 준수
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
                                  ProfileForm
                                </code>
                                : 폼 상태/검증/제출 orchestration, 성공/실패
                                토스트, 리다이렉트
                              </li>
                              <li>
                                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                  ProfileField
                                </code>
                                : 라벨·값 표시/입력 필드 재사용 컴포넌트
                              </li>
                              <li>
                                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                  ProfilePasswordSection
                                </code>
                                : 비밀번호/비밀번호 확인, 보기 토글 포함
                              </li>
                              <li>
                                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                  ProfileSubmitButton
                                </code>
                                : 유효성·변경 여부·로딩 상태에 따른 버튼
                                활성/문구 제어
                              </li>
                            </ul>
                          </div>
                        </div>

                        <PortfolioImage
                          src="/projects/snack/profile.png"
                          alt="Snack 프로필 변경 화면"
                          caption="내 프로필 변경"
                          width={240}
                          height={227}
                        />
                      </div>

                      <div className="mt-4 space-y-4">
                        <ul className="list-disc space-y-1 pl-5 text-[16px]">
                          <li>
                            최고관리자만 회사명 편집 가능, 그 외 필드는
                            표시 전용 + 역할 라벨(일반/관리자/최고관리자)
                            표기
                          </li>
                          <li>
                            &ldquo;실제 변경&rdquo;이 있을 때만 제출
                            가능(회사명 변경 또는 비밀번호 입력)
                          </li>
                          <li>
                            역할/변경사항에 따라 API 분기, 성공 시 폼
                            초기화·사용자 재조회·토스트 후 페이지 이동
                          </li>
                        </ul>

                        <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                          <p className="font-semibold">
                            트러블슈팅 — 흩어진 유효성 검사
                          </p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              문제: 필드별 수기(if) 검증이 흩어져 누락/중복이
                              발생했고, 오류 메시지·접근성(ARIA) 연결도
                              불일치
                            </li>
                            <li>
                              해결: 폼 레벨 검증을 Zod 스키마로 표준화하고
                              react-hook-form + zodResolver로 일원화,
                              회사명은 입력 가드(허용 문자·길이)로 사전
                              필터링 + 스키마 오류 메시지를 ARIA로 연결
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500">
                            RHF 에러를 필드로 전달
                          </p>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`<ProfilePasswordSection
  passwordRegister={register("password")}
  confirmPasswordRegister={register("confirmPassword")}
  passwordError={errors.password?.message}
  confirmPasswordError={errors.confirmPassword?.message}
/>`}
                          </pre>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500">
                            입력 가드 — 회사명 허용 문자 + 길이 제한
                          </p>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`if (CompanyName) {
  // 허용 문자 + 최대 20자
  newValue = newValue
    .replace(/[^a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ()(),._\\-\\s]/g, "")
    .slice(0, 20);
  e.target.value = newValue;
}`}
                          </pre>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                            기술적 성과
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              권한 인지형 폼 설계로 편집 가능 항목을 자동
                              제한해 안전한 편집 경험 제공
                            </li>
                            <li>
                              검증 로직 단일화로 누락/중복 제거, 명확한
                              에러/토스트 피드백으로 UX 안정성 강화
                            </li>
                            <li>
                              입력 가드 + 스키마 이중 방어로 서버 전송 전
                              오류 대부분 차단
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "성능 개선",
                  content: (
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">
                        프로필 페이지 성능 개선 — Lighthouse 78 → 99
                      </p>
                      <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                        프로필 페이지에서 초기 렌더 지연과 입력 시 잦은
                        렌더링으로 인터랙션 체감 성능이 떨어졌고, Lighthouse
                        성능 점수가 78점에 머물렀습니다.
                      </p>

                      <div className="mt-4 space-y-4">
                        <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                          <p className="font-semibold">원인 분석</p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              불필요한 상태 관리와 중복 로직: 파생 상태를
                              수동 관리해 입력이 바뀔 때마다 불필요한 렌더
                              발생
                            </li>
                            <li>
                              잘못된 타이밍의 네트워크/알림 처리: 유효하지
                              않은 상태에서도 alert/요청이 트리거돼 메인
                              스레드 점유 증가
                            </li>
                            <li>
                              분산된 검증/스타일 계산: 버튼 활성화 조건이
                              흩어져 렌더링 비용이 누적
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500">
                            파생 상태 — Before
                          </p>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`const isCompanyChanged =
  role === Role.SUPER_ADMIN && company !== originalCompany;
const isPasswordValid =
  password.length >= 8 && password === confirmPassword && password.length > 0;
const isFormValid = isCompanyChanged || isPasswordValid;
const buttonType = isFormValid ? "black" : "grayDisabled";`}
                          </pre>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500">
                            react-hook-form + zod로 단일 게이트 — After
                          </p>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`const {
  register, handleSubmit, watch, setValue,
  formState: { errors, isValid }, reset,
} = useForm({ resolver: zodResolver(profileSchema), mode: "onChange" });

const hasCompanyChanged = Boolean(
  typedUser?.role === Role.SUPER_ADMIN &&
    company?.trim() !== (typedUser?.company?.name || "")
);
const hasPasswordChanged = Boolean(password && password.length > 0);
const hasAnyChanges = hasCompanyChanged || hasPasswordChanged;
const isFormValid = Boolean(hasAnyChanges && isValid);`}
                          </pre>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500">
                            동기 alert → 비동기 Toast
                          </p>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`// Before: alert("정보가 변경되었습니다."); — 메인 스레드 블로킹

// After
const showToast = (message, variant) => {
  if (timerRef.current) clearTimeout(timerRef.current);
  setToastMessage(message);
  setToastVariant(variant);
  setToastVisible(true);
  timerRef.current = setTimeout(() => setToastVisible(false), 3000);
};`}
                          </pre>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <PortfolioImage
                            src="/projects/snack/lighthouse-before.png"
                            alt="프로필 페이지 Lighthouse 성능 점수 개선 전 78점"
                            caption="Before — 78점"
                            width={220}
                            height={230}
                          />
                          <PortfolioImage
                            src="/projects/snack/lighthouse-after.png"
                            alt="프로필 페이지 Lighthouse 성능 점수 개선 후 99점"
                            caption="After — 99점"
                            width={220}
                            height={275}
                          />
                        </div>

                        <ul className="list-disc space-y-1 pl-5 text-[16px]">
                          <li>Lighthouse 성능 점수 78 → 99 (약 27% 향상)</li>
                          <li>
                            Total Blocking Time 및 메인 스레드 JS 실행 시간
                            감소
                          </li>
                          <li>
                            불필요한 렌더/요청 제거로 입력 반응성 및 체감
                            속도 향상
                          </li>
                          <li>
                            버튼 상태가 명확해져 잘못된 제출이 사전 차단되어
                            UX 개선
                          </li>
                        </ul>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "공통 컴포넌트",
                  content: (
                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                      <p className="font-semibold">
                        공통 버튼 컴포넌트 — Tailwind 유틸 충돌 해결
                      </p>
                      <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                        공통 버튼을 쓰다 보니 페이지별로 className을 추가하면서
                        Tailwind 유틸들이 중복·충돌했습니다. 같은 계열
                        유틸(예: 기본 패딩 + 개별 패딩)이 같이 들어가면
                        시각적으로는 마지막 것만 적용되는데, 클래스 문자열은
                        불필요하게 길어지고 어떤 값이 최종 적용됐는지 읽기
                        어려웠습니다.
                      </p>

                      <div className="mt-4 space-y-4">
                        <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                          <p className="font-semibold">트러블슈팅</p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                            <li>
                              문제: 비활성 버튼 색상·커서, 높이처럼 성격이
                              다른 유틸들이 뒤섞여 &ldquo;의도치 않은&rdquo;
                              스타일이 간헐적으로 살아남음.{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                clsx
                              </code>
                              는 조건부 조합만 해줄 뿐 Tailwind 유틸의
                              우선순위 충돌은 해결해주지 못함
                            </li>
                            <li>
                              해결: 스타일 정의를{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                buttonStyleMap
                              </code>
                              으로 표준화(토큰화)하고, 최종적으로{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                tailwind-merge
                              </code>
                              의{" "}
                              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                twMerge
                              </code>
                              로 동일 계열 유틸을 하나로 병합해 충돌 제거,
                              비활성 타입은 내부에서 강제 처리
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500">
                            개선 전
                          </p>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`const baseStyle = clsx(
  style.bg, style.textColor, style.padding, style.border,
  "rounded-[2px] inline-flex justify-center items-center text-base h-[40px]"
);
<button className={clsx(baseStyle, className)}>{label}</button>`}
                          </pre>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-500">
                            개선 후
                          </p>
                          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                            {`const baseStyle = clsx(
  style.bg, style.textColor, style.padding, style.border,
  "rounded-[2px] inline-flex justify-center items-center text-base h-[40px]",
  isDisabled ? "cursor-default" : "cursor-pointer",
);
<button className={twMerge(baseStyle, className)}>{label}</button>`}
                          </pre>
                        </div>

                        <ul className="list-disc space-y-1 pl-5 text-[16px]">
                          <li>
                            Tailwind 유틸 충돌이 자동 정리되어 최종 적용
                            스타일이 일관적이고 예측 가능해짐
                          </li>
                          <li>
                            클래스 문자열이 간결해져 가독성·유지보수성 향상
                            (특히 패딩/높이/색상 계열)
                          </li>
                          <li>
                            효과: 비활성/활성 상태 스타일이 안정적으로
                            적용되고, 외부 className과 결합해도 시각적
                            일관성 확보
                          </li>
                        </ul>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "인프라 안정화",
                  content: (
                    <div className="space-y-3">
                      <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                        <p className="font-semibold">
                          인프라 이전 후 안정화 및 보안 개선{" "}
                          <span className="ml-1 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-normal text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                            프로젝트 종료 후 추가 개선
                          </span>
                        </p>
                        <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                          비용 절감을 위해 AWS EC2에서 Render + Supabase +
                          Vercel로 인프라를 옮긴 뒤, 전체 코드를 혼자
                          리뷰하며 보안 취약점과 동시성 버그, 이전 과정에서
                          생긴 장애를 찾아 해결했습니다.
                        </p>

                        <div className="mt-4 overflow-x-auto">
                          <table className="w-full min-w-120 border-collapse text-[14px]">
                            <thead>
                              <tr className="border-b border-slate-200 text-left text-neutral-500 dark:border-slate-700 dark:text-neutral-400">
                                <th className="py-1.5 pr-3 font-semibold">분류</th>
                                <th className="py-1.5 pr-3 font-semibold">문제</th>
                                <th className="py-1.5 font-semibold">해결</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                              <tr>
                                <td className="py-1.5 pr-3 font-medium">보안</td>
                                <td className="py-1.5 pr-3 text-neutral-500 dark:text-neutral-400">
                                  비로그인도 AI 챗봇 API 호출·프롬프트 인젝션 가능
                                </td>
                                <td className="py-1.5 text-neutral-700 dark:text-neutral-200">
                                  인증 확인 + 메시지 화이트리스트 정제 + 토큰 제한
                                </td>
                              </tr>
                              <tr>
                                <td className="py-1.5 pr-3 font-medium">인증</td>
                                <td className="py-1.5 pr-3 text-neutral-500 dark:text-neutral-400">
                                  토큰 만료 시 동시 요청마다 재발급 요청 발생
                                </td>
                                <td className="py-1.5 text-neutral-700 dark:text-neutral-200">
                                  Single-flight 패턴으로 재발급 1회로 통합
                                </td>
                              </tr>
                              <tr>
                                <td className="py-1.5 pr-3 font-medium">예산</td>
                                <td className="py-1.5 pr-3 text-neutral-500 dark:text-neutral-400">
                                  월별 예산이 없으면 장바구니·주문 승인이 404
                                </td>
                                <td className="py-1.5 text-neutral-700 dark:text-neutral-200">
                                  조회 시점 자동 생성 + 연도 경계 버그 수정
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* 1) AI 챗봇 API 무단 호출 */}
                      <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                        <p className="font-semibold">
                          1) AI 챗봇 API 무단 호출 및 프롬프트 인젝션 차단
                        </p>

                        <div className="mt-3 space-y-4">
                          <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                            <p className="font-semibold">트러블슈팅</p>

                            <p className="mt-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                              문제
                            </p>
                            <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                              <li>
                                미들웨어가{" "}
                                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                  /api
                                </code>{" "}
                                경로를 검사 대상에서 빼서, 비로그인
                                사용자도 OpenAI API를 호출해 비용을 발생시킬
                                수 있었음
                              </li>
                              <li>
                                클라이언트가 보낸 메시지 배열을 그대로
                                OpenAI에 전달 →{" "}
                                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                  role: &quot;system&quot;
                                </code>{" "}
                                메시지를 끼워 넣으면 서비스 프롬프트를
                                덮어쓸 수 있었음
                              </li>
                            </ul>

                            <p className="mt-3 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                              해결
                            </p>
                            <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                              <li>인증 쿠키 확인 후에만 라우트 진입 허용</li>
                              <li>
                                화이트리스트 정제: role 제한, 최근 20개,
                                메시지당 1000자로 자르기
                              </li>
                              <li>
                                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                  max_tokens
                                </code>
                                로 호출 한 번의 비용 상한 설정
                              </li>
                              <li>
                                OpenAI 클라이언트를 모듈 최상단이 아닌 요청
                                시점에 생성 — API 키가 없을 때 HTML 500 대신
                                명확한 JSON 에러로 변경
                              </li>
                            </ul>
                          </div>

                          <div>
                            <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                              {`// 1) 인증 확인
if (!cookieStore.get("accessToken") && !cookieStore.get("refreshToken")) {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

// 2) 화이트리스트 정제: role 제한, 최근 20개, 메시지당 1000자
const sanitized = messages
  .filter((m) => (m.role === "user" || m.role === "assistant") && !m.error)
  .slice(-MAX_MESSAGES)
  .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CONTENT_LENGTH) }));`}
                            </pre>
                          </div>

                          <blockquote className="border-l-4 border-sky-300 pl-3 text-[15px] italic text-neutral-600 dark:border-sky-600 dark:text-neutral-300">
                            &quot;LLM API에 사용자 입력을 넘길 때는 값만이
                            아니라 메시지 구조(role)까지 서버가 통제해야
                            한다.&quot;
                          </blockquote>
                        </div>
                      </div>

                      {/* 2) Single-flight 토큰 재발급 */}
                      <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                        <p className="font-semibold">
                          2) 토큰 재발급 Race Condition — Single-flight 패턴
                        </p>

                        <div className="mt-3 space-y-4">
                          <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                            <p className="font-semibold">트러블슈팅</p>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                              <li>
                                문제: 페이지 하나에서 여러 API를 동시에
                                호출하다가 액세스 토큰이 만료되면, 401을
                                받은 요청마다 재발급 요청을 각각 보냄
                              </li>
                              <li>
                                해결: 진행 중인 재발급 Promise를 공유해서,
                                동시에 실패한 요청들이 같은 재발급
                                결과를 기다리게 함
                              </li>
                            </ul>
                          </div>

                          <div>
                            <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-white">
                              {`let refreshPromise: Promise<unknown> | null = null;

refreshPromise ??= refreshAccessToken().finally(() => {
  refreshPromise = null;
});
await refreshPromise;
response = await request(); // 원래 요청 재시도`}
                            </pre>
                          </div>

                          <p className="text-[16px] text-neutral-600 dark:text-neutral-300">
                            검증: 액세스 토큰을 지운 상태에서 상품 페이지를
                            새로고침해 401 4건 → 재발급 1회 → 4건 모두
                            재시도 성공을 확인했습니다.
                          </p>

                          <PortfolioImage
                            src="/projects/snack/network-tab.png"
                            alt="토큰 재발급 Network 탭 — 401 4건이 재발급 1회로 통합되는 화면"
                            caption="Network 탭 — 401 4건 → refresh-token 1회 → 재시도 성공"
                            width={1098}
                            height={384}
                          />
                        </div>
                      </div>

                      {/* 3) 월별 예산 자동 생성 */}
                      <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                        <p className="font-semibold">
                          3) 월별 예산 미생성으로 인한 404 장애 해결
                        </p>

                        <div className="mt-3 space-y-4">
                          <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                            <p className="font-semibold">트러블슈팅</p>

                            <p className="mt-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                              문제
                            </p>
                            <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                              <li>
                                월별 예산은 매월 1일 node-cron이 자동으로
                                생성하는데, 무료 플랜 서버는 요청이 없으면
                                잠들어 cron이 실행되지 않는 경우가 있었음
                              </li>
                              <li>
                                예산이 없으면 장바구니·주문 상세·주문 승인이
                                모두 404를 반환
                              </li>
                              <li>
                                1월에 &quot;지난달&quot;을 작년 12월이
                                아니라 올해 12월로 조회하는 연도 경계 버그도
                                발견
                              </li>
                            </ul>

                            <p className="mt-3 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                              해결
                            </p>
                            <ul className="mt-1 list-disc space-y-1 pl-5 text-[16px]">
                              <li>
                                예산이 없으면 조회 시점에 지난달 고정 예산을
                                이어받아 생성하는{" "}
                                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                  getOrCreateMonthlyBudget
                                </code>
                                을 추가 — cron에만 의존하던 구조를 개선
                              </li>
                              <li>
                                동시 요청에도 중복 생성되지 않도록{" "}
                                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                  upsert
                                </code>{" "}
                                사용, cron은{" "}
                                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                  skipDuplicates: true
                                </code>
                                로 변경
                              </li>
                              <li>
                                날짜 유틸에{" "}
                                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                                  previousMonthYear
                                </code>
                                를 추가해 연도 경계를 처리하고, &quot;1월이면
                                작년 12월을 조회한다&quot; 테스트를 추가
                              </li>
                            </ul>
                          </div>

                          <blockquote className="border-l-4 border-sky-300 pl-3 text-[15px] italic text-neutral-600 dark:border-sky-600 dark:text-neutral-300">
                            &quot;스케줄러는 실행되지 않을 수 있다는 전제로
                            설계하고, 데이터가 필요한 시점에 스스로
                            복구되는 구조가 더 견고하다.&quot;
                          </blockquote>
                        </div>
                      </div>

                      <p className="text-[15px] text-neutral-600 dark:text-neutral-300">
                        인프라를 옮기는 작업은 &quot;서버를 옮기는
                        일&quot;로 끝나지 않았습니다. 도메인, 쿠키,
                        프로토콜, 스케줄러, 환경변수처럼 기존 환경에
                        암묵적으로 기대고 있던 부분이 하나씩 드러났고,
                        하드코딩과 모듈 로드 시점의 부수효과를 줄이고
                        실패했을 때도 원인이 드러나도록 코드를 바꾸는
                        습관을 갖게 됐습니다.
                      </p>
                    </div>
                  ),
                },
                {
                  label: "협업",
                  content: (
                    <div className="space-y-3">
                      <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                        <p className="font-semibold">GitHub 협업</p>
                        <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                          GitHub 기능(코드 리뷰, Discussions, Issues)을
                          적극 활용해 협업 효율과 코드 품질을 높이고,
                          실시간 피드백과 지식 공유로 팀 전체 역량을
                          키우는 것을 목표로 했습니다.
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                          <li>
                            코드 리뷰(PR 중심): 성능·예외 처리·네이밍 등
                            피드백, 컨벤션 통일
                          </li>
                          <li>
                            Discussions: 기술 블로그·라이브러리·에러 해결
                            방법 공유로 팀 지식 수준을 맞춤
                          </li>
                          <li>
                            Issues: QA/버그 관리, 실시간 피드백으로 수정
                            속도 및 완성도 향상
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/50">
                        <p className="font-semibold">BE → FE 연동 협업</p>
                        <p className="mt-2 text-[16px] text-neutral-600 dark:text-neutral-300">
                          BE와 FE 담당자가 달라 실제 현업과 같은 협업
                          경험을 목표로, API 계약–타입 확정–연동 과정을
                          거치며 현업과 유사한 워크플로우를 체험했습니다.
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                          <li>
                            PR/Discussion 없이도 명확한 계약·스펙 기반으로
                            연동 속도 및 완성도 확보
                          </li>
                          <li>
                            코드 품질·서비스 안정성 강화, 현업과 유사한
                            GitHub 협업 프로세스 경험
                          </li>
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
                        향후 개선 사항 및 제안
                      </h2>
                      <p>
                        다음 프로젝트에서 개발 효율성과 안정성을 높이고
                        협업 품질을 강화하기 위해, 이번 프로젝트에서 느낀
                        점들을 정리했습니다.
                      </p>
                      <ul className="mt-2 list-disc space-y-1 pl-5">
                        <li>
                          <strong>컨벤션 리마인더 도입</strong>: 일정 시간마다
                          팀에게 코드 컨벤션을 상기시켜 코드 일관성 유지
                        </li>
                        <li>
                          <strong>체계적인 일정 관리</strong>: 일정 지연
                          방지를 위해 주요 마일스톤과 업무 진행 상태를
                          정기적으로 관리
                        </li>
                        <li>
                          <strong>프로젝트 목적의 구체화</strong>: 초기
                          단계에서 목표와 요구사항을 명확히 정의해 개발
                          방향성 혼선 최소화
                        </li>
                        <li>
                          <strong>명확한 초기 설계</strong>: 중간 구조 변경을
                          최소화하고 안정적인 개발을 위해 아키텍처, 데이터
                          구조, API 계약을 사전에 설계
                        </li>
                      </ul>
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
