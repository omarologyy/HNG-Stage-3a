import Guide from "@/components/headphone/Guide";
import Gadgets from "@/components/gadget/Gadgets";
import React from "react";
import Gear from "@/components/audio/Gear";
import Footer from "@/components/footer/Footer";
import NavbarHeadphone from "@/components/headphone/Navbar";

function HeadPhonePage() {
  return (
    <>
      <NavbarHeadphone />
      <Guide />
      <Gadgets />
      <Gear />
      <Footer />
    </>
  );
}

export default HeadPhonePage;
