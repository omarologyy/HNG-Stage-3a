"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Hero() {
  const router = useRouter();

  // navigation helper
  const navigateTo = (path: string) => {
    router.push(path);
  };
  return (
    <>
      {/* DESKTOP VIEW*/}
      <section
        className="relative hidden lg:flex flex-row items-center justify-start min-h-screen text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/DesktopHD.jpg')" }}
      >
        {/* Text content */}
        <div className="relative z-10 text-start px-24 max-w-lg">
          <p className="tracking-[10px] text-sm text-gray-400 mb-4">
            NEW PRODUCT
          </p>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p className="text-gray-300 mb-8 text-[15px] leading-relaxed">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button
            onClick={() => navigateTo("/headphones/markone")}
            className="bg-button-one hover:bg-button-two transition-colors text-white font-semibold px-8 py-3 tracking-wide"
          >
            SEE PRODUCT
          </button>
        </div>
      </section>

      {/* TABLET VIEW*/}
      <section
        className="relative hidden md:flex lg:hidden flex-col items-center justify-center min-h-screen text-white bg-cover bg-center px-8"
        style={{ backgroundImage: "url('/images/DesktopTablet.jpg')" }}
      >
        {/* Text content */}
        <div className="relative z-10 text-center max-w-md">
          <p className="tracking-[8px] text-sm text-gray-400 mb-4">
            NEW PRODUCT
          </p>
          <h1 className="text-4xl font-extrabold mb-6 leading-tight">
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p className="text-gray-300 mb-8 text-[15px] leading-relaxed">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button
            onClick={() => navigateTo("/headphones/markone")}
            className="bg-button-one hover:bg-button-two transition-colors text-white font-semibold px-8 py-3 tracking-wide"
          >
            SEE PRODUCT
          </button>
        </div>
      </section>

      {/* MOBILE VIEW */}
      <section
        className="md:hidden relative flex flex-col items-center justify-center min-h-screen text-white bg-cover bg-center px-6"
        style={{ backgroundImage: "url('/images/lpg.jpg')" }}
      >
        {/* Text content */}
        <div className="relative z-10 text-center max-w-md">
          <p className="tracking-[6px] text-sm text-gray-400 mb-4">
            NEW PRODUCT
          </p>
          <h1 className="text-3xl font-extrabold mb-6 leading-tight">
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p className="text-gray-300 mb-8 text-[15px] leading-relaxed">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button
            onClick={() => navigateTo("/headphones/markone")}
            className="bg-button-one hover:bg-button-two transition-colors text-white font-semibold px-8 py-3 tracking-wide"
          >
            SEE PRODUCT
          </button>
        </div>
      </section>
    </>
  );
}
