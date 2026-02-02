import { NavItem } from "@/app/_types";

export const links = {
  social: {
    github: "https://github.com/ujen5173",
    linkedin: "https://www.linkedin.com/in/ujen5173",
  },
  mail: "ujenbasi1122@gmail.com",
  openGraphImage: `https://ujenbasi.vercel.app/og-image.png`,
  manifestFile: "https://ujenbasi.vercel.app/manifest.json",
};

export const contact = {
  github: {
    href: links.social.github,
    username: "ujen5173",
  },
  linkedin: {
    href: links.social.linkedin,
    username: "ujen5173",
  },
  mail: {
    href: `mailto:${links.mail}`,
    username: "ujenbasi1122@gmail.com",
  },
};

export const siteConfig = {
  name: "Ujen Basi",
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
    "ujen5173",
    "Web developer",
  ],
  navItems: [
    { title: "Work", isExternal: false, href: "/work" },
    { title: "About", isExternal: false, href: "/about" },
    { title: "Contact", isExternal: false, href: "/contact" },
    {
      title: "Resume",
      isExternal: true,
      href: "https://drive.google.com/file/d/1a754ui3moFLS7t78o7zrQ9tD-Hc8vWFI/view?usp=drive_link",
    },
  ] satisfies NavItem[],
};
