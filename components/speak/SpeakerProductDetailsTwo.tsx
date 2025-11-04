import React from "react";
import Navbar from "../navbar/Navbar";
import Gadgets from "../gadget/Gadgets";
import Gear from "../audio/Gear";
import Footer from "../footer/Footer";
import HeroSpeakerProductOne from "./HeroSpeakerProductOne";
import FeatureSpeakerOne from "./FeatureSpeakerOne";
import SpeakerGalleryOne from "./SpeakerGalleryOne";
import FavoriteSpeakerOne from "./FavoriteSpeakerOne";

function SpeakerProductDetailsTwo() {
  return (
    <>
      <Navbar />
      <HeroSpeakerProductOne />
      <FeatureSpeakerOne />
      <SpeakerGalleryOne />
      <FavoriteSpeakerOne />
      <Gadgets />
      <Gear />
      <Footer />
    </>
  );
}

export default SpeakerProductDetailsTwo;
