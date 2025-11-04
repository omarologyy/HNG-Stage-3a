import React from "react";
import Navbar from "../navbar/Navbar";
import Gadgets from "../gadget/Gadgets";
import Gear from "../audio/Gear";
import Footer from "../footer/Footer";
import FavoriteTwo from "./FavoriteTwo";
import HeroProductTwo from "./HeroProductTwo";
import FeatureProductTwo from "./FeatureProductTwo";
import ProductGalleryTwo from "./ProductGalleryTwo";

function MarkThreeProductDetails() {
  return (
    <>
      <Navbar />
      <HeroProductTwo />
      <FeatureProductTwo />
      <ProductGalleryTwo />
      <FavoriteTwo />
      <Gadgets />
      <Gear />
      <Footer />
    </>
  );
}

export default MarkThreeProductDetails;
