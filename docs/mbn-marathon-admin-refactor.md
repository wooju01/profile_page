# MBN 마라톤 코드 정리 가이드

MBN 거제마라톤 사이트 관련 코드는 **전반부**(테마·참가자 경험)와 **후반부**(관리자)로 나뉩니다.  
둘 다 유지보수하기 쉽게 나누어 쓰는 방법을 정리했습니다.

---

## 0. 전체 구조 (전반부 vs 후반부)

| 구분 | 위치 | 내용 |
|------|------|------|
| **전반부** | 테마 `functions.php` (Hello Elementor 등) 하단 | 로그인 후 참가 신청 플로우, Forminator 폼 채움, 프로필 "내 마라톤" 표시, 망보드 접근 제어, 중복 신청 방지, 응급연락처 하이픈 제거 등 |
| **후반부** | 같은 파일 또는 별도 include | 관리자 메뉴 "신청자 관리", 페이지네이션·필터·수정/입금/삭제, 엑셀 다운로드, admin 테이블 CSS |

**공통으로 쓸 것**: 폼 ID `86`, 테이블 `frmt_form_entry` / `frmt_form_entry_meta` → 전반·후반 모두 **설정 한곳**에서 가져오면 좋습니다.

---

## 전반부: 테마·참가자 경험 코드 정리

전반부는 대략 다음 블록들로 나눌 수 있습니다.

| 블록 | 훅/위치 | 하는 일 |
|------|--------|--------|
| 참가 신청 페이지 리다이렉트 | `template_redirect`, `is_page(80)` | 로그인 사용자가 80번 페이지 접근 시 쿼리스트링(`user_login`, `first_name`, `user_email`, `mobile_number`, `birth_date`, `gender`, `postal_code`, `address`, `address_detail`, `race`) 붙여 리다이렉트 |
| Forminator 폼 자동 채움 | `forminator_prepopulate_field`, form_id 86 | Ultimate Member + GET 파라미터로 이름·이메일·전화·생일·성별·주소·종목 등 채움 |
| 망보드 테이블 열 순서 | `do_shortcode_tag`, `mb_board` | 각 `<tr>`에서 4번째/5번째 `<td>` 교환 (페이지네이션 행 제외) |
| 프로필 "내가 신청한 마라톤" | `um_profile_content_main` → `show_my_marathon_requests` | 현재 사용자 이메일로 form 86 엔트리 조회 후 테이블 출력 |
| Forminator 메타 헬퍼 | 함수 `forminator_get_meta($entry_id, $key)` | 엔트리 메타 한 건 조회 (프로필·후반부에서 공용) |
| UM 프로필 탭 제거 | `um_profile_tabs` | Posts, Comments 탭 제거 |
| 망보드 접근 차단 | `init` → `mb_absolute_force_redirect` | 비로그인 사용자가 `?mode=read`/`write` 접근 시 68번(로그인)으로, `page_id=60` 이면 68번으로 리다이렉트 |
| 응급연락처 하이픈 제거 | `forminator_custom_form_submit_field_data`, `forminator_custom_form_submit_after`, `forminator_save_entry_field_value` | text-4(응급연락처) 값에서 숫자 외 제거 후 저장 |
| 중복 신청 방지 (서버) | `forminator_custom_form_submit_errors` | form 86, 로그인 사용자 → 이미 엔트리 있으면 에러 (1인 1종목) |
| 중복 신청 방지 (버튼 비활성화) | `wp_footer`, `is_page(77)` | 이미 신청한 사용자면 `.race-btn` 비활성화 + "신청 완료" 문구 |
| 이미 신청한 사용자 신청 페이지 차단 | `template_redirect`, `is_page(80)` | form 86에 해당 이메일 엔트리 있으면 380번(프로필)으로 리다이렉트 |

**정리 제안**

- **페이지/폼 ID 상수화**: `80`(신청 페이지), `77`(종목 선택), `68`(로그인), `380`(프로필), `86`(Forminator 폼) 등을 상수나 설정 배열로 한곳에 두기.
- **리다이렉트 묶기**: `template_redirect` 안에서 페이지별로 함수를 나누어 호출 (예: `marathon_redirect_application_page()`, `marathon_redirect_if_already_applied()`).
- **Forminator 관련만 묶기**: prepopulate, submit_field_data, submit_after, save_entry_field_value, submit_errors 는 한 파일이나 한 클래스에 두면 폼 86 수정 시 찾기 쉬움.
- **프로필·UM**: `show_my_marathon_requests`와 `forminator_get_meta`는 나중에 후반부 목록/엑셀과 컬럼을 맞출 수 있도록, “엔트리 한 건을 배열로 만드는” 공용 함수를 두면 좋음.

