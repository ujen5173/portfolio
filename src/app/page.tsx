import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import Info from "./_components/Info";
import TechStack from "./_components/TechStack";
import Work from "./_components/Work";

const Home = () => {
  return (
    <>
      <Header />
      <Info />
      <HeroSection />
      <TechStack />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
