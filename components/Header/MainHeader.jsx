import Link from "next/link";
import { motion } from "framer-motion";

const MainHeader = () => {
  return (
    <div className="hidden lg:block container mx-auto px-6">
      <nav className="flex items-center justify-between text-white py-4">
        <Link href="/">
          <motion.button
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
              delay: 0,
            }}
            className="text-lg"
          >
            Ujen Basi
          </motion.button>
        </Link>
        <div className="flex items-center gap-3">
          <ul className="flex items-center gap-3 list-none">
            <motion.li
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
                delay: 0.2,
              }}
              className="flex items-center"
            >
              <Link href="/about">
                <button className="text-lg btn-nav">About</button>
              </Link>
            </motion.li>
            <motion.li
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
                delay: 0.3,
              }}
              className="flex items-center"
            >
              <Link href="/projects">
                <button className="text-lg btn-nav">Projects</button>
              </Link>
            </motion.li>
            <motion.li
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
                delay: 0.4,
              }}
              className="text-lg"
            >
              <a href="mailto:ujenbasi1122@gmail.com">
                <button className="btn-call-to-action-s">Hire me today</button>
              </a>
            </motion.li>
            <motion.li
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
                delay: 0.5,
              }}
              className="flex items-center"
            >
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/ujen5173"
              >
                <button className="text-lg px-3 py-2 rounded-full text-white hover:text-gray-300">
                  <i className="text-2xl uil uil-github"></i>
                </button>
              </a>
            </motion.li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MainHeader;
