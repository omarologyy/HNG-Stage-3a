import React from "react";
import Image from "next/image";
import Speak from "@/public/images/speakerImgs/SpSvg.svg";
import ZSpeaker from "@/public/images/speakerImgs/ZSpeak.svg";

function Guide() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-col items-center w-full bg-white text-black space-y-28 py-20">
        {/* Product 1 - ZX9 Speaker */}
        <div className="flex flex-row items-center justify-center space-x-24 w-4/5">
          <div className="bg-[#F1F1F1] flex justify-center items-center w-[540px] h-[560px] rounded-lg">
            <Image
              src={Speak}
              alt="ZX9 Speaker"
              className="object-contain w-[300px] h-[340px]"
            />
          </div>
          <div className="max-w-[445px]">
            <p className="tracking-[10px] text-[14px] text-button-one mb-6 uppercase">
              New Product
            </p>
            <h1 className="text-[40px] font-bold leading-11 mb-8">
              XX99 MARK II <br /> HEADPHONES
            </h1>
            <p className="text-black opacity-50 text-[15px] leading-[25px] mb-10">
              <span>Upgrade your sound system with the all new ZX9 active</span>
              <br />
              <span>
                speaker. It&apos;s a bookshelf speaker system that offers truly
              </span>
              <br />
              <span>
                wireless connectivity --creating new possibilities for more
                pleasing and practical audio setups.
              </span>
            </p>

            <button className="bg-button-one hover:bg-button-two transition-colors text-white font-semibold px-8 py-3 tracking-wide">
              {" "}
              SEE PRODUCT{" "}
            </button>
          </div>
        </div>

        {/* Product 2 - ZX7 Speaker */}
        <div className="flex flex-row items-center justify-center space-x-24 w-4/5">
          <div className="max-w-[445px]">
            <p className="tracking-[10px] text-[14px] text-button-one mb-6 uppercase">
              New Product
            </p>
            <h1 className="text-[40px] font-bold leading-11 mb-8">
              XX99 MARK I <br /> HEADPHONES
            </h1>
            <p className="text-black text-[13px] leading-[25px] mb-10 opacity-50">
              <span>
                Stream high quality sound wirelessly with minimal loss. The ZX7
              </span>
              <br />
              <span>
                bookshelf speaker uses high-end audiophile components that
              </span>
              <br />
              <span>
                represents the top of the line powered speakers for home or
              </span>
              <br />
              <span>studio use.</span>
            </p>
            <button className="bg-button-one hover:bg-button-two transition-colors text-white font-semibold px-8 py-3 tracking-wide">
              {" "}
              SEE PRODUCT{" "}
            </button>
          </div>
          <div className="bg-[#F1F1F1] flex justify-center items-center w-[540px] h-[560px] rounded-lg">
            <Image
              src={ZSpeaker}
              alt="XX99 Mark I"
              className="object-contain w-[300px] h-[340px]"
            />
          </div>
        </div>
      </div>

      {/* TABLET VIEW */}
      <div className="hidden lg:hidden md:flex flex-col justify-center items-center min-h-screen text-white px-6">
        {/* Black Headphones */}
        <div>
          <div className="card-headphone-two relative mt-16">
            <Image
              src={Speak}
              alt="Black headphone"
              className="object-contain"
            />
          </div>
          <div className="text-center mt-8">
            <p className="tracking-[8px] text-[14px] text-button-one mb-4">
              NEW PRODUCT
            </p>
            <h1 className="text-[40px] font-bold mb-6 leading-tight text-black">
              XX99 MARK II <br /> HEADPHONES
            </h1>
            <p className="text-black text-[15px] leading-[25px] mb-10 opacity-50">
              <span>
                Upgrade your sound system with the all new ZX9 active speaker.
                It&apos;s a bookshelf
              </span>
              <br />
              <span>
                speaker system that offers truly wireless connectivity
                --creating new possibilities
              </span>
              <br />
              <span>for more pleasing and practical audio setups.</span>
            </p>

            <button className="bg-button-one hover:bg-button-two transition-colors text-white font-semibold px-8 py-3 tracking-wide">
              SEE PRODUCT
            </button>
          </div>
        </div>
        {/* Mark Headphones */}
        <div>
          <div className="card-headphone-two relative mt-16">
            <Image
              src={ZSpeaker}
              alt="Black headphone"
              className="object-contain"
            />
          </div>
          <div className="text-center mt-8">
            <p className="tracking-[8px] text-sm text-button-one mb-4">
              NEW PRODUCT
            </p>
            <h1 className="text-4xl font-extrabold mb-6 leading-tight text-black">
              XX99 MARK I <br /> HEADPHONES
            </h1>
            <p className="text-black text-[15px] leading-[25px] mb-10 opacity-50">
              <span>
                Stream high quality sound wirelessly with minimal loss. The ZX7
                bookshelf
              </span>
              <br />
              <span>
                speaker uses high-end audiophile components that represents the
                top of the line
              </span>
              <br />
              <span>powered speakers for home or studio use.</span>
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
          <div className="card-headphone-one relative mt-16">
            <Image
              src={Speak}
              alt="Black headphone"
              className="object-contain"
            />
          </div>
          <div className="text-center mt-8">
            <p className="tracking-[8px] text-sm text-gray-400 mb-4">
              NEW PRODUCT
            </p>
            <h1 className="text-4xl font-extrabold mb-6 leading-tight text-black">
              XX99 MARK II <br /> HEADPHONES
            </h1>
            <p className="text-black opacity-50 mb-8 text-[15px] leading-relaxed">
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
        {/* Mark Headphones */}
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
              XX99 MARK I <br /> HEADPHONES
            </h1>
            <p className="text-black mb-8 text-[15px] leading-relaxed opacity-50">
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
    </>
  );
}

export default Guide;
