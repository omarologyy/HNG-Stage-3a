import React from "react";
import Image from "next/image";
import Black from "@/public/images/headphoneImgs/BlackSvg.svg";
import Mark from "@/public/images/headphoneImgs/MarkSvg.svg";
import FiftyNine from "@/public/images/headphoneImgs/FiftyNineSvg.svg";

function Guide() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-col items-center w-full bg-white text-black space-y-28 py-20">
        {/* Product 1 - XX99 MARK II */}
        <div className="flex flex-row items-center justify-center space-x-24 w-4/5">
          <div className="bg-[#F1F1F1] flex justify-center items-center w-[540px] h-[560px] rounded-lg">
            <Image
              src={Black}
              alt="XX99 Mark II"
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
            <p className="text-[#7D7D7D] text-[15px] leading-[25px] mb-10">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <button className="bg-button-one hover:bg-button-two transition-colors text-white font-semibold px-8 py-3 tracking-wide">
              {" "}
              SEE PRODUCT{" "}
            </button>
          </div>
        </div>

        {/* Product 2 - XX99 MARK I */}
        <div className="flex flex-row items-center justify-center space-x-24 w-4/5">
          <div className="max-w-[445px]">
            <p className="tracking-[10px] text-[14px] text-button-one mb-6 uppercase">
              New Product
            </p>
            <h1 className="text-[40px] font-bold leading-11 mb-8">
              XX99 MARK I <br /> HEADPHONES
            </h1>
            <p className="text-[#7D7D7D] text-[15px] leading-[25px] mb-10 opacity-50">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <button className="bg-button-one hover:bg-button-two transition-colors text-white font-semibold px-8 py-3 tracking-wide">
              {" "}
              SEE PRODUCT{" "}
            </button>
          </div>
          <div className="bg-[#F1F1F1] flex justify-center items-center w-[540px] h-[560px] rounded-lg">
            <Image
              src={Mark}
              alt="XX99 Mark I"
              className="object-contain w-[300px] h-[340px]"
            />
          </div>
        </div>

        {/* Product 3 - XX59 */}
        <div className="flex flex-row items-center justify-center space-x-24 w-4/5">
          <div className="bg-[#F1F1F1] flex justify-center items-center w-[540px] h-[560px] rounded-lg">
            <Image
              src={FiftyNine}
              alt="XX59 Headphones"
              className="object-contain w-[300px] h-[340px]"
            />
          </div>
          <div className="max-w-[445px]">
            <p className="tracking-[10px] text-[14px] text-button-one mb-6 uppercase">
              New Product
            </p>
            <h1 className="text-[40px] font-bold leading-11 mb-8">
              XX59 <br /> HEADPHONES
            </h1>
            <p className="text-[#7D7D7D] text-[15px] leading-[25px] mb-10 opacity-50">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
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
          <div className="card-headphone-two relative mt-16">
            <Image
              src={Black}
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
              <span className="block">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines
              </span>
              <span className="block">
                your premium headphone experience by reproducing the balanced
                depth and
              </span>
              <span className="block">precision of studio-quality sound.</span>
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
              src={Mark}
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
              <span className="block">
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and
              </span>
              <span className="block">
                accurate audio reproduction for audiophiles, mixing engineers,
                and music
              </span>
              <span className="block">
                aficionados alike in studios and on the go.
              </span>
            </p>

            <button className="bg-button-one hover:bg-button-two transition-colors text-white font-semibold px-8 py-3 tracking-wide">
              SEE PRODUCT
            </button>
          </div>
        </div>
        {/* FiftyNine Headphones */}
        <div>
          <div className="card-headphone-two relative mt-16">
            <Image
              src={FiftyNine}
              alt="Black headphone"
              className="object-contain"
            />
          </div>
          <div className="text-center mt-8">
            <p className="tracking-[8px] text-sm text-button-one mb-4">
              NEW PRODUCT
            </p>
            <h1 className="text-4xl font-extrabold mb-6 leading-tight text-black">
              XX59 <br /> HEADPHONES
            </h1>
            <p className="text-black text-[15px] leading-[25px] mb-10 opacity-50">
              <span className="block">
                Enjoy your audio almost anywhere and customize it to your
                specific tastes with
              </span>
              <span className="block">
                the XX59 headphones. The stylish yet durable versatile wireless
                headset is a
              </span>
              <span className="block">
                brilliant companion at home or on the move.
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
          <div className="card-headphone-one relative mt-16">
            <Image
              src={Black}
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
            <p className="text-gray-300 mb-8 text-[15px] leading-relaxed opacity-50">
              <span>The new XX99 Mark II headphones is the</span>
              <br />
              <span>pinnacle of pristine audio. It redefines your</span>
              <br />
              <span>premium headphone experience by</span>
              <br />
              <span>reproducing the balanced depth and precision</span>
              <br />
              <span>of studio-quality sound.</span>
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
              src={Mark}
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
            <p className="text-gray-300 mb-8 text-[15px] leading-relaxed opacity-50">
              <span>As the gold standard for headphones, the</span>
              <br />
              <span>classic XX99 Mark I offers detailed and</span>
              <br />
              <span>accurate audio reproduction for audiophiles, </span>
              <br />
              <span>mixing engineers, and music aficionados alike </span>
              <br />
              <span>in studios and on the go.</span>
            </p>
            <button className="bg-button-one hover:bg-button-two transition-colors text-white font-semibold px-8 py-3 tracking-wide">
              SEE PRODUCT
            </button>
          </div>
        </div>
        {/* FiftyNine Headphones */}
        <div>
          <div className="card-headphone-one relative mt-16">
            <Image
              src={FiftyNine}
              alt="Black headphone"
              className="object-contain"
            />
          </div>
          <div className="text-center mt-8">
            <p className="tracking-[8px] text-sm text-gray-400 mb-4">
              NEW PRODUCT
            </p>
            <h1 className="text-4xl font-extrabold mb-6 leading-tight text-black">
              XX59 <br /> HEADPHONES
            </h1>
            <p className="text-gray-300 mb-8 text-[15px] leading-relaxed opacity-50">
              <span>Enjoy your audio almost anywhere and</span>
              <br />
              <span>customize it to your specific tastes with the </span>
              <br />
              <span>XX59 headphones. The stylish yet durable</span>
              <br />
              <span>versatile wireless headset is a brilliant</span>
              <br />
              <span>companion at home or on the move.</span>
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
