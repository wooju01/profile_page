// app/projects/mbn-marathon/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import { PortfolioImage } from "@/components/PortfolioImage";

export const metadata: Metadata = {
  title: "MBN 거제마라톤 | Wooju",
  description: "마라톤 대회 신청자 입금 관리·페이지네이션·삭제 기능을 담당한 워드프레스 관리자 구현",
};

const SECTION_HEADING =
  "text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400";

export default function MbnMarathonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 px-6 py-10 text-foreground dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        {/* 상단 네비 */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
          >
            <span className="text-sm">←</span>
            <span>프로필로 돌아가기</span>
          </Link>
          <span className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
            PROJECT
          </span>
        </div>

        {/* 프로젝트 헤더 */}
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-lg dark:border-white/10 dark:bg-slate-950/90">
          <header className="space-y-2 border-b border-slate-100 pb-5 dark:border-slate-800">
            <h1 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
              MBN 거제마라톤
            </h1>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300">
              마라톤 대회 참가자의 신청부터 관리자 운영까지 전 과정을 디지털화한 대회 운영 웹 서비스입니다.
              관리자용 <strong>신청자 입금 관리 페이지</strong>(페이지네이션·수정/삭제·엑셀 다운로드)를 구현했습니다.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                WordPress
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                PHP
              </span>
            </div>
          </header>
        </section>

        {/* 1. 사용 기술 & 선택 이유 */}
        <section className="space-y-3">
          <h2 className={SECTION_HEADING}>사용 기술 & 선택 이유</h2>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-700/80 dark:bg-slate-900/60">
            <ul className="space-y-3 text-sm text-neutral-700 dark:text-neutral-200">
              <li>
                <strong>WordPress + Forminator</strong> — 배포 준비 기간이 <strong>1주일</strong>로 짧아
                처음부터 풀스택으로 개발하기보다, 빠르게 운영 가능한 워드프레스와 신청서 작성 플러그인(Forminator) 기반으로
                참가 신청 플로우를 구성했습니다.
              </li>
              <li>
                <strong>PHP (admin_menu, admin_post)</strong> — 운영 단계에서 관리자들이 데이터를 직접 조회·관리할 수 있도록,
                WP Admin에 “신청자 관리” 메뉴를 추가하고 수정/입금/삭제 기능을 구현했습니다. 엑셀 다운로드는 admin_post로 분리해
                nonce 검사 후 CSV를 스트리밍했습니다.
              </li>
              <li>
                <strong>DB 직접 조회 ($wpdb)</strong> — Forminator 엔트리/메타 테이블을 직접 조회해
                필터·페이지네이션·엑셀을 일관된 조건으로 처리하고, 운영 데이터량이 늘어도 화면과 export가 버티도록 구성했습니다.
              </li>
            </ul>
          </div>
        </section>

        {/* 2. 주요 코드 예시 — 삭제 처리 */}
        <section className="space-y-3">
          <h2 className={SECTION_HEADING}>주요 코드 예시</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            신청자 삭제 시 메타를 먼저 지운 뒤 엔트리를 삭제해, 외래키/정합성을 맞춘 부분입니다.
          </p>
          <CodeBlock
            title="신청자 삭제 처리"
            language="PHP"
            code={`if (isset($_POST['delete_entry']) && isset($_POST['entry_id'])) {
    $entry_id = intval($_POST['entry_id']);
    if (!current_user_can('manage_options')) {
        wp_die('권한이 없습니다.');
    }
    $entry_exists = $wpdb->get_var($wpdb->prepare(
        "SELECT COUNT(*) FROM $table WHERE entry_id = %d AND form_id = %d",
        $entry_id, $form_id
    ));
    if ($entry_exists > 0) {
        $wpdb->delete($meta_table, array('entry_id' => $entry_id), array('%d'));
        $wpdb->delete($table, array('entry_id' => $entry_id, 'form_id' => $form_id), array('%d', '%d'));
        echo '<div class="notice notice-success"><p>신청자 정보가 삭제되었습니다.</p></div>';
    }
}`}
            why="메타 테이블을 먼저 삭제한 뒤 엔트리 테이블을 삭제해야 참조 무결성이 깨지지 않습니다. 권한은 manage_options로 관리자만 실행되도록 했습니다."
          />
        </section>

        {/* 3. 스크린샷 — 포트폴리오용 이미지 */}
        <section className="space-y-3">
          <h2 className={SECTION_HEADING}>스크린샷</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            관리자 신청자 목록 화면이나 엑셀 다운로드 결과 등을 넣을 수 있는 영역입니다. 이미지는 <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">public/projects/mbn-marathon/</code> 에 넣고 <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">src=&quot;/projects/mbn-marathon/파일명.png&quot;</code> 로 사용하면 됩니다.
          </p>
          <PortfolioImage
            placeholder
            alt="MBN 마라톤 관리자 화면 예시"
            caption="예: 신청자 관리 목록 또는 엑셀 다운로드 화면"
          />
        </section>

        {/* 4. 구현 범위 요약 */}
        <section className="space-y-3">
          <h2 className={SECTION_HEADING}>구현 범위 요약</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-200">
            <li>신청자 관리 메뉴 — 페이지네이션(50명/페이지), 필터(이름·단체·전화·생년월일·종목·입금상태)</li>
            <li>신청자 정보 수정 (참가 종목, 기념품, 응급연락처, 입금상태, 입금자명, 관리자 메모)</li>
            <li>빠른 입금 상태 변경 (미입금 → 입금완료)</li>
            <li>신청자 삭제 (권한 체크, 메타 삭제 후 엔트리 삭제)</li>
            <li>엑셀(CSV) 전체 다운로드 (admin_post, nonce, 청크 처리)</li>
          </ul>
        </section>

        {/* 5. 사이트 링크 */}
        <section className="space-y-2">
          <h2 className={SECTION_HEADING}>관련 링크</h2>
          <Link
            href="https://marathon-mbngj.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
          >
            marathon-mbngj.com 열기
          </Link>
        </section>
      </div>
    </main>
  );
}
