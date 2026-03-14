// app/projects/mbn-marathon/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import { PortfolioImage } from "@/components/PortfolioImage";

export const metadata: Metadata = {
  title: "MBN 거제마라톤 | Wooju",
  description:
    "마라톤 대회 신청자 입금 관리·페이지네이션·삭제 기능을 담당한 워드프레스 관리자 구현",
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
              마라톤 대회 참가자의 신청부터 관리자 운영까지 전 과정을 디지털화한
              대회 운영 웹 서비스입니다. 관리자용{" "}
              <strong>신청자 입금 관리 페이지</strong>
              (페이지네이션·수정/삭제·엑셀 다운로드)를 구현했습니다.
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

        <section className="space-y-3">
          <h2 className={SECTION_HEADING}>프로젝트 개요</h2>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-700/80 dark:bg-slate-900/60">
            <p className="text-[15px] text-neutral-700 dark:text-neutral-200">
              MBN 거제 마라톤 대회의 참가 신청과 운영 관리를 디지털화하기 위해
              제작된 웹 서비스입니다. 참가 신청 폼을 통해 접수된 데이터를
              기반으로 관리자 페이지에서 참가자 조회, 입금 상태 관리, 정보 수정
              및 삭제, 엑셀 다운로드까지 가능하도록 구현했습니다.
            </p>
          </div>
        </section>

        {/* 1. 사용 기술 & 선택 이유 */}
        <section className="space-y-3">
          <h2 className={SECTION_HEADING}>사용 기술 & 선택 이유</h2>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-700/80 dark:bg-slate-900/60">
            <ul className="space-y-3 text-[15px] text-neutral-700 dark:text-neutral-200">
              <li>
                <strong>WordPress + Forminator</strong> — 배포 준비 기간이{" "}
                <strong>1주일</strong>로 짧아 처음부터 풀스택으로 개발하기보다,
                빠르게 운영 가능한 워드프레스와 신청서 작성 플러그인(Forminator)
                기반으로 참가 신청 플로우를 구성했습니다.
              </li>
              <li>
                <strong>PHP (admin_menu, admin_post)</strong> — 운영 단계에서
                관리자들이 데이터를 직접 조회·관리할 수 있도록, WP Admin에
                “신청자 관리” 메뉴를 추가하고 수정/입금/삭제 기능을
                구현했습니다. 엑셀 다운로드는 admin_post로 분리해 nonce 검사 후
                CSV를 스트리밍했습니다.
              </li>
              <li>
                <strong>DB 직접 조회 ($wpdb)</strong> — Forminator 엔트리/메타
                테이블을 직접 조회해 필터·페이지네이션·엑셀을 일관된 조건으로
                처리하고, 운영 데이터량이 늘어도 화면과 export가 버티도록
                구성했습니다.
              </li>
            </ul>
          </div>
        </section>
        {/* 3. 개발 중 해결한 문제 */}
        <section className="space-y-3">
          <h2 className={SECTION_HEADING}>개발 중 해결한 문제</h2>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-700/80 dark:bg-slate-900/60">
            <ul className="space-y-3 text-[15px] text-neutral-700 dark:text-neutral-200">
              <li>
                Forminator 플러그인은 관리자 화면에서 대량의 신청자 데이터를
                관리하기 어려워, 신청자 목록 조회·필터·페이지네이션 기능을
                별도의 관리자 페이지로 구현했습니다.
              </li>
              <li>
                참가자 수가 증가하면서 관리자 화면에서 데이터를 한 번에 불러올
                경우 성능 문제가 발생할 수 있어 50명 단위 페이지네이션을
                적용했습니다.
              </li>
              <li>
                운영팀이 데이터를 엑셀로 정리하는 과정을 줄이기 위해 전체 신청
                데이터를 CSV 형태로 다운로드할 수 있는 기능을 추가했습니다.
              </li>
            </ul>
          </div>
        </section>

        {/* 4. 주요 코드 예시 — 삭제 처리 */}
        <section className="space-y-3">
          <h2 className={SECTION_HEADING}>주요 코드 예시</h2>
          <p className="text-[15px] text-neutral-600 dark:text-neutral-300">
            신청자 삭제 기능을 구현할 때 Forminator 플러그인의 데이터 구조를
            분석해 entry와 entry_meta 테이블 간의 관계를 고려해야 했습니다. 메타
            데이터가 먼저 삭제되지 않으면 참조 데이터가 남아 데이터 정합성이
            깨질 수 있기 때문에 메타 테이블을 먼저 삭제한 뒤 엔트리 데이터를
            삭제하는 순서로 처리했습니다.
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
            why={`Forminator는 신청 데이터를 entry와 entry_meta 테이블에 분리해 저장합니다.
  엔트리만 삭제할 경우 메타 데이터가 남아 데이터 정합성이 깨질 수 있기 때문에
  메타 데이터를 먼저 삭제한 뒤 엔트리를 삭제하는 순서를 적용했습니다.
  
  또한 관리자 전용 기능이기 때문에 manage_options 권한 검사를 추가해
  관리자만 삭제 작업을 수행할 수 있도록 제한했습니다.`}
          />
        </section>

        {/* 5. 신청 폼 UX 개선 */}
        <section className="space-y-4">
          <h2 className={SECTION_HEADING}>신청 폼 UX 개선</h2>
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <div className="space-y-3">
              <p className="text-[15px] text-neutral-600 dark:text-neutral-300">
                로그인한 사용자의 정보를 기반으로 신청 폼 일부 필드가 자동으로
                채워지도록 구성하고, 수정이 필요 없는 항목은 읽기 전용으로
                처리해 입력 오류를 줄였습니다. 또한 참가 신청 과정을 직관적으로
                이해할 수 있도록 스텝 진행 표시를 추가하고, 종목 선택에 따라
                기념품 옵션이 변경되도록 자바스크립트로 동작을 제어했습니다.
              </p>

              <p className="text-[13px] text-neutral-500 dark:text-neutral-400">
                오른쪽 스크린샷은 실제 운영 환경과 동일한 구조와 스타일을
                기반으로 재구성한 신청 폼 데모 화면입니다.
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
              why={`Forminator의 기본 스텝 UI에서 숫자가 중복으로 표시되는 문제가 있어
  사용자가 현재 진행 단계를 직관적으로 인식하기 어려웠습니다.
  
  불필요한 텍스트 노드와 중복 span 요소를 DOM에서 제거해
  스텝 표시가 하나의 숫자만 보이도록 정리했습니다.`}
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
              why={`로그인 사용자 정보를 기반으로 자동 입력되는 필드는
  사용자가 임의로 수정할 경우 실제 회원 정보와 신청 데이터가
  불일치할 수 있는 문제가 있었습니다.
  
  이를 방지하기 위해 특정 필드를 읽기 전용으로 설정해
  신청 데이터와 회원 정보 간의 데이터 정합성을 유지했습니다.`}
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
              why={`마라톤 종목에 따라 제공되는 기념품이 달라지기 때문에
  사용자가 종목과 맞지 않는 옵션을 선택할 수 있는 문제가 있었습니다.
  
  URL 파라미터로 전달되는 종목 정보를 기준으로
  해당 종목에 맞지 않는 라디오 그룹을 숨겨
  잘못된 선택이 발생하지 않도록 제어했습니다.`}
            />
          </div>
        </section>

        {/* 6. 구현 범위 요약 */}
        <section className="space-y-3">
          <h2 className={SECTION_HEADING}>구현 범위 요약</h2>
          <ul className="list-disc space-y-1 pl-5 text-[15px] text-neutral-700 dark:text-neutral-200">
            <li>
              신청자 관리 메뉴 — 페이지네이션(50명/페이지),
              필터(이름·단체·전화·생년월일·종목·입금상태)
            </li>
            <li>
              신청자 정보 수정 (참가 종목, 기념품, 응급연락처, 입금상태,
              입금자명, 관리자 메모)
            </li>
            <li>빠른 입금 상태 변경 (미입금 → 입금완료)</li>
            <li>신청자 삭제 (권한 체크, 메타 삭제 후 엔트리 삭제)</li>
            <li>엑셀(CSV) 전체 다운로드 (admin_post, nonce, 청크 처리)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className={SECTION_HEADING}>운영 결과</h2>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-700/80 dark:bg-slate-900/60">
            <ul className="space-y-2 text-[15px] text-neutral-700 dark:text-neutral-200">
              <li>• 실제 대회 접수 시스템으로 사용</li>
              <li>• 약 3,000명의 참가자 신청 처리</li>
              <li>
                • 관리자 페이지에서 참가자 관리 / 입금 확인 / 데이터 수정 가능
              </li>
              <li>• 엑셀 다운로드 기능으로 운영팀의 데이터 관리 효율 개선</li>
            </ul>
          </div>
        </section>

        {/* 7. 사이트 링크 */}
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
