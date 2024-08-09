export type Navigation = {
  title: string;
  href: string;
  description?: string;
  children?: Navigation[];
};

const paths = {
  home: "/",
  new: "/danh-sach/truyen-moi",
  ongoing: "/danh-sach/dang-phat-hanh",
  completed: "/danh-sach/hoan-thanh",
  categories: {
    root: "/the-loai",
    detail: (category: string) => `/the-loai/${category}`,
  },
};

const categories: Navigation[] = [
  {
    title: "Action",
    href: paths.categories.detail("action"),
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Adult",
    href: paths.categories.detail("adult"),
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Adventure",
    href: paths.categories.detail("adventure"),
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Anime",
    href: paths.categories.detail("anime"),
    description: "Visually or semantically separates content.",
  },
  {
    title: "Chuyển sinh",
    href: paths.categories.detail("chuyen-sinh"),
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Comedy",
    href: paths.categories.detail("comedy"),
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const navigation: Navigation[] = [
  {
    title: "Trang chủ",
    href: paths.home,
  },
  {
    title: "Truyện mới",
    href: paths.new,
  },
  {
    title: "Đang phát hành",
    href: paths.ongoing,
  },
  {
    title: "Hoàn thành",
    href: paths.completed,
  },
  {
    title: "Thể loại",
    href: paths.categories.root,
    children: categories,
  },
];

export const statuses: Record<ComicStatus, string> = {
  ongoing: "Đang phát hành",
  completed: "Hoàn thành",
  new: "Truyện mới",
};
