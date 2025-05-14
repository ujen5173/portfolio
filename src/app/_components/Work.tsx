import { merriweather } from "@/configs/font";
import { ExternalLink, Github } from "lucide-react";
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
          className={`text-center text-4xl lg:text-6xl lg:leading-snug font-semibold mb-16 text-slate-50 ${merriweather.className}`}
        >
          Projects I&apos;m Proud of
        </h1>

        <div className="space-y-36">
          {(selected ? selectedProjects : projects).map((project) => (
            <div
              key={project.id}
              className="rounded-xl border custom-cursor-area border-slate-600/40 p-4 sm:p-8 md:p-12 sticky top-28 left-0 bg-gray-900/95 backdrop-blur-md shadow-2xl z-[70] transition-all duration-300 hover:border-slate-500/60 hover:shadow-slate-500/20"
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="space-y-2">
                  <Link
                    target="_blank"
                    href={project.link.live ?? "#"}
                    className="group inline-flex items-center gap-2"
                  >
                    <h1
                      className={`text-xl md:text-2xl lg:text-3xl text-slate-50 font-semibold ${merriweather.className} group-hover:text-blue-400 transition-colors`}
                    >
                      {project.title}
                    </h1>
                    <ExternalLink
                      size={20}
                      className="text-slate-400 group-hover:text-blue-400 transition-colors"
                    />
                  </Link>
                  <p className="text-slate-400 italic text-base">
                    {project.startedBuilding} -{" "}
                    {project.onGoing
                      ? "Present"
                      : project.onPause
                      ? "Pause (will be working on future)"
                      : project.endingDate}
                  </p>
                </div>
                {project.link.github && (
                  <Link
                    href={project.link.github ?? "#"}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    target="_blank"
                  >
                    <Github size={24} />
                  </Link>
                )}
              </div>

              <div className="flex items-center gap-2 mb-8 flex-wrap">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-slate-800 rounded-md border border-slate-300/40 bg-slate-100 font-medium text-sm hover:bg-slate-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h2 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                      Why I build?
                      <span className="w-8 h-[1px] bg-slate-600"></span>
                    </h2>
                    <ul className="space-y-2 text-slate-300 text-lg">
                      {project.why_i_build.map((reason) => (
                        <li key={reason} className="flex items-start gap-2">
                          <span className="text-blue-400 ">•</span>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.inspiration && (
                    <blockquote>
                      <p className="italic text-blue-400 text-lg leading-relaxed">
                        — {project.inspiration}
                      </p>
                    </blockquote>
                  )}
                </div>

                <Link
                  href={project.link.live ?? "#"}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    width={1200}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
