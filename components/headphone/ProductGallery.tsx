import React from "react";
import PicOne from "@/public/images/headphoneImgs/ManPD.png";
import PicTwo from "@/public/images/headphoneImgs/ManPD1.png";
import PicThree from "@/public/images/headphoneImgs/ManPD2.png";
import DesktopOne from "@/public/images/headphoneImgs/ManDesktopOne.png";
import DesktopTwo from "@/public/images/headphoneImgs/DesktopTwo.png";
import DesktopThree from "@/public/images/headphoneImgs/DesktopThree.png";
import Image from "next/image";

function ProductGallery() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:hidden lg:flex mt-[88px] space-x-[30px] justify-center items-center">
        <div className="flex flex-col space-y-8">
          <Image src={DesktopOne} alt="Gallery one" />
          <Image src={DesktopTwo} alt="Gallery two" />
        </div>
        <Image src={DesktopThree} alt="Gallery three" />
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

export default ProductGallery;
