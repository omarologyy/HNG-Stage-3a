import React from "react";
import Navbar from "../navbar/Navbar";
import HeroProduct from "./HeroProduct";
import FeatureProduct from "./FeatureProduct";
import ProductGallery from "./ProductGallery";
import Favorite from "./Favorite";
import Gadgets from "../gadget/Gadgets";
import Gear from "../audio/Gear";
import Footer from "../footer/Footer";

function MarkOneProductDetails() {
  return (
    <>
      <Navbar />
      <HeroProduct />
      <FeatureProduct />
      <ProductGallery />
      <Favorite />
      <Gadgets />
      <Gear />
      <Footer />
    </>
  );
}

export default MarkOneProductDetails;
