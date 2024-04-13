"use client";
import { handwritting } from "@/configs/font";
import { ExternalLink, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky bg-slate-900 h-[80px] top-0 left-0 z-[180] w-full">
      <div className="container border-b border-slate-600/40 mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowMenu(true)}
            className="flex md:hidden items-center justify-center border border-slate-600/40 rounded-md size-10"
          >
            <Menu size={20} stroke="white" />
          </button>
          <Link href="/">
            <h2 className={`text-5xl text-slate-50 ${handwritting.className}`}>
              ujen.dev
            </h2>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-2">
            <li className="">
              <Link
                href="/work"
                className="px-2 py-2 text-slate-50 text-base hover:text-sky-600 list-item"
              >
                Work
                <span
                  className={`list-underline ${
                    pathname === "/work" ? "active" : ""
                  }`}
                >
                  <div className="list-dot"></div>
                </span>
              </Link>
            </li>
            <li className="">
              <Link
                href="/about"
                className="px-2 py-2 text-slate-50 text-base hover:text-sky-600 list-item"
              >
                About
                <span
                  className={`list-underline ${
                    pathname === "/about" ? "active" : ""
                  }`}
                >
                  <div className="list-dot"></div>
                </span>
              </Link>
            </li>
            <li className="">
              <Link
                href="/contact"
                className="px-2 py-2 text-slate-50 text-base hover:text-sky-600 list-item"
              >
                Contact
                <span
                  className={`list-underline ${
                    pathname === "/contact" ? "active" : ""
                  }`}
                >
                  <div className="list-dot"></div>
                </span>
              </Link>
            </li>
            <li className="">
              <Link
                href="https://drive.google.com/file/d/1XqrKaLYpAV5kck1qEEOYlLBA8v9qZY8n/view?usp=sharing"
                target="_blank"
                className="px-2 py-2 text-slate-50 text-base hover:text-sky-600 list-item"
              >
                Resume
                <span className="list-underline">
                  <div className="list-dot"></div>
                </span>
              </Link>
            </li>
          </ul>

          <button className="flex items-center gap-2 rounded-full text-sm hover:-translate-y-[0.15rem] hover:border-sky-600 hover:bg-sky-600 transition text-slate-50 px-4 py-2 border border-slate-300">
            <span className="text-slate-50">Book a call</span>
            <ExternalLink size={14} />
          </button>
        </div>

        <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </header>
  );
};

export default Header;

const MobileMenu = ({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        onClick={() => setShowMenu(false)}
        className={`block md:hidden bg-slate-900/30 backdrop-blur-md transition fixed inset-0 w-full h-full ${
          showMenu ? "visible" : "invisible"
        }`}
      ></div>
      <div
        className={`block md:hidden bg-slate-900 w-9/12 transition h-full fixed top-0 right-0 z-[80] py-4 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="px-8 py-4 mb-8">
          <h1 className="text-2xl font-bold font-font-handwritting text-slate-50">
            ujen.dev
          </h1>

          <button onClick={() => setShowMenu(false)}>
            <X size={24} stroke="white" className="absolute top-8 right-8" />
          </button>
        </header>
        <ul className="flex flex-col px-8 gap-2">
          <li className="">
            <Link
              href="/work"
              className="px-2 py-2 text-slate-50 text-base hover:text-sky-600 flex items-center gap-2"
            >
              <div className="size-2 rounded-full bg-sky-600"></div> Work
            </Link>
          </li>
          <li className="">
            <Link
              href="/about"
              className="px-2 py-2 text-slate-50 text-base hover:text-sky-600 flex items-center gap-2"
            >
              <div className="size-2 rounded-full bg-sky-600"></div> About
            </Link>
          </li>
          <li className="">
            <Link
              href="/contact"
              className="px-2 py-2 text-slate-50 text-base hover:text-sky-600 flex items-center gap-2"
            >
              <div className="size-2 rounded-full bg-sky-600"></div> Contact
            </Link>
          </li>
          <li className="">
            <Link
              href="https://drive.google.com/file/d/1XqrKaLYpAV5kck1qEEOYlLBA8v9qZY8n/view?usp=sharing"
              target="_blank"
              className="px-2 py-2 text-slate-50 text-base hover:text-sky-600 flex items-center gap-2"
            >
              <div className="size-2 rounded-full bg-sky-600"></div> Resume
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};