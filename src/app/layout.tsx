import { inter } from "@/configs/font";
import { siteConfig } from "@/configs/site";
import type { Metadata, Viewport } from "next";
import PlausibleProvider from "next-plausible";
import React from "react";
import { Toaster } from "sonner";
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
    default: `${siteConfig.name} - Full stack developer`,
    template: `%s - ${siteConfig.name}`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
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
interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={`bg-slate-900 ${inter.className}`}>
        <PlausibleProvider domain="ujenbasi.vercel.app">
          <SmoothScrollProvider>
            <CursorTracker />
            {children}
          </SmoothScrollProvider>
          <Toaster />
        </PlausibleProvider>
      </body>
    </html>
  );
}
