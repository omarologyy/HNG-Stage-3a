import React from "react";
import MicOne from "@/public/images/headphoneImgs/MicPicOne.png";
import MicTwo from "@/public/images/headphoneImgs/MicPicTwo.png";
import MicThree from "@/public/images/headphoneImgs/MicPicThree.png";
2;
import SpeakOne from "@/public/images/headphoneImgs/SpeakOne.png";
import SpeakTwo from "@/public/images/headphoneImgs/SpeakTwo.png";
import SpeakThree from "@/public/images/headphoneImgs/SpeakThree.png";
2;
import Image from "next/image";

function ProductGalleryOne() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:hidden lg:flex mt-[88px] space-x-[30px] justify-center items-center">
        <div className="flex flex-col space-y-8">
          <Image src={SpeakOne} alt="Gallery one" />
          <Image src={SpeakTwo} alt="Gallery two" />
        </div>
        <Image src={SpeakThree} alt="Gallery three" />
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col mt-[88px] space-y-6 justify-center items-center">
        <Image src={MicOne} alt="Gallery one" />
        <Image src={MicTwo} alt="Gallery two" />
        <Image src={MicThree} alt="Gallery three" />
      </div>
    </>
  );
}

export default ProductGalleryOne;
