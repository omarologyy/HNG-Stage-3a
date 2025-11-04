import React from "react";
import Navbar from "../navbar/Navbar";
import HeroEarphones from "./HeroEarphones";
import FeatureEarphones from "./FeatureEarphones";
import EarphonesGallery from "./EarphonesGallery";
import FavoriteEarphones from "./FavoriteEarphones";
import Gadgets from "../gadget/Gadgets";
import Gear from "../audio/Gear";
import Footer from "../footer/Footer";

function EProductDetails() {
  return (
    <>
      <Navbar />
      <HeroEarphones />
      <FeatureEarphones />
      <EarphonesGallery />
      <FavoriteEarphones />
      <Gadgets />
      <Gear />
      <Footer />
    </>
  );
}

export default EProductDetails;
