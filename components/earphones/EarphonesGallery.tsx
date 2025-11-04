import React from "react";
import MicOne from "@/public/images/earphoneImgs/EarphoneOne.png";
import MicTwo from "@/public/images/earphoneImgs/EarphoneTwo.png";
import MicThree from "@/public/images/earphoneImgs/EarphoneThree.png";
import EarOne from "@/public/images/earphoneImgs/EarOne.png";
import EarTwo from "@/public/images/earphoneImgs/EarTwo.png";
import EarThree from "@/public/images/earphoneImgs/EarThree.png";
import Image from "next/image";

function EarphonesGallery() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:hidden lg:flex mt-[88px] space-x-[30px] justify-center items-center">
        <div className="flex flex-col space-y-8">
          <Image src={EarOne} alt="Gallery one" />
          <Image src={EarTwo} alt="Gallery two" />
        </div>
        <Image src={EarThree} alt="Gallery three" />
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

export default EarphonesGallery;
