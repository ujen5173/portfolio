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
    const show = () => {
      controls.start("visible");
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }
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
            "Next.js",
            "Typescript",
            "Tailwind CSS",
            "Graphql",
            "Drizzle ORM",
            "Prisma",
            "Supabase",
            "Zustand",
            "Express",
            "Postgresql",
            "MongoDB",
            "Stripe",
            "Trpc",
            "Esewa / Khalti",
          ].map((lang) => (
            <motion.div
              key={lang}
              variants={defaultAnimations}
              className="rounded-md z-[90] border border-slate-300/40 py-4 font-bold text-slate-800 px-8 bg-slate-200 flex items-center justify-center gap-4"
            >
              {lang}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
