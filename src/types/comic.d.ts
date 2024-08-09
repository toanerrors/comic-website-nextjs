type ChapperData = {
  filename: string;
  chapter_name: string;
  chapter_title: string;
  chapter_api_data: string;
};

type Chapter = {
  server_name: string;
  server_data: ChapperData[];
};

type ComicPagination = {
  totalItems: number;
  totalItemsPerPage: number;
  currentPage: number;
  pageRanges: number;
};

type Comic = {
  _id: string;
  name: string;
  slug: string;
  origin_name: string[];
  content: string;
  status: ComicStatus;
  thumb_url: string;
  author: string[];
  category: Category[];
  chapters: Chapter[];
  updatedAt: string;
};

type ChapperImage = {
  image_page: number;
  image_file: string;
};

type ChapperDetailItem = {
  _id: string;
  comic_name: string;
  chapter_title: string;
  chapter_path: string;
  chapter_image: ChapperImage[];
};

type ChapperDetail = {
  domain_cdn: string;
  item: ChapperDetailItem;
};
