import React from "react";
import earphones from "@/public/images/earphones.svg";
import headphones from "@/public/images/headphones.svg";
import speakers from "@/public/images/speakers.svg";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";

function Gadgets() {
  const products = [
    { image: headphones, title: "HEADPHONES" },
    { image: speakers, title: "SPEAKERS" },
    { image: earphones, title: "EARPHONES" },
  ];

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-row items-center justify-center mt-20 space-x-[30px]">
        {products.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#F1F1F1] rounded-lg w-[327px] h-[165px] flex flex-col items-center justify-end overflow-visible"
          >
            {/* Floating image */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Image src={item.image} alt={item.title} />
            </div>

            {/* Text content */}
            <div className="flex flex-col items-center pb-6">
              <h3 className="text-black text-[15px] font-bold tracking-wider mb-2">
                {item.title}
              </h3>
              <button className="flex items-center gap-2 text-[#7E7E7E] text-[13px] font-bold tracking-widest hover:text-[#D87D4A] transition-colors">
                SHOP <FaAngleRight className="text-button-one" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* TABLET VIEW */}
      <div className="hidden md:flex lg:hidden flex-row items-center justify-center mt-20 space-x-2.5 pl-10 pr-10 ">
        {products.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#F1F1F1] rounded-lg w-[327px] h-[165px] flex flex-col items-center justify-end overflow-visible"
          >
            {/* Floating image */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Image src={item.image} alt={item.title} />
            </div>

            {/* Text content */}
            <div className="flex flex-col items-center pb-6">
              <h3 className="text-black text-[15px] font-bold tracking-wider mb-2">
                {item.title}
              </h3>
              <button className="flex items-center gap-2 text-[#7E7E7E] text-[13px] font-bold tracking-widest hover:text-[#D87D4A] transition-colors">
                SHOP <FaAngleRight className="text-button-one" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col items-center justify-center mt-20 space-y-12">
        {products.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#F1F1F1] rounded-lg w-[327px] h-[165px] flex flex-col items-center justify-end overflow-visible"
          >
            {/* Floating image */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Image src={item.image} alt={item.title} />
            </div>

            {/* Text content */}
            <div className="flex flex-col items-center pb-6">
              <h3 className="text-black text-[15px] font-bold tracking-wider mb-2">
                {item.title}
              </h3>
              <button className="flex items-center gap-2 text-[#7E7E7E] text-[13px] font-bold tracking-widest hover:text-[#D87D4A] transition-colors">
                SHOP <FaAngleRight className="text-button-one" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gadgets;
