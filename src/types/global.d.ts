type Category = {
  id: string;
  name: string;
  slug: string;
};

type LatestChapter = {
  filename: string;
  chapter_name: string;
  chapter_title: string;
  chapter_api_data: string;
};

type ComicStatus = "ongoing" | "completed" | "new";

type Breadcrumb = {
  name: string;
  slug: string;
  position: number;
};
