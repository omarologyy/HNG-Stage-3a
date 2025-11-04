import React from "react";
import WhiteOne from "@/public/images/headphoneImgs/WhitePicOne.png";
import WhiteTwo from "@/public/images/headphoneImgs/WhitePicTwo.png";
import WhiteThree from "@/public/images/headphoneImgs/WhitePicThree.png";
import WhiteDOne from "@/public/images/headphoneImgs/WhiteDesktopOne.png";
import WhiteDTwo from "@/public/images/headphoneImgs/WhiteDesktopTwo.png";
import WhiteDThree from "@/public/images/headphoneImgs/WhiteDesktopThree.png";
import Image from "next/image";

function ProductGalleryTwo() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:hidden lg:flex mt-[88px] space-x-[30px] justify-center items-center">
        <div className="flex flex-col space-y-8">
          <Image src={WhiteDOne} alt="Gallery one" />
          <Image src={WhiteDTwo} alt="Gallery two" />
        </div>
        <Image src={WhiteDThree} alt="Gallery three" />
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col mt-[88px] space-y-6 justify-center items-center">
        <Image src={WhiteOne} alt="Gallery one" />
        <Image src={WhiteTwo} alt="Gallery two" />
        <Image src={WhiteThree} alt="Gallery three" />
      </div>
    </>
  );
}

export default ProductGalleryTwo;
