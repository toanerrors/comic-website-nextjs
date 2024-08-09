import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { statuses } from "@/config";

type Props = {
  name: string;
  slug: string;
  origin_name: string[];
  status: ComicStatus;
  thumb_url: string;
  category: Category[];
  latestChapter: LatestChapter[];
  imageCDN: string;
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
}: Props) {
  return (
    <Card className="max-w-sm overflow-hidden">
      <CardHeader className="w-full h-64 overflow-hidden p-0">
        <Link href={`/truyen-tranh/${slug}`}>
          <Image
            className="object-cover w-full h-full"
            src={imageCDN + thumb_url}
            alt={name}
            width={200}
            height={200}
          />
        </Link>
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
        <div className="flex items-center justify-between"></div>
      </CardContent>
      <CardFooter className="p-2 flex justify-center items-center">
        <Link
          href={`/truyen-tranh/${slug}`}
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:bg-gray-800"
        >
          Đọc truyện
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ComicCard;
