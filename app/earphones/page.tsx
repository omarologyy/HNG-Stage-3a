import Gear from "@/components/audio/Gear";
import Guide from "@/components/earphones/Guide";
import NavbarEarphones from "@/components/earphones/Navbar";
import Footer from "@/components/footer/Footer";
import Gadgets from "@/components/gadget/Gadgets";
import React from "react";

function EarphonesPage() {
  return (
    <>
      <NavbarEarphones />
      <Guide />
      <Gadgets />
      <Gear />
      <Footer />
    </>
  );
}

export default EarphonesPage;
