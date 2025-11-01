import React from "react";
import Man from "@/public/images/man.png";
import TabMan from "@/public/images/TabletMan.png";
import ManDesktop from "@/public/images/ManDesktop.png";
import Image from "next/image";

function Gear() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-row justify-center items-center text-start space-x-[125px] mt-[200px] mb-[143px]">
        <div className="flex flex-col">
          <h1 className="uppercase text-[28px] w-[327px] h-[76px] font-bold ">
            <span>Bringing you the </span>
            <br />
            <span className="text-button-one">best </span>audio gear
          </h1>
          <p className="mt-8 text-start text-sm text-black">
            <span>
              Located at the heart of New York City, Audiophile is the premier
            </span>
            <br />
            <span>
              store for high end headphones, earphones, speakers, and audio
            </span>
            <br />
            <span>accessories. We have a large showroom and luxury </span>
            <br />
            <span>demonstration rooms available for you to browse and </span>
            <br />
            <span>
              experience a wide range of our products. Stop by our store to
            </span>
            <br />
            <span>
              meet some of the fantastic people who make Audiophile the
            </span>
            <br />
            <span>best place to buy your portable audio equipment.</span>
          </p>
        </div>
        <Image src={ManDesktop} alt="Man" />
      </div>
      {/* TABLET VIEW */}
      <div className="hidden lg:hidden md:flex flex-col mt-[120px] justify-center items-center text-center">
        <Image src={TabMan} alt="Man" />
        <h1 className="mt-10 uppercase text-[40px] w-[573px] h-[88px] font-bold ">
          <span>
            Bringing you the <span className="text-button-one">best </span>
          </span>
          <br />
          audio gear
        </h1>
        <p className="mt-8 text-center text-sm text-black mb-[120px]">
          <span>
            Located at the heart of New York City, Audiophile is the premier
            store for high end
          </span>
          <br />
          <span>
            headphones, earphones, speakers, and audio accessories. We have a
            large
          </span>
          <br />
          <span>
            showroom and luxury demonstration rooms available for you to browse
            and{" "}
          </span>
          <br />
          <span>
            experience a wide range of our products. Stop by our store to meet
            some of the
          </span>
          <br />
          <span>
            fantastic people who make Audiophile the best place to buy your
            portable audio
          </span>
          <br />
          <span>equipment.</span>
        </p>
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col mt-[120px] justify-center items-center text-center">
        <Image src={Man} alt="Man" />
        <h1 className="mt-10 uppercase text-[28px] w-[327px] h-[76px] font-bold ">
          <span>Bringing you the </span>
          <br />
          <span className="text-button-one">best </span>audio gear
        </h1>
        <p className="mt-8 text-center text-sm text-black mb-[120px]">
          <span>Located at the heart of New York City,</span>
          <br />
          <span>Audiophile is the premier store for high end</span>
          <br />
          <span>headphones, earphones, speakers, and audio</span>
          <br />
          <span>accessories. We have a large showroom and</span>
          <br />
          <span>luxury demonstration rooms available for you</span>
          <br />
          <span>to browse and experience a wide range of our</span>
          <br />
          <span>products. Stop by our store to meet some of</span>
          <br />
          <span>the fantastic people who make Audiophile the</span>
          <br />
          <span>the best place to buy your portable audio</span>
          <br />
          <span>equipment.</span>
        </p>
      </div>
    </>
  );
}

export default Gear;
