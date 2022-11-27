import { motion } from "framer-motion";
// import PDF from "/resume.pdf";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-120px)] flex items-center px-6">
      <div className="container mx-auto">
        <div className="mx-auto w-11/12 lg:w-9/12 xl:w-8/12">
          <motion.h2
            animate={{
              y: 0,
              opacity: 1,
            }}
            initial={{
              y: 20,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="text-md lg:text-xl xl:text-2xl font-medium text-center text-gray-100 mb-6"
          >
            Self-taught Front End Developer,
          </motion.h2>
          <motion.h1
            animate={{
              y: 0,
              opacity: 1,
            }}
            initial={{
              y: 20,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.9,
            }}
            className="text-4xl lg:text-6xl mx-auto leading-normal mb-10 text-center font-semibold text-gray-100"
          >
            I build beautiful website with responsive design.
          </motion.h1>
          <motion.button
            animate={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 1,
            }}
            className="block mx-auto text-white btn-call-to-action-p tracking-wider text-lg"
          >
            <a href={"/resume.pdf"} rel="noopener noreferrer" target="_blank">
              Resume
            </a>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
