"use server";

import { axiosComic } from "@/lib/axiosInstance";
import axios from "axios";

export const fetchComic = async (slug: string) => {
  try {
    const res = await axiosComic.get(`/truyen-tranh/${slug}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchComicImages = async (url: string) => {
  try {
    const res = await axios.get(url);
    if (!res.data) return null;
    return res.data;
  } catch (error) {
    return null;
  }
};
