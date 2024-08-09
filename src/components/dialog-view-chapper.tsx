/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useLayoutEffect, useMemo } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { fetchComicImages } from "@/actions/comic";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";
import Combobox from "./combobox";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  chappers: ChapperData[];
};

function DialogViewChapper({ chappers }: Props) {
  const [chapper, setChapper] = React.useState<ChapperDetail | null>();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const current = Number(searchParams.get("chapper")) || 0;

  const fetchData = useCallback(async () => {
    const chap = current - 1;
    if (!chappers[chap]) return;
    const chapper = chappers[chap];
    try {
      if (!chapper.chapter_api_data) return;
      setChapper(null);
      const res = await fetchComicImages(chapper.chapter_api_data);
      setChapper(res?.data);
    } catch (error) {
      console.log(error);
    }
  }, [chappers, current]);

  const onSetChapper = (chapper: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("chapper", chapper.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const onClose = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("chapper");
    router.push(`${pathname}?${params.toString()}`);
  };

  useLayoutEffect(() => {
    fetchData();
  }, [fetchData]);

  const { name, path, images } = useMemo(() => {
    if (!chapper) return { domain: "", name: "", path: "", images: [] };

    const domain = chapper?.domain_cdn || "";
    const name = chapper?.item?.comic_name || "";
    const chapter_path = chapper?.item?.chapter_path || "";
    const images = chapper?.item?.chapter_image || [];

    const path = domain + "/" + chapter_path + "/";
    return { name, path, images };
  }, [chapper]);

  return (
    <Dialog open={current > 0} defaultOpen={current > 0} onOpenChange={onClose}>
      <DialogContent className="sm:w-[95vw] p-0 w-full max-w-full sm:h-[97vh] h-full">
        <ScrollArea className="h-full w-full mx-auto sm:w-[70%]">
          {images.length > 0 &&
            images.map((image) => {
              return (
                <div className="w-full h-full relative" key={image.image_file}>
                  <img
                    className="w-full h-full mt-0 p-0 object-contain relative"
                    src={path + image.image_file}
                    alt={name}
                    loading="lazy"
                  />
                </div>
              );
            })}
        </ScrollArea>

        <div className="w-full h-full flex items-center justify-center">
          <div className="absolute bottom-5 flex gap-2 items-center justify-center">
            <div className="p-2 rounded-full bg-[#dfdee0] dark:bg-[#2C283D] cursor-pointer">
              <ChevronLeftIcon
                onClick={() => {
                  onSetChapper(current - 1);
                }}
              />
            </div>
            <Combobox
              value={current - 1}
              onChange={onSetChapper}
              options={chappers.map((chapper, index) => {
                return {
                  label: "Chương: " + chapper.chapter_name,
                  value: index,
                };
              })}
            />
            <div className="p-2 rounded-full bg-[#dfdee0] dark:bg-[#2C283D] cursor-pointer">
              <ChevronRightIcon
                onClick={() => {
                  onSetChapper(current + 1);
                }}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogViewChapper;
