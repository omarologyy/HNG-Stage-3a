import React from "react";
import Navbar from "../navbar/Navbar";
import Gadgets from "../gadget/Gadgets";
import Gear from "../audio/Gear";
import Footer from "../footer/Footer";
import HeroProductOne from "./HeroProductOne";
import FeatureProductOne from "./FeatureProductOne";
import ProductGalleryOne from "./ProductGalleryOne";
import FavoriteOne from "./FavoriteOne";

function MarkTwoProductDetails() {
  return (
    <>
      <Navbar />
      <HeroProductOne />
      <FeatureProductOne />
      <ProductGalleryOne />
      <FavoriteOne />
      <Gadgets />
      <Gear />
      <Footer />
    </>
  );
}

export default MarkTwoProductDetails;
