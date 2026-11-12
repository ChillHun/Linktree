# 🌳 링크나무

내 모든 링크를 한 페이지에 모아 두고, 하나의 URL로 공유하는 서비스입니다.

SNS 프로필에는 링크를 하나만 걸 수 있는 경우가 많습니다. 링크나무는 GitHub, LinkedIn, 블로그처럼 흩어진 링크를 한 페이지에 모아, 그 페이지 주소 하나만 공유하면 되도록 해 줍니다.

## 주요 기능

- **프로필**: 원형 프로필 사진, 이름, 한 줄 소개
- **링크 카드**: 링크를 카드 형태로 세로로 나열하고, 누르면 새 탭에서 열기
- **클릭 수 집계**: 링크별 클릭 횟수 기록 _(개발 예정)_
- **모바일 우선 반응형 디자인**

## 기술 스택

| 구분 | 사용 기술 |
| --- | --- |
| 프레임워크 | Next.js 16 (App Router) |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS v4 |
| 데이터베이스 | MongoDB Atlas (클릭 수 저장, 예정) |
| 배포 | Vercel (예정) |

## 시작하기

Node.js LTS 버전이 필요합니다.

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열면 화면을 볼 수 있습니다.

### 주요 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 (코드를 고치면 바로 반영) |
| `npm run build` | 배포용 빌드 |
| `npm run start` | 빌드한 결과물 실행 |
| `npm run lint` | ESLint 코드 검사 |

## 내 정보로 바꾸기

이름, 소개, 프로필 사진, 링크는 모두 [`src/data/profile.ts`](src/data/profile.ts) 한 파일에서 수정합니다.

```ts
export const profile: Profile = {
  name: "이름",
  bio: "한 줄 소개",
  imageUrl: "/profile-placeholder.svg", // public/ 폴더 안의 이미지 경로
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/아이디" },
  // 링크를 추가하거나 지우면 카드도 함께 바뀝니다.
];
```

프로필 사진은 `public/` 폴더에 이미지 파일을 넣고 `imageUrl`을 그 경로(예: `/me.jpg`)로 바꾸면 됩니다.

## 폴더 구조

```
src/
├── app/
│   ├── layout.tsx         # 공통 레이아웃, 페이지 제목
│   └── page.tsx           # 메인 페이지
├── components/
│   ├── ProfileHeader.tsx  # 프로필 사진, 이름, 한 줄 소개
│   └── LinkCard.tsx       # 링크 카드
└── data/
    └── profile.ts         # 프로필과 링크 데이터
```

## 환경 변수

MongoDB 접속 정보 같은 환경 변수는 프로젝트 루트의 `.env.local` 파일에 저장합니다. 이 파일은 `.gitignore`에 포함되어 있으니 절대 커밋하지 마세요.
