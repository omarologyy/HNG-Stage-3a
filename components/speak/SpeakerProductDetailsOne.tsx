import React from "react";
import Navbar from "../navbar/Navbar";
import Gadgets from "../gadget/Gadgets";
import Gear from "../audio/Gear";
import Footer from "../footer/Footer";
import HeroSpeakerProduct from "./HeroSpeakerProduct";
import FeatureSpeaker from "./FeatureSpeaker";
import SpeakerGallery from "./SpeakerGallery";
import FavoriteSpeaker from "./FavoriteSpeaker";

function SpeakerProductDetailsOne() {
  return (
    <>
      <Navbar />
      <HeroSpeakerProduct />
      <FeatureSpeaker />
      <SpeakerGallery />
      <FavoriteSpeaker />
      <Gadgets />
      <Gear />
      <Footer />
    </>
  );
}

export default SpeakerProductDetailsOne;
