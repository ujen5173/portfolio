import { handwritting } from "@/configs/font";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="container flex items-center justify-between mx-auto px-4 md:px-8 py-8">
        <h2 className={`${handwritting.className} text-5xl text-slate-50`}>
          ujen.dev
        </h2>

        <ul className="hidden md:flex items-center gap-2">
          <li className="">
            <Link
              href="/"
              className="px-2 py-2 text-slate-50 text-base hover:text-sky-600 list-item"
            >
              Work
            </Link>
          </li>
          <li className="">
            <Link
              href="/"
              className="px-2 py-2 text-slate-50 text-base hover:text-sky-600 list-item"
            >
              About
            </Link>
          </li>
          <li className="">
            <Link
              href="/"
              className="px-2 py-2 text-slate-50 text-base hover:text-sky-600 list-item"
            >
              Contact
            </Link>
          </li>
          <li className="">
            <Link
              href="/"
              className="px-2 py-2 text-slate-50 text-base hover:text-sky-600 list-item"
            >
              Resume
            </Link>
          </li>
          <li className="">
            <Link
              href="/"
              className="px-2 py-2 text-slate-50 text-base hover:text-sky-600 list-item"
            >
              read.cv
            </Link>
          </li>
        </ul>

        <ul className="flex items-center gap-4">
          <button className="size-10 rounded-md hover:bg-slate-800 border border-transparent hover:border-slate-600/40 flex items-center justify-center">
            <Github size={20} stroke="white" />
          </button>
          <button className="size-10 rounded-md hover:bg-slate-800 border border-transparent hover:border-slate-600/40 flex items-center justify-center">
            <Linkedin size={20} stroke="white" />
          </button>
          <button className="size-10 rounded-md hover:bg-slate-800 border border-transparent hover:border-slate-600/40 flex items-center justify-center">
            <Twitter size={20} stroke="white" />
          </button>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
