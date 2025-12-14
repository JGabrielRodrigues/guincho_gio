import React from "react";
import Hero from "../components/hero";
import Services from "../components/services";
import Contact from '../components/contact';
import Carousel from "../components/corousel";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
        <Hero />
        <Services />
        <Carousel />
        <Contact />
        <Footer />
    </>
  );
}
