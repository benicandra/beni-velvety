import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/sections/Header/Header";

const aileron = localFont({
  src: "./fonts/Aileron-Regular.otf",
  variable: "--font-sans",
  display: "swap",
});

const ivyMode = localFont({
  src: "./fonts/ivy-mode-regular.ttf",
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Velvety",
  description: "Velvety - Crafted with care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", aileron.variable, ivyMode.variable)}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
