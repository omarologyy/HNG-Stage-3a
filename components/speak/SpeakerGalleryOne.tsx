import React from "react";
import PicOne from "@/public/images/speakerImgs/BlackOne.png";
import PicTwo from "@/public/images/speakerImgs/BlackTwo.png";
import PicThree from "@/public/images/speakerImgs/BlackThree.png";
import ZOne from "@/public/images/speakerImgs/ZXOne.png";
import ZTwo from "@/public/images/speakerImgs/ZXTwo.png";
import ZThree from "@/public/images/speakerImgs/ZXThree.png";
import Image from "next/image";

function SpeakerGalleryOne() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:hidden lg:flex mt-[88px] space-x-[30px] justify-center items-center">
        <div className="flex flex-col space-y-8">
          <Image src={ZOne} alt="Gallery one" />
          <Image src={ZTwo} alt="Gallery two" />
        </div>
        <Image src={ZThree} alt="Gallery three" />
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

export default SpeakerGalleryOne;
