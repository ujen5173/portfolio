import Balancer from "react-wrap-balancer";
import Contact from "../_components/Contact";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import WantHelp from "../_components/WantHelp";
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
        <div className="">
          <h1 className="text-center text-4xl lg:text-6xl lg:leading-snug font-semibold mb-8 text-slate-50">
            Works
          </h1>
          <Balancer>
            <h3 className="text-center text-2xl font-semibold mb-32 text-slate-50">
              I work with different teams to turn their vision into reality,
              their ideas into products, <br /> and their thoughts into
              experience.
            </h3>
          </Balancer>
        </div>
        <div>
          <WantHelp />
        </div>
      </div>
    </section>
  );
};
