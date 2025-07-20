"use client";
import { merriweather } from "@/configs/font";
import { motion } from "framer-motion";
import { AnimatedElement } from "./AnimateElement";

const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 md:px-8 pt-12 pb-24 md:py-36">
        <AnimatedElement
          el="h1"
          once={true}
          // text="I'm a Full Stack Developer, building things for fun."
          text="Building impactful, scalable apps with code, creativity, reliability."
          className={`text-4xl lg:text-6xl w-9/12 2xl:w-8/12 mb-6 lg:leading-snug font-semibold text-slate-50 ${merriweather.className}`}
        />

        <motion.span
          initial="hidden"
          className="text-xl lg:text-2xl text-slate-100"
          animate={{
            ...defaultAnimations.visible,
            transition: {
              delay: 0.6,
            },
          }}
          variants={defaultAnimations}
        >
          I&apos;m Ujen Basi from <u>Nepal</u>, a full stack developer who loves
          building useful, meaningful things. Frontend makes me smile ❤️,
          backend makes me Google 😫. My superpower? Knowing what to search.
        </motion.span>
      </div>
    </section>
  );
};

export default HeroSection;
