import { merriweather } from "@/configs/font";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, selectedProjects } from "../_constants";

const Work = ({ selected = false }: { selected?: boolean }) => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 md:px-8 pt-12 pb-4 md:pb-24 md:py-36">
        <h1 className="text-center text-2xl font-semibold mb-8 text-slate-50">
          Works
        </h1>
        <h1
          className={`text-center text-4xl lg:text-6xl lg:leading-snug font-semibold mb-8 text-slate-50 ${merriweather.className}`}
        >
          Selected Projects
        </h1>

        <div className="">
          {(selected ? selectedProjects : projects).map((project) => (
            <div
              key={project.id}
              className="rounded-xl border custom-cursor-area border-slate-600/40 p-4 sm:p-8 md:p-12 mb-36 sticky top-28 left-0 bg-gray-900 z-[70]"
            >
              <div className="flex items-center justify-between gap-4">
                <Link target="_blank" href={project.link.live}>
                  <h1
                    className={`text-xl md:text-2xl lg:text-3xl text-slate-50 font-semibold mb-4 md:mb-6 ${merriweather.className}`}
                  >
                    {project.title}
                  </h1>
                </Link>
                <Link
                  href={project.link.github}
                  className="text-slate-300 text-lg"
                  target="_blank"
                >
                  <div>
                    <Github size={20} stroke="white" />
                  </div>
                </Link>
              </div>

              <div className="flex items-center gap-2 mb-8 flex-wrap">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-[10px] py-[5px] text-slate-800 rounded-md border border-slate-300/40 bg-slate-100 font-semibold text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link href={project.link.live}>
                <p className="text-slate-300 text-lg mb-8">
                  {project.description}
                </p>
              </Link>

              <Link href={project.link.live}>
                <Image
                  src={project.image}
                  alt="work"
                  className="w-full object-cover rounded-xl"
                  width={1200}
                  height={600}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
