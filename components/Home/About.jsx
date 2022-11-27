import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
            <span className="text-gray-100 text-xl mb-4">
              JavaScript (ES6+)
            </span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />
            <span className="text-gray-100 text-xl mb-4">Next.js</span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />
            <span className="text-gray-100 text-xl mb-4">Express.js</span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />
            <span className="text-gray-100 text-xl mb-4">Mongodb</span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />
            <span className="text-gray-100 text-xl mb-4">Graphql</span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />
            <span className="text-gray-100 text-xl mb-4">Tailwind css</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
