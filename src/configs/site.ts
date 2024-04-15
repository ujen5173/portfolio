import { NavItem } from "@/app/_types";

export const links = {
  social: {
    github: "https://github.com/ujen5173",
    twitter: "https://twitter.com/ujen_basi",
    linkedin: "https://www.linkedin.com/in/ujen-basi-167a4522a",
  },
  mail: "ujenbasi1122@gmail.com",
  openGraphImage: `https://ujenbasi.vercel.app/og-image.png`,
  manifestFile: "https://ujenbasi.vercel.app/manifest.json",
};

export const contact = {
  github: {
    href: links.social.github,
    username: "ujen_basi",
  },
  linkedin: {
    href: links.social.linkedin,
    username: "ujen-basi-167a4522a",
  },
  twitter: {
    href: links.social.twitter,
    username: "ujen5173",
  },
  mail: {
    href: links.social.github,
    username: "ujenbasi1122@gmail.com",
  },
};

export const siteConfig = {
  name: "Ujen basi",
  description:
    "I am a full-stack developer with a passion for creating beautiful and functional websites by utlizing Next.js, and Tailwind CSS.",
  url: "https://ujenbasi.vercel.app",
  author: "ujen5173",
  developer: "Ujen basi",
  hostingRegion: "fra1",
  keywords: [
    "Ujen",
    "Ujen basi",
    "Front-end developer",
    "Back-end developer",
    "Full-stack developer",
    "Web developer",
  ],
  navItems: [
    { title: "Work", isExternal: false, href: "/work" },
    { title: "About", isExternal: false, href: "/about" },
    { title: "Contact", isExternal: false, href: "/contact" },
    {
      title: "Resume",
      isExternal: true,
      href: "https://drive.google.com/file/d/1XqrKaLYpAV5kck1qEEOYlLBA8v9qZY8n/view?usp=sharing",
    },
  ] satisfies NavItem[],
};
