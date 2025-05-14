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
          text="I'm a Full Stack Developer, building things for fun."
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
          Full stack developer who enjoys building meaningful products with
          clear goals. I love writing code and creating things that are both
          useful and interesting. Frontend makes me smile❤️. Backend makes me
          Google/GPT errors for hours😫. My superpower? Knowing exactly what to
          Google.
        </motion.span>
      </div>
    </section>
  );
};

export default HeroSection;
