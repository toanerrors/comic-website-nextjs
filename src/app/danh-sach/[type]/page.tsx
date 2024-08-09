import { fetchListByType } from "@/actions/list";
import ComicCard from "@/components/comic-card";
import Pagination from "@/components/pagination";
import React from "react";

type Props = {
  params: {
    type: string;
  };
  searchParams?: any;
};

async function List({ params, searchParams }: Props) {
  const type = params.type;
  const page = searchParams?.page || 1;
  const data = await fetchListByType(type, page);
  const items = data?.items || [];
  const title = data?.title || "";
  const pagination: ComicPagination = data?.params?.pagination || {};
  const imageCDN = data?.APP_DOMAIN_CDN_IMAGE || "";

  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="mt-5 grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {items.map((item: any) => (
          <ComicCard
            key={item._id}
            name={item?.name}
            slug={item?.slug}
            origin_name={item?.origin_name}
            status={item?.status}
            thumb_url={item?.thumb_url}
            category={item?.category}
            latestChapter={item?.latestChapter}
            imageCDN={imageCDN + "/uploads/comics/"}
          />
        ))}
      </div>

      <Pagination {...pagination} />
    </div>
  );
}

export default List;
