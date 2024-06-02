"use client";
import { merriweather } from "@/configs/font";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    translateY: 30,
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 md:px-8 pt-12 pb-24 md:py-2">
        <h1
          className={`text-center text-3xl font-semibold mb-8 text-slate-50 ${merriweather.className}`}
        >
          My Skills
        </h1>

        <motion.div
          ref={ref}
          initial={"hidden"}
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.087,
              },
            },
            hidden: {},
          }}
          className={`flex justify-center w-full md:w-10/12 lg:w-9/12 mx-auto gap-2 flex-wrap ${merriweather.className}`}
        >
          {[
            {
              name: "Next.js",
              image: "tech-logo/next.svg",
            },
            {
              name: "Typescript",
              image: "tech-logo/ts.svg",
            },
            {
              name: "Tailwind CSS",
              image: "tech-logo/tailwind.svg",
            },
            {
              name: "Graphql",
              image: "tech-logo/graphql.svg",
            },
            {
              name: "Drizzle ORM",
              image: "tech-logo/drizzle.svg",
            },
            {
              name: "Prisma",
              image: "tech-logo/prisma.svg",
            },
            {
              name: "Supabase",
              image: "tech-logo/supabase.svg",
            },
            {
              name: "Zustand",
              image: "tech-logo/zustand.svg",
            },
            {
              name: "Express",
              image: "tech-logo/express.svg",
            },
            {
              name: "Postgresql",
              image: "tech-logo/postgresql.svg",
            },
            {
              name: "MongoDB",
              image: "tech-logo/mongodb.svg",
            },
          ].map((lang) => (
            <motion.div
              key={lang.name}
              variants={defaultAnimations}
              className="rounded-md z-[90] border border-slate-300/40 py-4 font-bold text-slate-800 px-8 bg-slate-200 flex items-center justify-center gap-4"
            >
              {lang.name}
            </motion.div>
          ))}
          {/* <div className="rounded-md border border-slate-600/40 py-8 bg-slate-800 flex items-center justify-center gap-4">
            <Image
              width="600"
              height="300"
              className="h-7 w-fit"
              src="/tech-logo/nextjs-13.svg"
              alt="Next.js"
              title="Next.js"
            />
          </div>
          <div className="rounded-md border border-slate-600/40 py-8 bg-slate-800 flex items-center justify-center gap-4">
            <Image
              src="/tech-logo/tailwindcss.svg"
              alt="Tailwind.css"
              width="600"
              height="300"
              className="h-7 w-fit"
              title="Tailwind.css"
            />
            <span className="text-xl font-semibold text-slate-50">
              Tailwind CSS
            </span>
          </div>
          <div className="rounded-md border border-slate-600/40 py-8 bg-slate-800 flex items-center justify-center gap-4">
            <Image
              src="/tech-logo/typescript.svg"
              alt="Typescript"
              width="600"
              height="300"
              className="h-7 w-fit"
              title="Typescript"
            />
            <span className="text-xl font-semibold text-slate-50">
              Typescript
            </span>
          </div>
          <div className="rounded-md border border-slate-600/40 py-8 bg-slate-800 flex items-center justify-center gap-4">
            <Image
              src="/tech-logo/prisma-2.svg"
              alt="Prisma ORM"
              width="600"
              height="300"
              className="h-7 w-fit"
              title="Prisma ORM"
            />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
