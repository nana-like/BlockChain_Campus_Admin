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

- 전체를 .wrap 이라는 div 로 감쌉니다.

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
