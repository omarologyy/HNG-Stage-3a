import React from "react";
import PicOne from "@/public/images/speakerImgs/SpeakOne.png";
import PicTwo from "@/public/images/speakerImgs/SpeakTwo.png";
import PicThree from "@/public/images/speakerImgs/SpeakThree.png";
import SevenSpeakOne from "@/public/images/speakerImgs/SevenSpeakOne.png";
import SevenSpeakTwo from "@/public/images/speakerImgs/SevenSpeakTwo.png";
import SevenSpeakThree from "@/public/images/speakerImgs/SevenSpeakThree.png";
import Image from "next/image";

function SpeakerGallery() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:hidden lg:flex mt-[88px] space-x-[30px] justify-center items-center">
        <div className="flex flex-col space-y-8">
          <Image src={SevenSpeakOne} alt="Gallery one" />
          <Image src={SevenSpeakTwo} alt="Gallery two" />
        </div>
        <Image src={SevenSpeakThree} alt="Gallery three" />
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col mt-[88px] space-y-6 justify-center items-center">
        <Image src={PicOne} alt="Gallery one" />
        <Image src={PicTwo} alt="Gallery two" />
        <Image src={PicThree} alt="Gallery three" />
      </div>
    </>
  );
}

export default SpeakerGallery;
