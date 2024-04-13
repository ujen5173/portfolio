import Balancer from "react-wrap-balancer";
import Contact from "../_components/Contact";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Work from "../_components/Work";

const WorkPage = () => {
  return (
    <>
      <Header />
      <WordDetails />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default WorkPage;

const WordDetails = () => {
  return (
    <section className="w-full">
      <div className="container flex flex-col items-center mx-auto px-4 md:px-8 p-24">
        <h1 className="text-center text-6xl font-semibold mb-8 text-slate-50">
          .Works.
        </h1>
        <Balancer>
          <h3 className="text-center text-2xl font-semibold mb-32 text-slate-50">
            I work with different teams to turn their vision into reality, their
            ideas into products, <br /> and their thoughts into experience.
          </h3>
        </Balancer>
        <div>
          <h1 className="text-center text-4xl font-semibold mb-8 text-slate-50">
            Want help in the following area?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </div>
    </section>
  );
};
