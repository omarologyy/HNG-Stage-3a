import Gear from "@/components/audio/Gear";
import Footer from "@/components/footer/Footer";
import Gadgets from "@/components/gadget/Gadgets";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/navbar/Navbar";
import Speakers from "@/components/speaker/Speakers";

import React from "react";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gadgets />
      <Speakers />
      <Gear />
      <Footer />
    </>
  );
}

export default HomePage;
