import type { NextPage } from "next";
import HeroSection from "../components/home/HeroSection";
import MidSection from "../components/home/MidSection";

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <MidSection />
    </>
  );
};

export default Home;
