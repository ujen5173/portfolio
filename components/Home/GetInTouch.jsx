import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const GetInTouch = ({ delayStarting = 0 }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 25 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <section className="bg-dark">
      <div className="px-6 container mx-auto py-28 text-center">
        <motion.h2
          variants={boxVariant}
          initial="hidden"
          animate={control}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: delayStarting,
          }}
          className="text-4xl lg:text-5xl font-bold text-white"
        >
          Get In Touch.
        </motion.h2>
        <motion.p
          variants={boxVariant}
          initial="hidden"
          animate={control}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: delayStarting + 0.3,
          }}
          className="text-lg text-gray-300 w-full lg:w-7/12 mx-auto my-6"
        >
          I&apos;m currently looking for new opportunities, my inbox is always
          open for exciting project ideas. Whether you have a question or just
          want to say hi, I&apos;ll try my best to get back to you!
        </motion.p>

        <motion.button
          variants={boxVariant}
          initial="hidden"
          animate={control}
          ref={ref}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: delayStarting + 0.3,
          }}
          className="btn-tertiary text-white"
        >
          <a href="mailto:ujenbasi1122@gmail.com">Say Hello</a>
        </motion.button>
      </div>
    </section>
  );
};

export default GetInTouch;
