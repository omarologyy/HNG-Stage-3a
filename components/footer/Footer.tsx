import React from "react";
import twitter from "@/public/icons/twitter.svg";
import facebook from "@/public/icons/facebook.svg";
import instagram from "@/public/icons/instagram.svg";
import Image from "next/image";

function Footer() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:hidden bg-black text-white justify-start items-start">
        <div className="w-[101px] h-1 bg-button-one" />
        <div className="mt-[72px] flex flex-row justify-between items-start p-4">
          <div className="flex flex-col text-start ml-[165px]">
            <h1 className="text-2xl font-bold">audiophile</h1>
            <p className="mt-12 text-[15px]">
              <span>Audiophile is an all in one stop to fulfill your</span>
              <br />
              <span>audio needs. We&apos;re a small team of music</span>
              <br />
              <span>lovers and sound specialists who are devoted</span>
              <br />
              <span>to helping you get the most out of personal</span>
              <br />
              <span>audio. Come and visit our demo facility - we&apos;re</span>
              <br />
              <span>open 7 days a week.</span>
            </p>
            <p className="mt-12">Copyright 2021. All Rights Reserved</p>
          </div>
          <div className="mr-[165px]">
            <ul className="mt-[3px] space-x-4 text-[13px] font-bold flex">
              <li>HOME</li>
              <li>HEADPHONES</li>
              <li>SPEAKERS</li>
              <li>EARPHONES</li>
            </ul>
            <div className="flex mt-12 space-x-4 justify-end items-end pb-[38px]">
              <Image src={facebook} alt="facebook" width={24} height={24} />
              <Image src={twitter} alt="twitter" width={24} height={24} />
              <Image src={instagram} alt="instagram" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
      {/* TABLET VIEW */}
      <div className="hidden lg:hidden md:flex bg-black text-white justify-start items-start relative">
        <div className="w-[101px] h-1 bg-button-one absolute top-0 left-[14%]" />

        <div className="ml-[120px] flex flex-col justify-start items-start mt-14">
          <div className="flex flex-col text-start p-3">
            <h1 className="text-2xl font-bold">audiophile</h1>
            <ul className="mt-8 space-x-4 text-[13px] font-bold flex">
              <li>HOME</li>
              <li>HEADPHONES</li>
              <li>SPEAKERS</li>
              <li>EARPHONES</li>
            </ul>
            <p className="mt-8 text-[15px] font-medium">
              <span>
                Audiophile is an all in one stop to fulfill your audio needs.
                We&apos;re a small team of music lovers and
              </span>
              <br />
              <span>
                sound specialists who are devoted to helping you get the most
                out of personal audio. Come and{" "}
              </span>
              <br />
              <span>
                visit our demo facility - we&apos;re open 7 days a week.
              </span>
            </p>
          </div>

          <div className="flex flex-row items-center justify-between mt-12 pb-8 w-full">
            <p className="text-[15px]">Copyright 2021. All Rights Reserved</p>
            <div className="flex space-x-4 items-center">
              <Image src={facebook} alt="facebook" width={24} height={24} />
              <Image src={twitter} alt="twitter" width={24} height={24} />
              <Image src={instagram} alt="instagram" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden bg-black text-white justify-center items-center text-center flex flex-col">
        <div className="w-[101px] h-1 bg-button-one" />
        <div className="mt-[52px]">
          <h1 className="text-2xl font-bold">audiophile</h1>
          <ul className="mt-12 space-y-4 text-[13px] font-bold">
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
          </ul>
          <p className="mt-12 text-[15px]">
            <span>Audiophile is an all in one stop to fulfill your</span>
            <br />
            <span>audio needs. We&apos;re a small team of music</span>
            <br />
            <span>lovers and sound specialists who are devoted</span>
            <br />
            <span>to helping you get the most out of personal</span>
            <br />
            <span>audio. Come and visit our demo facility - we&apos;re</span>
            <br />
            <span>open 7 days a week.</span>
          </p>
          <p className="mt-12">Copyright 2021. All Rights Reserved</p>
          <div className="flex mt-12 space-x-4 justify-center items-center pb-[38px]">
            <Image src={facebook} alt="facebook" width={24} height={24} />
            <Image src={twitter} alt="twitter" width={24} height={24} />
            <Image src={instagram} alt="instagram" width={24} height={24} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
