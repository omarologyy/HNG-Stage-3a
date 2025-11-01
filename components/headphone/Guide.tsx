import React from "react";
import Image from "next/image";
import Black from "@/public/images/headphoneImgs/BlackSvg.svg";
import Mark from "@/public/images/headphoneImgs/MarkSvg.svg";
import FiftyNine from "@/public/images/headphoneImgs/FiftyNineSvg.svg";

function Guide() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white px-6">
      {/* Black Headphones */}
      <div>
        <div className="card-headphone-one relative mt-16">
          <Image src={Black} alt="Black headphone" className="object-contain" />
        </div>
        <div className="text-center mt-8">
          <p className="tracking-[8px] text-sm text-gray-400 mb-4">
            NEW PRODUCT
          </p>
          <h1 className="text-4xl font-extrabold mb-6 leading-tight text-black">
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p className="text-gray-300 mb-8 text-[15px] leading-relaxed">
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
          <Image src={Mark} alt="Black headphone" className="object-contain" />
        </div>
        <div className="text-center mt-8">
          <p className="tracking-[8px] text-sm text-gray-400 mb-4">
            NEW PRODUCT
          </p>
          <h1 className="text-4xl font-extrabold mb-6 leading-tight text-black">
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p className="text-gray-300 mb-8 text-[15px] leading-relaxed">
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
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p className="text-gray-300 mb-8 text-[15px] leading-relaxed">
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
  );
}

export default Guide;
