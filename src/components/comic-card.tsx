import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { cn, fToNow } from "@/lib/utils";
import Link from "next/link";

type Props = {
  name: string;
  slug: string;
  origin_name: string[];
  status: ComicStatus;
  thumb_url: string;
  category: Category[];
  latestChapter: LatestChapter[];
  imageCDN: string;
  updatedAt: string;
};

function ComicCard({
  name,
  slug,
  origin_name,
  status,
  thumb_url,
  category,
  latestChapter,
  imageCDN,
  updatedAt,
}: Props) {
  return (
    <Card className="max-w-sm overflow-hidden relative">
      <CardHeader className="w-full  overflow-hidden p-0 relative">
        <Link href={`/truyen-tranh/${slug}`}>
          <Image
            className="object-cover w-full h-44 md:h-64"
            src={imageCDN + thumb_url}
            alt={name}
            width={200}
            height={200}
          />
        </Link>

        <div className="absolute bottom-0 right-3 ">
          {fToNow(new Date(updatedAt))}
        </div>
      </CardHeader>
      <CardContent className="p-2">
        <div className="flex items-center justify-between">
          <Link
            href={`/truyen-tranh/${slug}`}
            className="text-sm leading-4 font-medium text-gray-900 dark:text-white hover:underline dark:hover:underline h-12 overflow-hidden line-clamp-3"
          >
            {name}
          </Link>
        </div>
        <div className="flex flex-col justify-between">
          {latestChapter.length > 0 &&
            latestChapter.map((item) => (
              <Link
                key={item.chapter_name}
                href={`/truyen-tranh/${slug}?chapper=${item.chapter_name}`}
                className="text-xs font-medium text-gray-700 dark:text-gray-100 hover:underline dark:hover:underline overflow-hidden"
              >
                {item.filename}
              </Link>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ComicCard;
