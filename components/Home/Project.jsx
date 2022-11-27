import ProjectCard from "../sub-components/card";
import { projects } from "../../utils/projects";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Project = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 25 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <section className="container mx-auto px-6" style={{ marginTop: "100px" }}>
      <div className="w-full xl:w-9/12 mx-auto py-6">
        <header className="mb-8">
          <motion.h1
            variants={boxVariant}
            initial="hidden"
            animate={control}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              // delay: 0.3,
            }}
            className="text-4xl font-semibold text-white mb-4"
          >
            Some Things I&apos;ve Built
          </motion.h1>
          <motion.p
            variants={boxVariant}
            initial="hidden"
            animate={control}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              // delay: 0.3,
            }}
            className="text-xl text-white"
          >
            Here are some of my favorite projects. I&apos;ve worked on a few of
            them, but I&apos;m always looking for new and exciting projects to
            work on.
          </motion.p>
        </header>
        <motion.main ref={ref}>
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.main>
      </div>
    </section>
  );
};

export default Project;
