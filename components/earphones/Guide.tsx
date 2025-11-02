import React from "react";
import Image from "next/image";
import EarPhonesMobile from "@/public/images/earphoneImgs/Earphone.svg";
import EarPhonesHP from "@/public/images/earphoneImgs/EarphoneDesktop.svg";
import EarPhonesTab from "@/public/images/earphoneImgs/EarphoneTablet.svg";

function Guide() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-col items-center w-full bg-white text-black space-y-28 py-20">
        {/* Product 1 - ZX9 Speaker */}
        <div className="flex flex-row items-center justify-center space-x-24 w-4/5">
          <div className="bg-[#F1F1F1] flex justify-center items-center w-[540px] h-[560px] rounded-lg">
            <Image
              src={EarPhonesHP}
              alt="Desktop earphone"
              className="object-contain w-[300px] h-[340px]"
            />
          </div>
          <div className="max-w-[445px]">
            <p className="tracking-[10px] text-[14px] text-button-one mb-6 uppercase">
              New Product
            </p>
            <h1 className="text-[40px] font-bold leading-11 mb-8">
              YX1 WIRELESS <br /> EARPHONES
            </h1>
            <p className="text-black opacity-50 text-[13px] text-medium leading-[25px] mb-10">
              <span>
                Tailor your listening experience with bespoke dynamic drivers
              </span>
              <br />
              <span>from the new YX1 Wireless Earphones. Enjoy incredible</span>
              <br />
              <span>
                high-fidelity sound even in noisy environments with its active
              </span>
              <br />
              <span>noise cancellation feature.</span>
            </p>

            <button className="bg-button-one hover:bg-button-two transition-colors text-white font-semibold px-8 py-3 tracking-wide">
              {" "}
              SEE PRODUCT{" "}
            </button>
          </div>
        </div>
      </div>

      {/* TABLET VIEW */}
      <div className="hidden lg:hidden md:flex flex-col justify-center items-center min-h-screen text-white px-6">
        {/* Black Headphones */}
        <div>
          <div className="card-headphone-two relative mt-8">
            <Image
              src={EarPhonesTab}
              alt="Tablet earphone"
              className="object-contain"
            />
          </div>
          <div className="text-center mt-8">
            <p className="tracking-[8px] text-[14px] text-button-one mb-4">
              NEW PRODUCT
            </p>
            <h1 className="text-[40px] font-bold mb-6 leading-tight text-black">
              YX1 WIRELESS <br /> EARPHONES
            </h1>
            <p className="text-black text-[15px] leading-[25px] mb-10 opacity-50">
              <span>
                Tailor your listening experience with bespoke dynamic drivers
                from the new YX1
              </span>
              <br />
              <span>
                Wireless Earphones. Enjoy incredible high-fidelity sound even in
                noisy
              </span>
              <br />
              <span>
                environments with its active noise cancellation feature.
              </span>
            </p>

            <button className="bg-button-one hover:bg-button-two transition-colors text-white font-semibold px-8 py-3 tracking-wide">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col justify-center items-center min-h-screen text-white px-6">
        {/* Black Headphones */}
        <div>
          <div className="card-headphone-one relative mt-8">
            <Image
              src={EarPhonesMobile}
              alt="Mobile earphone"
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
            <p className="text-black opacity-50 mb-8 text-[15px] leading-relaxed">
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
    </>
  );
}

export default Guide;
