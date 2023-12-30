"use client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, ThemeOptions, createTheme } from "@mui/material";
import localFont from "next/font/local";
import { NextAppDirEmotionCacheProvider } from "./EmotionCashe";

const IranYekan = localFont({
  src: [
    { path: "../public/fonts/Qs_Iranyekan bold.ttf"},
    { path: "../public/fonts/Qs_Iranyekan medium.ttf"},
    // { path: "../public/fonts/Qs_Iranyekan light.ttf",},
    // { path: "../public/fonts/Qs_Iranyekan thin.ttf",},
  ],
  variable: "--font-IranYekan",
});

const themeOption: ThemeOptions = {
  typography: {
    fontFamily: IranYekan.style.fontFamily,
    button: {
      textColor: '#fff',
      fontSize: 18,
    }
  },
  palette: {
    background: { 
      // default: ""
    },
    primary: {
      main: "#b8a870",
    },
    secondary: {
      main: '#fff'
    },
    text: {
      primary: "#000",
      secondary: "#00000080",
    },
  },
  
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
