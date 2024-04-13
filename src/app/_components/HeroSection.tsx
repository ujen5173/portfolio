import Balancer from "react-wrap-balancer";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 md:px-8 pt-12 pb-24 md:py-36">
        <h1 className="text-4xl lg:text-6xl mb-6 lg:leading-snug font-semibold text-slate-50">
          I&apos;m a Full Stack Developer, <br /> building engineering
          excellence <br /> in every line of code.
        </h1>
        <Balancer>
          <p className="text-xl lg:text-2xl text-slate-100">
            With years of experience in Full Stack Development, I have honed my
            skills in crafting responsive and scalable applications. I am
            dedicated to delivering solutions that not only meet but exceed
            client expectations.
          </p>
        </Balancer>
      </div>
    </section>
  );
};

export default HeroSection;
