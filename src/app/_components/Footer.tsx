import { handwritting } from "@/configs/font";
import { siteConfig } from "@/configs/site";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const links = {
    github: {
      href: "https://github.com/ujen5173",
      icon: <Github size={20} stroke="currentColor" />,
    },
    twitter: {
      href: "https://twitter.com/ujen5173",
      icon: <Twitter size={20} stroke="currentColor" />,
    },
    linkedin: {
      href: "https://www.linkedin.com/in/ujen-basi-167a4522a",
      icon: <Linkedin size={20} stroke="currentColor" />,
    },
  };
  return (
    <footer className="w-full">
      <div className="container flex items-center justify-between mx-auto px-4 md:px-8 py-8">
        <Link href="/">
          <h2 className={`text-3xl text-slate-50 ${handwritting.className}`}>
            {siteConfig.name}
          </h2>
        </Link>

        <ul className="hidden md:flex items-center gap-2">
          {siteConfig.navItems.map((item, index) => (
            <li key={index} className="">
              <Link
                href={item.href}
                className="px-2 py-2 text-slate-50 text-base hover:text-sky-600 list-item"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-4">
          {Object.entries(links).map(([key, value], index) => (
            <li key={index}>
              <a href={value.href} target="_blank" rel="noopener noreferrer">
                <div className="p-2 rounded-full text-white hover:text-sky-600">
                  {value.icon}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
