import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Theme from "@/theme/Theme";
import ReduxProvider from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" dir="rtl">
      <Theme>
        <body>
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </Theme>
    </html>
  );
}