import { inter } from "@/configs/font";
import type { Metadata } from "next";
import CursorTracker from "./_components/CursorTracker";
import { SmoothScrollProvider } from "./_providers/smooth-scroll-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "ujen.dev - Full-stack developer",
  description: "Build using Next.js",
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
