import { fetchComic } from "@/actions/comic";
import { Badge } from "@/components/ui/badge";
import { statuses } from "@/config";
import Chappers from "@/sesstions/truyen-tranh/chappers";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

async function ComicView({ params }: Props) {
  const slug = params.slug;
  const data = await fetchComic(slug);
  if (!data) {
    notFound();
  }
  const item: Comic = data?.item || {};
  const imageCDN = data?.APP_DOMAIN_CDN_IMAGE || "";
  const chappers = item?.chapters || [];
  return (
    <div className="w-full mt-2">
      <div className="p-4 rounded-lg flex flex-col md:flex-row items-center md:items-start justify-center gap-3 bg-[#dfdee0] dark:bg-[#2C283D]">
        <div className="w-fit h-fit ">
          <Image
            className="w-[250px] h-full object-contain rounded-lg"
            src={imageCDN + "/uploads/comics/" + item.thumb_url}
            alt={item.name}
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="w-full h-full ">
          <p className="text-2xl font-bold text-center border-b pb-2 border-[#2C283D] dark:border-[#dfdee0]">
            {item?.name}
          </p>
          <div className="flex h-full mt-2 flex-col gap-2 text-sm">
            <div>Trạng thái: {statuses[item?.status]}</div>
            <div>Tác giả: {item?.author && item?.author?.join(", ")}</div>
            <div className="flex gap-2 flex-wrap">
              Thể loại:{" "}
              {item?.category?.map((cate, index) => (
                <Badge key={index}>{cate.name}</Badge>
              ))}
            </div>
            <div
              className="text-justify h-full bg-[#dfdee0] dark:bg-[#2D2133] p-2 rounded-lg"
              dangerouslySetInnerHTML={{ __html: item?.content || "" }}
            ></div>
          </div>
        </div>
      </div>

      <Chappers slug={slug} servers={chappers} />
    </div>
  );
}

export default ComicView;
