// 보여 주기용 더미 데이터입니다. 실제 내용은 나중에 이 파일만 수정하면 됩니다.

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile: Profile = {
  name: "박지훈",
  bio: "안녕하세요, 저는 박지훈입니다.",
  imageUrl: "/profile-placeholder.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com" },
];
