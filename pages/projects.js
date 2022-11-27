import Head from "next/head";
import GetInTouch from "../components/Home/GetInTouch";
import ProjectCard from "../components/sub-components/card";
import { projects } from "../utils/projects";
import { motion } from "framer-motion";
const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="title" content="Projects: Ujen Basi" />

        <meta
          name="description"
          content="All the webpages, websites and applications I've created."
        />
      </Head>
      <section className="container mx-auto px-6">
        <header className="my-28 w-full lg:w-8/12 mx-auto text-center">
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
              delay: 0.8,
            }}
            className="text-white text-5xl font-bold text-center mb-8"
          >
            Projects
          </motion.h1>
          <motion.p
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
              delay: 0.9,
            }}
            className="text-gray-200 text-lg"
          >
            Over the time of learning web development, I have build many awesome
            projects. These are my recent and best projects i have created till
            this date. You can find all projects source code in my{" "}
            <a
              href="https://github.com/ujen5173"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              github
            </a>
            . All small to medium projects are listed here.
          </motion.p>
        </header>
        <main className=" w-full lg:w-10/12 mx-auto">
          {projects.map((project) => (
            <ProjectCard delayStarting={1} project={project} key={project.id} />
          ))}
        </main>
      </section>
      <GetInTouch />
    </>
  );
};

export default ProjectPage;
