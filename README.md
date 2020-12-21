<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/coodingpenguin/repository-guideline">
    <img src="img/logo.png" alt="Logo" width="128" height="128">
  </a>
  <h2 style='border: none; margin-bottom: 5px;'>GitHub Repository Guideline</h2>
  <small>저장소(Repository) 생성 시 지켜야할 나만의 규칙들</small>
</div>

## 📝 Table of Contents

- [저장소 종류](#저장소-종류)
- [저장소 생성 규칙](#저장소-생성-규칙)
  - [Name](#name)
  - [Description](#description)
  - [URLs](#urls)
  - [Tags](#tags)
- [README](#-readme)
- [Commit Log](#-commit-log)

## 📚 저장소 종류

저장소의 종류는 **생성 목적**에 따라 달라집니다. 제 GitHub에 있는 저장소는 다음과 같이 4가지로 분류할 수 있습니다 :

- `Study`: 강의/책의 공부 자료, 코드 등을 저장하기 위한 저장소
- `Project`: 프로젝트 용으로 만든 저장소
- `Forked`: 자주 보는 저장소를 Fork한 저장소
- `CoodingPenguin`: 블로그, 프로필, 포트폴리오 용으로 만든 저장소

## 🏠 저장소 생성 규칙

### 이름 (Name)

- 영어 소문자와 `-`만 사용 가능하며 띄어쓰기는 `-`로 표현합니다.
- 저장소의 내용을 잘 표현할 수 있는 제목으로 짓습니다.

### 설명 (Description)

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

- `Project`를 제외하고 모든 저장소는 특정 이모지로 **생성목적**을 표시하며, `Study`와 `Forked`는 생성목적과 설명 사이에 구분자(`|`)를 둡니다.
- 생성목적에 따라 저장소를 잘 나타내는 **설명**을 적습니다. 가장 첫 단어의 첫 문자만 대문자로 작성하고 그외는 모두 소문자로 작성합니다.
- 설명 마지막에는 **사용한 언어, 툴**을 나타내는 이모지를 표시합니다. 예를 들면, Python은 🐍으로 CSS는 💅로 나타냅니다.
- 저장소 종류에 따라 조금씩의 변화를 둡니다.
  - `Forked`와 `CoodingPenguin`의 경우 첫 번째 이모지로 📌와 🐧를 사용합니다.
  - `Study`는 무엇을 배우는지를 적고 `<>` 안에 참고한 책/사이트/강의 제목을 적습니다.
  - `Forked`는 원 저장소의 사용자 ID를 **by** 다음에 표시합니다.

### 주소 (Website)

- `Study` 저장소의 경우 참고한 강의, 책, 사이트의 링크를 답니다.
- `Project` 저장소의 경우 완성된 서비스를 배포한 사이트의 링크를 답니다.

### 태그 (Topics)

`Forked`를 제외한 저장소에만 태그를 달 수 있으며, 태그에는 다음과 같은 내용을 표시합니다:

- 개발 분야
- 사용한 툴/언어/프레임워크/라이브러리
- 저장소 생성 목적
- 참고한 책/사이트/강의

## 📄 README

`Forked` 저장소를 제외한 모든 저장소는 기본적으로 [Best-README-Template](https://github.com/othneildrew/Best-README-Template) 양식을 따릅니다.

자세한 내용은 [readme-templates](./readme-templates)를 참고해주세요!

## ✒ 커밋 로그

커밋할 때 [git-cz](https://github.com/streamich/git-cz)를 사용하며 제가 자주 쓰는 커밋으로 customizing했습니다!

커밋 종류는 다음과 같습니다:

- `feat` : 새로운 기능
- `fix` : 버그

## 📌 References

- https://github.com/alstn2468
- https://github.com/othneildrew/Best-README-Template
