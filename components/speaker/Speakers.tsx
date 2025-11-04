"use client";
import React from "react";
import Speaker from "@/public/images/speakers.svg";
import SpeakerTwo from "@/public/images/SpeakerTwo.jpg";
import SpeakerTab from "@/public/images/SpeakerBgTablet.jpg";
import SpeakerBackground from "@/public/images/SpeakerBg.jpg";
import DesktopSBG from "@/public/images/SpeakerDBG.jpg";
import Zx7Speaker from "@/public/images/Zx7HD.jpg";
import Earphones from "@/public/images/EarphonesHD.jpg";
import Grey from "@/public/images/GreyTablet.jpg";
import Earbuds from "@/public/images/EarbudsDesktop.jpg";
import Tablet from "@/public/images/TabletEarbuds.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Speakers() {
  const router = useRouter();

  // navigation helper
  const navigateTo = (path: string) => {
    router.push(path);
  };
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:hidden lg:flex flex-col justify-center items-center min-h-screen bg-white space-y-6">
        {/* Zx9 Speaker */}
        <div className="card-speaker-desktop relative flex justify-center items-center overflow-hidden mt-[120px]">
          {/* Background */}
          <Image
            src={DesktopSBG}
            alt="Speaker background"
            fill
            className="object-cover rounded-lg"
          />

          {/* Content Wrapper with gap */}
          <div className="relative z-10 flex items-center gap-[137px] px-24">
            {/* Speaker Image - Left Side */}
            <Image
              src={Speaker}
              alt="Speaker"
              className="relative top-[12%]"
              width={410}
              height={493}
            />

            {/* Text Content - Right Side */}
            <div className="flex flex-col items-start space-y-6">
              <h2 className="text-white font-bold text-6xl leading-tight tracking-wider">
                ZX9
                <br />
                SPEAKER
              </h2>
              <p className="text-white opacity-75 font-normal text-base leading-relaxed max-w-[350px]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button
                onClick={() => navigateTo("/speakers/speakerone")}
                className="bg-black text-white px-8 py-4 font-bold tracking-widest border-2 border-black hover:bg-white hover:text-black transition uppercase text-sm"
              >
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>

        {/* Zx7 Speaker */}
        <div className="relative flex justify-center items-center overflow-hidden">
          <Image src={SpeakerTwo} alt="Zx7 Speaker" />
          <div className="absolute justify-start items-start text-start space-y-8 mr-[800px]">
            <h1 className="font-bold text-2xl">ZX7 SPEAKER</h1>
            <button
              onClick={() => navigateTo("/speakers/speakertwo")}
              className="bg-transparent border-2 text-black px-4 py-4 font-bold tracking-wider hover:bg-black hover:text-white text-center"
            >
              SEE PRODUCT
            </button>
          </div>
        </div>

        {/* Earphones */}
        <div className="flex flex-row space-x-[30px]">
          <Image src={Earbuds} alt="Earphones" />
          <div className="flex flex-col card-earphone-two justify-center items-center text-start">
            <div className="mr-[99px] space-y-8">
              <h1 className="font-bold text-2xl">YX1 EARPHONES</h1>
              <button
                onClick={() => navigateTo("/earphones/earbud")}
                className="bg-transparent border-2 text-black px-4 py-4 font-bold tracking-wider hover:bg-black hover:text-white text-center"
              >
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* TABLET VIEW */}
      <div className="hidden lg:hidden md:flex flex-col justify-center items-center min-h-screen bg-white space-y-6">
        {/* Zx9 Speaker */}
        <div className="card-speaker-tablet relative flex justify-center items-center overflow-hidden mt-24">
          {/* Background */}
          <Image
            src={SpeakerTab}
            alt="Speaker background"
            fill
            className="object-cover rounded-lg"
          />

          {/* Speaker Image */}
          <Image
            src={Speaker}
            alt="Speaker"
            className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2"
            width={197}
            height={237}
          />

          {/* Text inside the card */}
          <h2 className="absolute bottom-[220px] left-1/2 -translate-x-1/2 text-center text-white font-bold text-4xl leading-tight">
            ZX9
            <br />
            SPEAKER
          </h2>
          <p className="absolute bottom-[100px] left-1/2 -translate-x-1/2 text-center leading-none text-white opacity-70 font-normal text-[9px] w-[280px] h-[75px]">
            <span>Upgrade to premium speakers that are</span>
            <br />
            <span>phenomenally built to deliver truly</span>
            <br />
            <span>remarkable sound.</span>
          </p>
          <button
            onClick={() => navigateTo("/speakers/speakerone")}
            className="bg-white text-black px-4 py-4 font-bold tracking-wider border-2 hover:text-white hover:bg-black transition absolute bottom-[30px] left-1/2 -translate-x-1/2 text-center"
          >
            SEE PRODUCT
          </button>
        </div>
        {/* Zx7 Speaker */}
        <div className="relative flex justify-center items-center overflow-hidden">
          <Image src={Grey} alt="Zx7 Speaker" />
          <div className="absolute justify-start items-start text-start space-y-8 mr-24">
            <h1 className="font-bold text-2xl">ZX7 SPEAKER</h1>
            <button
              onClick={() => navigateTo("/speakers/speakertwo")}
              className="bg-transparent border-2 text-black px-4 py-4 font-bold tracking-wider hover:bg-black hover:text-white text-center"
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
        {/* Earphones */}
        <div className="flex flex-row space-x-2.5">
          <Image src={Tablet} alt="Earphones" />
          <div className="flex flex-row card-earphone-three justify-center items-center text-start">
            <div className="mr-[99px] space-y-8">
              <h1 className="font-bold text-2xl">YX1 EARPHONES</h1>
              <button
                onClick={() => navigateTo("/earphones/earbud")}
                className="bg-transparent border-2 text-black px-4 py-4 font-bold tracking-wider hover:bg-black hover:text-white text-center"
              >
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col justify-center items-center min-h-screen bg-white space-y-6">
        {/* Zx9 Speaker */}
        <div className="card-speaker relative flex justify-center items-center overflow-hidden mt-[120px]">
          {/* Background */}
          <Image
            src={SpeakerBackground}
            alt="Speaker background"
            fill
            className="object-cover rounded-lg"
          />

          {/* Speaker Image */}
          <Image
            src={Speaker}
            alt="Speaker"
            className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2"
            width={172}
            height={207}
          />

          {/* Text inside the card */}
          <h2 className="absolute bottom-[220px] left-1/2 -translate-x-1/2 text-center text-white font-bold text-4xl leading-tight">
            ZX9
            <br />
            SPEAKER
          </h2>
          <p className="absolute bottom-[100px] left-1/2 -translate-x-1/2 text-center leading-none text-white opacity-70 font-normal text-[9px] w-[280px] h-[75px]">
            <span>Upgrade to premium speakers that are</span>
            <br />
            <span>phenomenally built to deliver truly</span>
            <br />
            <span>remarkable sound.</span>
          </p>
          <button
            onClick={() => navigateTo("/speakers/speakerone")}
            className="bg-white text-black px-4 py-4 font-bold tracking-wider border-2 hover:text-white hover:bg-black transition absolute bottom-[30px] left-1/2 -translate-x-1/2 text-center"
          >
            SEE PRODUCT
          </button>
        </div>
        {/* Zx7 Speaker */}
        <div className="relative flex justify-center items-center overflow-hidden">
          <Image src={Zx7Speaker} alt="Zx7 Speaker" />
          <div className="absolute justify-start items-start text-start space-y-8 mr-24">
            <h1 className="font-bold text-2xl">ZX7 SPEAKER</h1>
            <button
              onClick={() => navigateTo("/speakers/speakertwo")}
              className="bg-transparent border-2 text-black px-4 py-4 font-bold tracking-wider hover:bg-black hover:text-white text-center"
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
        {/* Earphones */}
        <Image src={Earphones} alt="Earphones" />
        <div className="flex flex-col card-earphone justify-center items-center text-start">
          <div className="mr-[99px] space-y-8">
            <h1 className="font-bold text-2xl">YX1 EARPHONES</h1>
            <button
              onClick={() => navigateTo("/earphones/earbud")}
              className="bg-transparent border-2 text-black px-4 py-4 font-bold tracking-wider hover:bg-black hover:text-white text-center"
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Speakers;
