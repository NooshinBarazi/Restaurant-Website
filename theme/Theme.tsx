"use client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, ThemeOptions, createTheme } from "@mui/material";
import localFont from "next/font/local";
import { NextAppDirEmotionCacheProvider } from "./EmotionCashe";

const IranYekan = localFont({
  src: [
    { path: "../public/fonts/Qs_Iranyekan bold.ttf", weight: "700" },
    { path: "../public/fonts/Qs_Iranyekan medium.ttf", weight: "500" },
    { path: "../public/fonts/Qs_Iranyekan light.ttf", weight: "400" },
    { path: "../public/fonts/Qs_Iranyekan thin.ttf", weight: "300" },
  ],
  variable: "--font-IranYekan",
});

const themeOption: ThemeOptions = {
  typography: {
    fontFamily: IranYekan.style.fontFamily,
  },
  //   palette: {
  //     background: {

  //       default: "#f8bbd0",
  //     },
  //     primary: {
  //       main: "#1976d2",
  //     },
  //     text: {
  //       primary: "#300000",
  //     },
  //   },
};

const theme = createTheme(themeOption);

export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
