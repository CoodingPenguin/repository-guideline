<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/coodingpenguin/repository-guideline">
    <img src="img/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">GitHub Repository Guideline</h3>

  <p align="center">
    <small>
    저장소(Repository) 생성 시  Name, Description, README 가이드라인
    </small>
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#repository-type">Repository Type</a></li>
    <li><a href="#repository-name">Repository Name</a></li>
    <li><a href="#repository-description">Repository Description</a></li>
    <li><a href="#readme">README</a></li>
  </ol>
</details>

## 📚 Repository Type

저장소의 종류는 **생성 목적**에 따라 달라진다:

- `Study`: 강의/책의 공부 자료, 코드 등을 저장하기 위한 저장소
- `Project`: 프로젝트 용으로 만든 저장소
- `CoodingPenguin`: 블로그, 프로필, 포트폴리오 용으로 만든 저장소
- `Forked`: 자주 보는 저장소를 Fork한 저장소

## 🏠 About Repository

### Name

- 영어 소문자와 `-`로만 작성한다. 띄어쓰기는 `-`로 표현한다.
  - _algorithm-template / deep-learning-from-scratch / templates-of-everything_
- 저장소의 내용을 잘 표현할 수 있는 제목으로 짓는다.

### Description

- `Project`를 제외하고 모든 저장소는 특정 이모지로 **생성목적**을 표시한다.
  - `👩‍💻 Study`, `🐧 CoodingPenguin`, `📌 Forked`
  - `Study`와 `Forked`는 생성목적과 설명 사이에 구분자(`|`)를 둔다.
- 생성목적에 따라 저장소를 잘 나타내는 **설명**을 적는다. 가장 첫 단어의 첫 문자만 대문자로 표시하고 고유명사가 아닌 이상 모두 소문자로 적는다.
  - `Study`는 **Learn**으로 시작해 무엇을 배우는지 적고 `<>` 안에 공부한 책/사이트/강의를 적는다.
  - `Project`에 항상 어떤 툴, 언어를 사용했는지 명시한다.
  - `Forked`에 원 저장소의 사용자 ID를 **by** 다음에 표시한다.
- 설명 마지막에 **사용한 언어, 툴**을 나타내는 이모지를 표시한다.
  - 예를 들면, Python은 🐍으로 CSS는 💅로 나타낸다.
  - `Forked`와 `CoodingPenguin`의 경우 해당 저장소를 잘 나타내는 이모지를 사용한다.

```
[ Study ]
👩‍💻 Study | Learn Python and CS Basics with <Introducing Python> 🐍
👩‍💻 Study | Learn Canvas API by practicing <1 Minute Coding> 💅

[ Project ]
📆 Crawler of CAU Calender with Python, Selenium 🐍
📝 Templates of algorithm, data analysis and etc 🐍

[ CoodingPenguin ]
🐧 CoodingPenguin's Devlog with GatsbyJS ⚛
🐧 Hi, I am CoodingPenguin 👋

[ Forked ]
📌 Forked | Cheatsheets of Everything by rstacruz 👀
📌 Forked | Tech Interview Collections by WeareSoft 🏢
```

### URLs

- `Study` 저장소의 경우 참고한 강의, 책, 사이트의 링크를 단다.
- `Project` 저장소의 경우 완성된 서비스의 링크를 단다.

### Tags

`Forked`를 제외한 저장소에만 태그를 달 수 있다. 태그에는 다음과 같은 내용을 담는다:

- 개발 분야
- 사용한 툴, 언어, 프레임워크, 라이브러리
- 저장소 생성 목적
- 관련 책, 사이트, 강의

## 📄 README

`Forked` 저장소를 제외한 모든 저장소는 기본적으로 [Best-README-Template](https://github.com/othneildrew/Best-README-Template) 양식을 따른다.

### Outline

### Tips

## ✒ Commit Log

gitcz

## 📌 References

- https://github.com/alstn2468
- https://github.com/othneildrew/Best-README-Template
