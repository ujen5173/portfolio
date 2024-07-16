import WantHelp from "@/app/_components/WantHelp";
import Balancer from "react-wrap-balancer";

const AboutSection = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 md:px-8 pt-12 pb-24 md:py-36">
        <div className="mb-40">
          <h1 className="text-center text-4xl lg:text-6xl lg:leading-snug font-semibold mb-8 text-slate-50">
            About me
          </h1>

          <Balancer>
            <h3 className="text-center text-xl lg:text-2xl font-medium mb-16 text-slate-200">
              In the realm of full-stack development, I discover fulfillment in
              the delicate balance between form and function, sculpting digital
              experiences that seamlessly blend beauty and utility.
            </h3>
          </Balancer>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-300 mb-2 md:mb-4 uppercase">
                Experience
              </h2>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-50">
                2 years
              </h1>
            </div>
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-300 mb-2 md:mb-4 uppercase">
                Location
              </h2>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-50">
                Lalitpur, Nepal (NP)
              </h1>
            </div>
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-300 mb-2 md:mb-4 uppercase">
                Freelance
              </h2>
              <div className="flex items-center gap-2">
                <div
                style={{
                  width: "15px",
                  height: "15px",
                }}
                className="available-dot"></div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-50">
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
          <h1 className="text-3xl font-semibold mb-8 text-slate-50">
            Experience
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-4 md:mb-0">
              <h1 className="text-xl text-slate-50">March 2020 - June 2020</h1>
            </div>
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-medium text-slate-300">Internship</h2>
              <h1 className="text-xl text-slate-50">React.js Developer</h1>
            </div>
            <div className="mb-4 md:mb-0">
              <ul className="px-4 md:px-0 list-disc space-y-4">
                <li className="text-xl text-slate-50">
                  Designed the company website using React.js and Tailwind CSS.
                </li>
                <li className="text-xl text-slate-50">
                  Building user interfaces using React.js
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-3xl font-semibold mb-8 text-slate-50">
            Education
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mb-4 md:mb-0">
              <h1 className="text-xl text-slate-50">March 2022 - June 2026</h1>
            </div>
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-medium text-slate-300">
                Kathford International College
              </h2>
              <h1 className="text-xl text-slate-50">
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
