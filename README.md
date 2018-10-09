# ICONEST

**nykim@nykim.net**

_Last Modified: 2018-10-05_

## Tree Structure

- images/
- html/
- fonts/
- css/
  - scss-helpers/
    - \_mixins.scss
    - \_variables.scss
  - scss/
    - base/
      - \_common.scss
      - \_reset.scss
      - \_font.scss
      - base.scss
    - nykim/
      - nykim.scss
    - zpark/
      - zpark.scss
  - base.css
  - nykim.css
  - zpark.css
- index.html
- README.md

---

## Markup Guide

- 전체를 #wrap 이라는 div 로 감쌉니다.
- #wrap 은 대부분의 화면에서 #gnb + #content 로 이루어집니다.
  - #gnb: 상단에 항시 고정된 헤더
  - #content: 헤더 아래 하단 영역
- #content 는 대부분의 화면에서 #lnb + #main 으로 이루어집니다.
  - #lnb: 왼쪽에 고정된 메뉴 영역
  - #main: lnb 옆에 실질적 정보가 나오는 영역
- #mian 은 대부분의 화면에서 .main-container > .main-top + .main-body 로 이루어집니다.

  - .main-top: 검색 영역 등
  - .main-body: 테이블 영역 등

- .table-container 는 대체로 아래와 같은 구조를 가집니다.
  - .table-top
  - .table-titleArea
  - .table-viewArea
  - .table-bottom
- .table-top 에는 인디케이터(예. 100 개 중 1-15)나 버튼(예. 신규등록)이 들어갑니다.
- .table-titleArea 는 테이블 헤더 영역입니다. 고정되어 스크롤 시 움직이지 않습니다.
- .table-viewArea 는 테이블 바디 영역입니다. 높이에 따라 스크롤이 생깁니다.
- .table-bottom 에는 페이지네이션이나 페이징 드롭다운(예. 행 표시), 관련 유틸(예. 개별송금 버튼)이 들어갑니다.

---

## Class Name Guide

- suffix 와 스타일 네임은 하이픈(-)로 연결합니다. (예. button-blue)
- 선택자 대신 가능한 클래스 네임으로 셀렉팅합니다.
- 활성화 된 모습을 표시하기 위한 경우 active 라는 클래스 네임을 사용합니다.
  > ex)
  > &lt;div class="div">그냥 디브&lt;/div>
  > &lt;div class="div active">활성화된 디브&lt;/div>

---

## CSS Guide

### 1.fonts

- 기본 폰트는 'Noto Sans'를 사용하며, /\_font.scss 에서 정의합니다.
  - normal
  - bold

### 2.crowss browse

- 크롬 / 모던 브라우저 기준으로 작업합니다.

---
