# [ BlockChain Campus ] Admin Web

- **Web Published: nykim@nykim.net**
- **저장소 주소: [https://github.com/AnnYKim/BlockChain_Campus_Admin/tree/Update_10-22](https://github.com/AnnYKim/BlockChain_Campus_Admin/tree/Update_10-22)**
- _Last Modified: 2018-10-17_

## Tree Structure

- images/
- html/
  - Login/
  - DappMgmt/
  - Voting/
  - JobSchedule/
  - CodeMgmt/
  - SystemLog/
  - Modal/
- fonts/
- css/
- index.html
- README.md

---

## Library

- 사용중인 라이브러리는 다음과 같습니다.

1. jQuery
2. [jsTree.js](https://www.jstree.com/) : 트리 디렉토리
3. [simplePagination](http://flaviusmatis.github.io/simplePagination.js/) : 페이지네이션
4. [DateRangePicker.js](http://www.daterangepicker.com/) : 데이트 피커 (Moment.js 의존)
5. [Chart.js](http://www.chartjs.org/docs/latest/) : 차트
6. [autoSize.js](http://www.jacklmoore.com/autosize/) : 텍스트에리어 사이즈 조절

- library-all.js 는 **jQuery 를 제외한** 모든 라이브러리를 통합한 파일입니다.
- ui.js 는 ui 구현에 필요하거나 동작 확인 시 필요한 제이쿼리를 작성한 파일입니다.

---

## Markup Guide

- 전체를 #wrap 이라는 div 로 감쌉니다.
  - 만약 트리뷰가 없는 페이지라면 .no-tree-view 클래스를 갖습니다.
- #wrap 은 대부분의 화면에서 #gnb + #content 로 이루어집니다.
  - #gnb: 왼쪽에 상시 고정된 영역
  - #content: 오른쪽 콘텐츠 영역
- #content 는 대부분의 화면에서 #lnb + #main 으로 이루어집니다.
  - #lnb: 상단에 고정된 영역
  - #main: lnb 아래에 실질적 정보가 나오는 영역
- #mian 은 실질적 정보 영역입니다. 테이블 뷰일 경우 .main-table 클래스를 갖습니다. 대부분의 화면에서 .main-container > .scroll-area > .main-top + .main-body 로 이루어집니다.

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
- 활성화 된 모습을 표시하기 위한 경우 active 라는 클래스 네임을 사용합니다.

  > ex)
  > &lt;div class="div">그냥 디브&lt;/div>

  > &lt;div class="div active">활성화된 디브&lt;/div>