전반부를 플러그인으로 뺄 경우 예: `marathon-front/` 에 `config.php`, `redirects.php`, `forminator-filters.php`, `profile-tab.php`, `access-control.php` 처럼 역할별 파일로 나누고, 메인 플러그인 파일에서 `require` 만 하면 됩니다.

---

## 1. 정리 원칙 (전반부·후반부 공통)

- **한 파일 한 역할**: 전반부는 리다이렉트/폼 채움/프로필/접근제어 등으로, 후반부는 메뉴·액션·쿼리·출력·엑셀로 분리한다.
- **상수/설정은 한곳에**: 폼 ID(86), 페이지 ID(80, 77, 68, 380), 테이블명, 종목/기념품 옵션, `per_page` 등을 상수나 배열로 모아 둔다.
- **전역 함수 최소화**: 플러그인이라면 클래스(또는 네임스페이스)로 묶고, 메서드로 나누면 이름 충돌과 디버깅이 쉬워진다.

---

## 2. 추천 파일 구조 (플러그인 예시)

```
my-marathon-admin/
├── marathon-admin.php          # 진입: 메뉴 등록, 훅 연결만
├── includes/
│   ├── class-marathon-admin.php # 메인 클래스 (메뉴 콜백 = 목록/수정 화면 출력)
│   ├── config.php               # 상수, 옵션 배열 (FORM_ID, RACES, SIZES, PER_PAGE)
│   ├── handlers.php             # update_entry, quick_payment, delete_entry
│   ├── query.php                # 목록 WHERE/JOIN 조합, filtered count, paged list
│   └── export.php               # admin_post_export_marathon_entries + CSV 생성
└── assets/
    └── admin.css                # (선택) 테이블 스타일, 페이지네이션
```

테마 `functions.php`에만 넣을 경우에는 **하나의 PHP 파일**에 아래처럼 **섹션별로 블록을 나누고**, 각 블록을 함수로 감싸서 호출하는 방식만 적용해도 됩니다.

---

## 3. 설정·상수 분리 (config)

```php
// config 또는 상단 상수
const MARATHON_FORM_ID = 86;
const MARATHON_PER_PAGE = 50;

function marathon_get_races() {
    return array('HALF', '10KM', '4KM');
}

function marathon_get_sizes() {
    $radio2 = array('기념품 A(90~95)', '기념품 B(100~105)');
    $radio3 = array('기념품 A(90)', '기념품 B(95)', '기념품 C(100)', '기념품 D(105)', '기념품 E(110)');
    return array_merge($radio2, $radio3);
}
```

테이블명은 `$wpdb->prefix . 'frmt_form_entry'` 등 기존처럼 런타임에 두고, `FORM_ID`만 상수로 두어도 됩니다.

---

## 4. 액션 처리 분리 (handlers)

- **수정 저장**: `$_POST['update_entry']` && `$_POST['entry_id']` 일 때만 호출하는 함수 하나.
- **빠른 입금**: `$_POST['quick_payment']` && `$_POST['entry_id']` 일 때만 호출하는 함수 하나.
- **삭제**: `$_POST['delete_entry']` && `$_POST['entry_id']` 일 때만 호출, 권한 체크 후 메타 삭제 → 엔트리 삭제.

각 처리 끝에 `echo '<div class="notice notice-success">...</div>';` 하고, **리다이렉트하지 않고 같은 목록 페이지를 다시 그리면** 기존 동작과 동일하게 유지할 수 있습니다.  
(수정 폼은 `$edit_id` 가 있을 때만 그리도록 기존처럼 분기.)

---

## 5. 목록 쿼리 분리 (query)

- **공통**: `$filter_race`, `$filter_payment`, `$filter_name`, `$filter_group`, `$filter_phone`, `$filter_birth` 로 WHERE/JOIN 문자열과 `$where_values` 배열을 만드는 **함수 하나**를 두기.
  - 반환: `array( 'join_sql' => ..., 'where_sql' => ..., 'where_values' => ... )`
