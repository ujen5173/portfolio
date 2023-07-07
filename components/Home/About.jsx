import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
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
    <div className="container mx-auto px-6">
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate={control}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          // delay: 0.3,
        }}
        className="w-full xl:w-9/12 mx-auto py-6 lg:w-11/12"
      >
        <h1 className="text-4xl font-semibold text-white mb-8">
          👋 Hello, I&apos;m Ujen Basi
        </h1>

        <div className="text-gray-100 text-xl leading-relaxed mb-4">
          <p className="my-3">
            I’m a Front-end Developer who loves creating beautiful websites.
          </p>
          <p className="my-4">
            I’ve been a developer since I started my developer career 1 years
            ago, and have always taken a deep interest in making websites the
            best they can be for everyone using them.
          </p>
          <p className="my-4">
            Now I develop beautiful websites which focus on providing the best
            experience for everyone using them, delivering the best experience
            for your users.
          </p>
        </div>

        <p ref={ref} className="mt-6 text-gray-100 text-xl mb-4">
          Here are a few technologies I&apos;ve been working with:
        </p>
        <ul className="tech-grid">
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />

            <span className="text-gray-200 font-medium">Javascript (ES6+)</span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />

            <span className="text-gray-200 font-medium">React</span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />

            <span className="text-gray-200 font-medium">Nextjs</span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />

            <span className="text-gray-200 font-medium">Nodejs</span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />

            <span className="text-gray-200 font-medium">Mongodb</span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />

            <span className="text-gray-200 font-medium">Postgresql</span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />

            <span className="text-gray-200 font-medium">Graphql</span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />

            <span className="text-gray-200 font-medium">trpc / T3-stack</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
