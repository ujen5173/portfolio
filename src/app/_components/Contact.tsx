"use client";

import { useState } from "react";
import Balancer from "react-wrap-balancer";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ujenbasi1122@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <section className="w-full">
      <div className="flex flex-col items-center container mx-auto px-4 md:px-8 pt-12 pb-24 md:py-36">
        <h1 className="text-center text-2xl font-semibold mb-8 text-slate-50">
          Contact
        </h1>
        <h1 className="text-center text-6xl font-semibold mb-8 text-slate-50">
          Get In Touch
        </h1>

        <Balancer className="">
          <p className="text-slate-200 text-2xl font-medium mb-16">
            I&apos;m open for freelance projects, feel free to email me to see
            how can we collaborate
          </p>
        </Balancer>

        <div className="flex items-center gap-2 justify-center relative">
          <button className="px-4 md:px-8 py-4 rounded-md transition border-sky-600 hover:bg-sky-600 border text-slate-50 text-xl font-bold">
            Say Hello!
          </button>
          <button
            onClick={handleCopyEmail}
            className="px-4 md:px-8 py-4 border transition hover:border-slate-600/40 border-transparent text-slate-50 rounded-md text-xl font-bold hover:bg-slate-800"
          >
            Copy Email
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
