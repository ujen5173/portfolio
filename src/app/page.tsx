import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import Info from "./_components/Info";
import Skills from "./_components/Skills";
import Work from "./_components/Work";

const Home = () => {
  return (
    <>
      <Header />
      <Info />
      <HeroSection />
      <Skills />
      <Work selected={true} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
