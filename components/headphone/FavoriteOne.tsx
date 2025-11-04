import Image from "next/image";
import React from "react";
import BlackHead from "@/public/images/headphoneImgs/BlackProductDetailOne.svg";
import BlackHeadSpeaker from "@/public/images/headphoneImgs/BlackSpeakerDesktop.svg";
import WhiteHeadDesktop from "@/public/images/headphoneImgs/WhiteHeadphoneDesktop.svg";
import MarkTwo from "@/public/images/headphoneImgs/MarkTwoDesktop.png";
import WhiteHead from "@/public/images/headphoneImgs/WhiteProductDetailTwo.svg";
import SpeakerHead from "@/public/images/headphoneImgs/SpeakerProductDetailOne.svg";

function FavoriteOne() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:hidden justify-between items-center lg:flex flex-col mt-40">
        <h1 className="font-bold text-[32px]">YOU MAY ALSO LIKE</h1>
        <div className="mt-16 space-x-[30px] flex">
          <div className="flex flex-col justify-center items-center">
            <div className="card-speaker-product-desktop relative">
              <Image src={MarkTwo} alt="black headphones" />
            </div>
            <h3 className="mt-8 font-bold text-[24px]">XX99 MARK I</h3>
            <button className="card-headphone-cart-two text-white mt-8">
              SEE PRODUCT
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="card-speaker-product-desktop relative">
              <Image src={WhiteHeadDesktop} alt="white headphones" />
            </div>
            <h3 className="mt-8 font-bold text-[24px]">XX59 </h3>
            <button className="card-headphone-cart-two text-white mt-8">
              SEE PRODUCT
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="card-speaker-product-desktop relative">
              <Image src={BlackHeadSpeaker} alt="black head speaker" />
            </div>
            <h3 className="mt-8 font-bold text-[24px]">ZX9 SPEAKER</h3>
            <button className="card-headphone-cart-two text-white mt-8">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
      {/* TABLET VIEW */}
      {/* MOBILE VIEW */}
      <div className="md:hidden justify-between items-center flex flex-col mt-[120px]">
        <h1 className="font-bold text-[24px]">YOU MAY ALSO LIKE</h1>
        <div className="mt-14">
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="card-speaker-product relative">
              <Image src={BlackHead} alt="earphones" />
            </div>
            <h3 className="mt-8 font-bold text-[24px]">XX99 MARK II</h3>
            <button className="card-headphone-cart-two text-white mt-8">
              SEE PRODUCT
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="card-speaker-product relative">
              <Image src={WhiteHead} alt="earphones" />
            </div>
            <h3 className="mt-8 font-bold text-[24px]">XX59</h3>
            <button className="card-headphone-cart-two text-white mt-8">
              SEE PRODUCT
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="card-speaker-product relative">
              <Image src={SpeakerHead} alt="earphones" />
            </div>
            <h3 className="mt-8 font-bold text-[24px]">ZX9 SPEAKER</h3>
            <button className="card-headphone-cart-two text-white mt-8">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FavoriteOne;