- **필터 적용 개수**: 위 결과로 `SELECT COUNT(DISTINCT e.entry_id) ...` 한 번.
- **페이지네이션 목록**: 같은 조건에 `ORDER BY e.date_created DESC LIMIT %d OFFSET %d` 붙여서 `get_results`.

이렇게 하면 “필터만 바꿀 때” 한 곳만 수정하면 됩니다.

---

## 6. 출력 분리 (화면)

- `render_filter_form( $filter_* )` — GET 폼 한 블록.
- `render_entries_table( $entries, $display_count, $filter_* )` — thead + tbody 한 블록.
- `render_pagination( $current_page, $total_pages, $base_url )` — « 처음 / ‹ 이전 / 1 2 3 / 다음 › / 마지막 ».
- `render_edit_form( $edit_id )` — 수정 시에만 쓰는 폼.
- `render_stats( $total_count, $paid_count, $unpaid_count, $filtered_total, ... )` — 하단 통계 박스.

메인 페이지 콜백(`marathon_entries_page`)에서는:

1. GET/POST 파라미터 정리 (`paged`, `filter_*`, `edit`)
2. handlers 호출 (update / quick_payment / delete)
3. `$edit_id > 0` 이면 `render_edit_form` 만 하고 `return`
4. 그 외: query로 `$filtered_total`, `$entries` 구한 뒤  
   `render_filter_form` → 테이블 스타일/스크립트 → `render_entries_table` → `render_pagination` → `render_stats`

순서로 호출하면 됩니다.

---

## 7. 엑셀 다운로드

- `admin_post_export_marathon_entries` 훅은 그대로 두고, **CSV 한 행을 만드는 로직만** 별도 함수로 뺍니다.
  - 예: `marathon_entry_to_csv_row( $e, $meta_map )` → `array( 이름, 이메일, ... )`
- export 쪽에서는 `get_results` 청크 루프 안에서 `marathon_entry_to_csv_row`를 호출하고 `fputcsv`만 하도록 하면, 컬럼 추가/순서 변경 시 한 곳만 수정하면 됩니다.

---

## 8. 클래스로 묶을 때 예시

```php
class Marathon_Entries_Admin {

    public static function register() {
        add_action('admin_menu', [ __CLASS__, 'add_menu' ]);
        add_action('admin_head', [ __CLASS__, 'admin_styles' ]);
        add_action('admin_post_export_marathon_entries', [ __CLASS__, 'export_csv' ]);
    }

    public static function add_menu() { ... }

    public static function entries_page() {
        self::maybe_handle_update();
        self::maybe_handle_quick_payment();
        self::maybe_handle_delete();
        if (self::maybe_render_edit_form()) return;
        self::render_list_page();
    }

    private static function maybe_handle_update() { ... }
    private static function maybe_handle_quick_payment() { ... }
    private static function maybe_handle_delete() { ... }
    private static function maybe_render_edit_form() { ... }
    private static function render_list_page() { ... }
    private static function get_list_query_args() { ... }
    public static function export_csv() { ... }
    public static function admin_styles() { ... }
}
Marathon_Entries_Admin::register();
```

실제 본문(테이블/폼 HTML)은 위에서 말한 `render_*` 함수들을 클래스 내부 `private static` 메서드로 옮기면 됩니다.

---

## 9. 요약

| 구분 | 어떻게 나누면 좋은지 |
|------|----------------------|
| **전반부** | 페이지 ID·폼 ID 상수화 / 리다이렉트별 함수 / Forminator 훅 한곳 / 프로필 테이블·forminator_get_meta·엑셀용 "한 행" 공용화 |
| **후반부 설정** | FORM_ID, PER_PAGE, RACES, SIZES 등 한곳 (상수 또는 config 함수) |
| 수정/입금/삭제 | 각각 별도 함수, 메인 콜백 상단에서 POST 확인 후 호출 |
| 목록 쿼리 | WHERE/JOIN 생성 → count 쿼리 / list 쿼리에서 재사용 |
| 화면 | 필터 폼 / 테이블 / 페이지네이션 / 수정 폼 / 통계를 각각 함수로 |
| 엑셀 | export 훅은 유지, “한 행 만들기”만 함수로 분리 |

이렇게 나누면 나중에 “필터 하나 추가”, “컬럼 하나 추가”, “페이지 번호 변경” 할 때 수정 범위가 작아지고, 테스트하기도 쉬워집니다.
