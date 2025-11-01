import Gear from "@/components/audio/Gear";
import Footer from "@/components/footer/Footer";
import Gadgets from "@/components/gadget/Gadgets";
import Guide from "@/components/speak/Guide";
import Hero from "@/components/speak/Hero";
import Navbar from "@/components/speak/Navbar";
import React from "react";

function SpeakersPage() {
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

export default SpeakersPage;
