import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
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
