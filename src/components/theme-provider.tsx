"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import Header from "@/layout/header";
import Navigation from "@/layout/navigation";
import Footer from "@/layout/footer";
import NextTopLoader from "nextjs-toploader";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <div className="w-[95%] max-w-[1200px] mx-auto">
        <NextTopLoader />
        <Header />
        <Navigation />
        {children}
        <Footer />
      </div>
    </NextThemesProvider>
  );
}
