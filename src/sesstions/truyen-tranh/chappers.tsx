"use client";
import DialogViewChapper from "@/components/dialog-view-chapper";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useLayoutEffect } from "react";

type Props = {
  servers: Chapter[];
  slug: string;
};

function Chappers({ servers, slug }: Props) {
  const [chappers, setChappers] = React.useState<ChapperData[]>([]);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setChapper = (chapper: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("chapper", (chapper + 1).toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  useLayoutEffect(() => {
    setChappers(servers[0]?.server_data || []);
  }, [servers]);

  return (
    <div className="mt-3 p-4 rounded-lg items-start justify-center gap-3 bg-[#dfdee0] dark:bg-[#2C283D]">
      <h3 className="text-2xl font-bold text-center pb-2">Danh sách chương</h3>
      {servers.map((server, index) => {
        const servername = server?.server_name || "";
        return (
          <div key={index}>
            <Button
              onClick={() => setChappers(server.server_data)}
              className="text-md font-bold text-center border-b pb-2 border-[#2C283D] dark:border-[#dfdee0]"
            >
              {servername}
            </Button>
          </div>
        );
      })}

      <ScrollArea className="mt-3 h-[500px] w-full rounded-md border p-4">
        <div className="flex flex-row flex-wrap gap-2">
          {chappers.map((chapper, index) => {
            return (
              <div key={index}>
                <Button
                  onClick={() => setChapper(index)}
                  className="text-xs font-bold text-center border-b pb-2"
                >
                  Chương {chapper.chapter_name}{" "}
                  {chapper.chapter_title ? `: ${chapper.chapter_title}` : ""}
                </Button>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      <DialogViewChapper chappers={chappers} />
    </div>
  );
}

export default Chappers;
