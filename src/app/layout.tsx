import { inter } from "@/configs/font";
import { siteConfig } from "@/configs/site";
import type { Metadata, Viewport } from "next";
import { SmoothScrollProvider } from "../providers/smooth-scroll-provider";
import CursorTracker from "./_components/CursorTracker";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "black" }],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ujenbasi.vercel.app/"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  keywords: siteConfig.keywords,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 ${inter.className}`}>
        <SmoothScrollProvider>
          <CursorTracker />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
