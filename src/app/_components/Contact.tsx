"use client";

import { merriweather } from "@/configs/font";
import { links } from "@/configs/site";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { toast } from "sonner";

const Contact = () => {
  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText(links.mail);
      toast("Email Copied! 📋", {
        className: "bg-slate-800 text-slate-50 border border-slate-600/40",
      });
    } catch (err) {
      toast("Failed to copy email", {
        className: "bg-red-800 text-slate-50 border border-slate-600/40",
      });
    }
  };

  return (
    <section className="w-full">
      <div className="flex flex-col items-center container mx-auto px-4 md:px-8 pt-12 pb-24 md:py-36">
        <h1 className="text-center text-2xl font-semibold mb-4 text-slate-50">
          Contact
        </h1>
        <h1
          className={`text-center text-4xl lg:text-6xl lg:leading-snug font-semibold mb-8 text-slate-50 ${merriweather.className}`}
        >
          Get In Touch
        </h1>

        <Balancer>
          <p className="text-slate-200 text-center text-2xl font-medium mb-16">
            I&apos;m open for freelance projects, feel free to email me to see
            how can we collaborate
          </p>
        </Balancer>

        <div className="flex items-center gap-2 justify-center relative">
          <Link target="_blank" href={"https://cal.com/ujen51743/30min"}>
            <button className="px-4 md:px-8 py-4 rounded-md transition border-sky-600 hover:bg-sky-600 border text-slate-50 text-base font-bold">
              Say Hello!
            </button>
          </Link>
          <button
            onClick={handleCopyEmail}
            className="px-4 md:px-8 py-4 border transition hover:border-slate-600/40 border-transparent text-slate-50 rounded-md text-base font-bold hover:bg-slate-800"
          >
            Copy Email
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
