import Head from "next/head";

import { About, GetInTouch, Hero, Project } from "../components/Home";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ujen Basi - Frontend Developer</title>
      </Head>
      <Hero />
      <About />
      <Project />
      <GetInTouch />
    </>
  );
};

export default Home;
