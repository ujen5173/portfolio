import { handwritting } from "@/configs/font";
import { links, siteConfig } from "@/configs/site";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
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
                target={item.isExternal ? "_blank" : ""}
                className="px-2 py-2 text-slate-50 text-base hover:text-sky-600 list-item"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-4">
          {Object.entries(links.social).map(([key, value], index) => (
            <li key={index}>
              <a href={value} target="_blank" rel="noopener noreferrer">
                <div className="p-2 rounded-full text-white hover:text-sky-600">
                  {key === "github" && <Github size={18} stroke="white" />}
                  {key === "linkedin" && <Linkedin size={18} stroke="white" />}
                  {key === "twitter" && <Twitter size={18} stroke="white" />}
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
