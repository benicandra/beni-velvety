import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/sections/Header/Header";
import { Footer } from "@/components/sections/Footer/Footer";

const aileron = localFont({
  src: [
    {
      path: "./fonts/Aileron-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Aileron-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const ivyMode = localFont({
  src: [
    {
      path: "./fonts/ivy-mode-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ivy-mode-regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
