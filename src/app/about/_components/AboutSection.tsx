import WantHelp from "@/app/_components/WantHelp";

const AboutSection = () => {
  return (
    <section className="w-full">
      <div className="mx-auto px-4 md:px-8 md:py-36 pt-12 pb-24 container">
        <div className="mb-40">
          <h1 className="mb-8 font-semibold text-slate-50 text-4xl lg:text-6xl text-center lg:leading-snug">
            About me
          </h1>

          <h3 className="mb-16 text-slate-200 text-xl lg:text-2xl">
            I&apos;m a frontend developer with over two years of experience
            building web applications. I focus on writing clear, efficient code
            and designing interfaces that are easy to use. <br />
            <br />
            I&apos;ve worked on things like community platforms and scheduling
            tools, always aiming to keep performance solid and the experience
            smooth. I like figuring out how people use what I build and making
            sure it works well for them.
            <br />
            <br />
            Whether it&apos;s setting up a design system, managing app state, or
            connecting the frontend to backend services, I try to keep things
            simple and readable.
            <br />
            <br />
            I&apos;m always learning, always building, and I care about doing
            the work well.
            <br />
            <br />
            <span className="font-semibold text-blue-500/90 italic">
              — My goal: Build products that have a story to tell.
            </span>
          </h3>

          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-4 md:mb-0">
              <h2 className="mb-2 md:mb-4 font-semibold text-slate-300 text-lg md:text-xl lg:text-2xl uppercase">
                Experience
              </h2>
              <h1 className="font-bold text-slate-50 text-xl md:text-2xl lg:text-3xl">
                2+ years
              </h1>
            </div>
            <div className="mb-4 md:mb-0">
              <h2 className="mb-2 md:mb-4 font-semibold text-slate-300 text-lg md:text-xl lg:text-2xl uppercase">
                Location
              </h2>
              <h1 className="font-bold text-slate-50 text-xl md:text-2xl lg:text-3xl">
                Lalitpur, Nepal (NP)
              </h1>
            </div>
            <div className="mb-4 md:mb-0">
              <h2 className="mb-2 md:mb-4 font-semibold text-slate-300 text-lg md:text-xl lg:text-2xl uppercase">
                Freelance
              </h2>
              <div className="flex items-center gap-2">
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                  }}
                  className="available-dot"
                ></div>
                <h1 className="font-bold text-slate-50 text-xl md:text-2xl lg:text-3xl">
                  Available
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-40">
          <WantHelp />
        </div>

        <div className="mb-40">
          <h1 className="mb-8 font-semibold text-slate-50 text-3xl">
            Experience
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-4 md:mb-0">
              <h1 className="text-slate-50 text-xl">March 2020 - June 2020</h1>
            </div>
            <div className="mb-4 md:mb-0">
              <h2 className="font-medium text-slate-300 text-lg">
                Internship @NepaDristi
              </h2>
              <h1 className="text-slate-50 text-xl">React.js Intern</h1>
            </div>
            <div className="mb-4 md:mb-0">
              <ul className="space-y-4 px-4 md:px-0 list-disc">
                <li className="text-slate-50 text-xl">
                  Designed the company website using React.js and Tailwind CSS.
                </li>
                <li className="text-slate-50 text-xl">
                  Building user interfaces using React.js
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="mb-8 font-semibold text-slate-50 text-3xl">
            Education
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mb-4 md:mb-0">
              <h1 className="text-slate-50 text-xl">March 2022 - Sept 2026</h1>
            </div>
            <div className="mb-4 md:mb-0">
              <h2 className="mb-3 font-medium text-slate-300 text-3xl">
                Kathford International College
              </h2>
              <h1 className="text-slate-50 text-xl">
                Bachelors in Computer Application (BCA)
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
