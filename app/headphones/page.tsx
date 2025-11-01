import Guide from "@/components/headphone/Guide";
import Gadgets from "@/components/gadget/Gadgets";
import Hero from "@/components/headphone/Hero";
import React from "react";
import Accessory from "@/components/headphone/accessory";
import Navbar from "@/components/headphone/Navbar";
import Speakers from "@/components/speaker/Speakers";
import Gear from "@/components/audio/Gear";
import Footer from "@/components/footer/Footer";

function HeadPhonePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Guide />
      <Gadgets />
      <Gear />
      <Footer />
    </>
  );
}

export default HeadPhonePage;
