import Head from "next/head";
import { GetInTouch } from "../components/Home";
import { motion } from "framer-motion";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="title" content="About:Ujen Basi" />

        <meta
          name="description"
          content="Read about how I got started as a front end developer, my experience, skills and tech stack."
        />
      </Head>
      <header className="flex items-center justify-center px-6 container mx-auto">
        <div className="text-white pt-20">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="text-xl font-medium text-gray-200 mb-6 text-center"
          >
            Hi there,
          </motion.h2>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 1,
            }}
            className="text-5xl font-semibold mb-10 text-center"
          >
            My name is Ujen Basi.
          </motion.h1>
        </div>
      </header>
      <motion.section
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 1.2,
        }}
        className="container mx-auto px-6 py-10 text-white text-justify"
      >
        <p className="text-gray-300 text-xl my-6">
          My interest on web development started back in 2019 during lockdown. I
          really enjoyed learning HTML, CSS, Javascript. I am always curious
          about how web really works, how internet actually works. I am
          currently learning Nextjs.
        </p>
        <p className="text-gray-300 text-xl my-6">
          Today, I have gained knowledge and experience in web development. My
          main focus is on frontend development. I have some experience in
          backend development as well. I am always looking for new challenges
          and opportunities. My main focus these days is on mastering frontend
          technologies.
        </p>
        <div>
          <p className="text-gray-300 text-lg my-3">
            Some of the technologies I am familiar with are:
          </p>
          <ul className="tech-grid">
            <li className="text-gray-100 text-xl mb-4">
              <i className="uil uil-angle-right-b mr-1" />

              <span className="text-gray-200 font-medium">
                Javascript (ES6+)
              </span>
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

              <span className="text-gray-200 font-medium">Graphql</span>
            </li>
          </ul>
        </div>
      </motion.section>
      <GetInTouch delayStarting={1.6} />
    </>
  );
};

export default about;
