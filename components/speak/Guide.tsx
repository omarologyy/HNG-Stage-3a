import React from "react";
import Image from "next/image";
import Speak from "@/public/images/speakerImgs/SpSvg.svg";
import ZSpeaker from "@/public/images/speakerImgs/ZSpeak.svg";

function Guide() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white px-6">
      {/* Speakers */}
      <div>
        <div className="card-headphone-one relative mt-16">
          <Image src={Speak} alt="Black headphone" className="object-contain" />
        </div>
        <div className="text-center mt-8">
          <p className="tracking-[8px] text-sm text-gray-400 mb-4">
            NEW PRODUCT
          </p>
          <h1 className="text-4xl font-extrabold mb-6 leading-tight text-black">
            ZX9 <br /> SPEAKER
          </h1>
          <p className="text-gray-300 mb-8 text-[15px] leading-relaxed">
            <span>Upgrade your sound system with the all new</span>
            <br />
            <span>ZX9 active speaker. It’s a bookshelf speaker</span>
            <br />
            <span>system that offers truly wireless connectivity</span>
            <br />
            <span>- creating new possibilities for more pleasing</span>
            <br />
            <span>and practical audio setups.</span>
          </p>
          <button className="bg-button-one hover:bg-button-two transition-colors text-white font-semibold px-8 py-3 tracking-wide">
            SEE PRODUCT
          </button>
        </div>
      </div>
      {/* ZX7 Speaker */}
      <div>
        <div className="card-headphone-one relative mt-16">
          <Image
            src={ZSpeaker}
            alt="Black headphone"
            className="object-contain"
          />
        </div>
        <div className="text-center mt-8">
          <p className="tracking-[8px] text-sm text-gray-400 mb-4">
            NEW PRODUCT
          </p>
          <h1 className="text-4xl font-extrabold mb-6 leading-tight text-black">
            ZX7 <br /> SPEAKER
          </h1>
          <p className="text-gray-300 mb-8 text-[15px] leading-relaxed">
            <span>Stream high quality sound wirelessly with</span>
            <br />
            <span>minimal loss. The ZX7 bookshelf speaker uses</span>
            <br />
            <span>high-end audiophile components that </span>
            <br />
            <span>represents the top of the line powered </span>
            <br />
            <span>speakers for home or studio use.</span>
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
