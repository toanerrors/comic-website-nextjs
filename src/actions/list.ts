"use server";

import { axiosComic } from "@/lib/axiosInstance";

export async function fetchListByType(type: string, page: number = 1) {
  try {
    const res = await axiosComic.get(`/danh-sach/${type}`, {
      params: {
        page,
      },
    });
    return res.data;
  } catch (error) {
    return null;
  }
}
