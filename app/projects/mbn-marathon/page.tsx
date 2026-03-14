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
            <p className="text-[15px] md:text-base text-neutral-600 dark:text-neutral-300">
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
            <ul className="space-y-3 text-[15px] text-neutral-700 dark:text-neutral-200">
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
          <p className="text-[15px] text-neutral-600 dark:text-neutral-300">
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

        {/* 3. 신청 폼 UX 개선 */}
        <section className="space-y-4">
          <h2 className={SECTION_HEADING}>신청 폼 UX 개선</h2>
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <div className="space-y-3">
              <p className="text-[15px] text-neutral-600 dark:text-neutral-300">
                로그인 정보가 자동 채워지는 신청 폼에서, 스텝 표시·읽기 전용 필드·종목별 기념품 선택을 자바스크립트로 제어했습니다.
              </p>
              <p className="text-[13px] text-neutral-500 dark:text-neutral-400">
                오른쪽 스크린샷은 실제 운영과 동일한 스타일로 구성한 신청 폼 데모 화면입니다.
              </p>
            </div>
            <PortfolioImage
              src="/images/%20application.png"
              alt="MBN 마라톤 신청 폼 데모 화면"
              caption="실제 운영과 동일한 스타일로 구성한 신청 폼 데모 화면"
            />
          </div>

          <div className="space-y-4">
            <CodeBlock
              title="스텝 인디케이터 정리"
              language="JavaScript"
              code={`function fixStepIndicators() {
  var steps = document.querySelectorAll(
    '.forminator-custom-form .forminator-pagination-steps button,' +
    '.forminator-custom-form .forminator-pagination-steps .forminator-step'
  );

  steps.forEach(function (step) {
    var nextSibling = step.nextSibling;
    if (nextSibling && nextSibling.nodeType === 3) {
      var text = nextSibling.textContent.trim();
      if (/^\\d+$/.test(text)) {
        nextSibling.remove();
      }
    }

    var spans = step.querySelectorAll('span');
    for (var i = 1; i < spans.length; i++) {
      spans[i].remove();
    }
  });
}`}
              why="스텝 숫자가 두 번 보이던 문제를 DOM 정리로 해결했습니다."
            />

            <CodeBlock
              title="기본 정보 필드 읽기 전용"
              language="JavaScript"
              code={`var readonlyFields = ['user_login','user_email','mobile_number','birth_date','gender'];\n\nfunction setReadonlyFields() {
  var allFields = document.querySelectorAll(
    '.forminator-field input, .forminator-field textarea, .forminator-field select'
  );

  allFields.forEach(function (field) {
    var name = field.name || '';
    readonlyFields.forEach(function (key) {
      if (name.indexOf(key) !== -1) {
        field.setAttribute('data-readonly-field', 'true');
        field.readOnly = true;
      }
    });
  });
}`}
              why="로그인 정보 기반 필드를 수정 못 하게 막아 데이터 정합성을 지켰습니다."
            />

            <CodeBlock
              title="종목별 기념품 라디오 제어"
              language="JavaScript"
              code={`function handleRadioGroups() {
  var params = new URLSearchParams(window.location.search);
  var race = (params.get('race') || '').trim().toUpperCase();
  if (!race) return;

  // HALF/10KM일 때 4km용 그룹 숨기기 등의 처리...
}`}
              why="종목에 맞지 않는 기념품을 선택하지 못하도록 잘못된 라디오 그룹은 숨겼습니다."
            />
          </div>
        </section>

        {/* 5. 구현 범위 요약 */}
        <section className="space-y-3">
          <h2 className={SECTION_HEADING}>구현 범위 요약</h2>
          <ul className="list-disc space-y-1 pl-5 text-[15px] text-neutral-700 dark:text-neutral-200">
            <li>신청자 관리 메뉴 — 페이지네이션(50명/페이지), 필터(이름·단체·전화·생년월일·종목·입금상태)</li>
            <li>신청자 정보 수정 (참가 종목, 기념품, 응급연락처, 입금상태, 입금자명, 관리자 메모)</li>
            <li>빠른 입금 상태 변경 (미입금 → 입금완료)</li>
            <li>신청자 삭제 (권한 체크, 메타 삭제 후 엔트리 삭제)</li>
            <li>엑셀(CSV) 전체 다운로드 (admin_post, nonce, 청크 처리)</li>
          </ul>
        </section>

        {/* 6. 사이트 링크 */}
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
