import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/Carousel";
import Destinations from "../components/Destinations";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Selects from "../components/Selects";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
