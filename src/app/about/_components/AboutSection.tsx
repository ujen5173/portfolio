import Balancer from "react-wrap-balancer";

const AboutSection = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 md:px-8 pt-12 pb-24 md:py-36">
        <div className="mb-40">
          <h1 className="text-6xl font-semibold mb-8 text-slate-50">
            About me
          </h1>

          <Balancer>
            <h3 className="text-2xl font-medium mb-16 text-slate-200">
              In the realm of full-stack development, I discover fulfillment in
              the delicate balance between form and function, sculpting digital
              experiences that seamlessly blend beauty and utility.
            </h3>
          </Balancer>

          <div className="grid grid-cols-3 gap-4">
            <div className=" ">
              <h2 className="text-xl font-semibold text-slate-300 mb-4 uppercase">
                Experience
              </h2>
              <h1 className="text-3xl font-bold text-slate-50">2 years</h1>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-300 mb-4 uppercase">
                Location
              </h2>
              <h1 className="text-3xl font-bold text-slate-50">
                Lalitpur, Nepal (NP)
              </h1>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-300 mb-4 uppercase">
                Freelance
              </h2>
              <div className="flex items-center gap-2">
                <div className="size-4 rounded-full bg-green-500"></div>
                <h1 className="text-3xl font-bold text-slate-50">Available</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-40">
          <h1 className="text-4xl font-semibold mb-8 text-slate-50">
            Want help in the following area?
          </h1>

          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-2xl border bg-slate-800 transition border-slate-600/40 p-6">
              <h1 className="text-xl font-semibold text-slate-50 mb-4 uppercase">
                Frontend development
              </h1>
              <h3 className="text-lg text-slate-300">
                I can help you with your frontend development needs. I have
                experience in building responsive and user-friendly websites.
              </h3>
            </div>
            <div className="rounded-2xl border bg-slate-800 transition border-slate-600/40 p-6">
              <h1 className="text-xl font-semibold text-slate-50 mb-4 uppercase">
                Backend development
              </h1>
              <h3 className="text-lg text-slate-300">
                I can help you with your backend development needs. I have
                experience in building scalable and secure backend systems.
              </h3>
            </div>
            <div className="rounded-2xl border bg-slate-800 transition border-slate-600/40 p-6">
              <h1 className="text-xl font-semibold text-slate-50 mb-4 uppercase">
                Database Design
              </h1>
              <h3 className="text-lg text-slate-300">
                I can help you with your database design needs. I have
                experience in designing scalable and reliable database.
              </h3>
            </div>
          </div>
        </div>

        <div className="mb-40">
          <h1 className="text-4xl font-semibold mb-8 text-slate-50">
            Experience
          </h1>

          <div className="grid grid-cols-3">
            <div>
              <h1 className="text-xl text-slate-50">March 2020 - June 2020</h1>
            </div>
            <div>
              <h1 className="text-xl text-slate-50">React.js Developer</h1>
              <h2 className="text-lg font-medium text-slate-300">Internship</h2>
            </div>
            <div>
              <ul className="list-disc space-y-4">
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
          <h1 className="text-4xl font-semibold mb-8 text-slate-50">
            Education
          </h1>

          <div className="grid grid-cols-3">
            <div>
              <h1 className="text-xl text-slate-50">March 2022 - June 2026</h1>
            </div>
            <div>
              <h1 className="text-xl text-slate-50">
                Bachelos in Computer Application (BCA)
              </h1>
              <h2 className="text-lg font-medium text-slate-300">
                Kathford International College
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
