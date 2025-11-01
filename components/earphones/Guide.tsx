import React from "react";
import Image from "next/image";
import Speak from "@/public/images/speakerImgs/SpSvg.svg";
import ZSpeaker from "@/public/images/speakerImgs/ZSpeak.svg";
import EarPhonesMobile from "@/public/images/earphoneImgs/Earphone.svg";

function Guide() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white px-6">
      {/* Earphones */}
      <div>
        <div className="card-headphone-one relative mt-16">
          <Image
            src={EarPhonesMobile}
            alt="Black headphone"
            className="object-contain"
          />
        </div>
        <div className="text-center mt-8">
          <p className="tracking-[8px] text-sm text-gray-400 mb-4">
            NEW PRODUCT
          </p>
          <h1 className="text-4xl font-extrabold mb-6 leading-tight text-black">
            YX1 WIRELESS <br /> EARPHONES
          </h1>
          <p className="text-gray-300 mb-8 text-[15px] leading-relaxed">
            <span>Tailor your listening experience with bespoke</span>
            <br />
            <span>dynamic drivers from the new YX1 Wireless</span>
            <br />
            <span>Earphones. Enjoy incredible high-fidelity</span>
            <br />
            <span>sound even in noisy environments with its</span>
            <br />
            <span>active noise cancellation feature.</span>
          </p>
          <button className="bg-button-one hover:bg-button-two transition-colors text-white font-semibold px-8 py-3 tracking-wide">
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Guide;
