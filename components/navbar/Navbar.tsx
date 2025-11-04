"use client";
import React, { useState } from "react";
import cartIcon from "@/public/icons/cart.svg";
import hamburgerMenu from "@/public/icons/hamburger.svg";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // navigation helper
  const navigateTo = (path: string) => {
    router.push(path);
    setMenuOpen(false); // close menu after navigation (for tablet & mobile)
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-primary backdrop-blur-md">
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-row justify-between items-center text-white p-6 px-30">
        <h1
          className="text-2xl font-bold leading-none cursor-pointer"
          onClick={() => navigateTo("/")}
        >
          audiophile
        </h1>

        <ul className="flex flex-row space-x-[34px] text-sm text-white cursor-pointer">
          <li className="hover:text-button-one" onClick={() => navigateTo("/")}>
            HOME
          </li>
          <li
            className="hover:text-button-one"
            onClick={() => navigateTo("/headphones")}
          >
            HEADPHONES
          </li>
          <li
            className="hover:text-button-one"
            onClick={() => navigateTo("/speakers")}
          >
            SPEAKERS
          </li>
          <li
            className="hover:text-button-one"
            onClick={() => navigateTo("/earphones")}
          >
            EARPHONES
          </li>
        </ul>

        <Image
          src={cartIcon}
          alt="Cart icon"
          width={24}
          height={24}
          className="block"
        />
      </div>

      {/* TABLET VIEW */}
      <div className="hidden md:flex lg:hidden flex-col text-white relative">
        {/* Top Navbar */}
        <div className="flex flex-row justify-between items-center p-6">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? (
              <MdOutlineClose className="text-3xl text-white cursor-pointer" />
            ) : (
              <Image
                src={hamburgerMenu}
                alt="Hamburger menu"
                width={24}
                height={24}
                className="block cursor-pointer"
              />
            )}
          </button>

          <h1
            className="text-2xl font-bold leading-none cursor-pointer"
            onClick={() => navigateTo("/")}
          >
            audiophile
          </h1>

          <Image
            src={cartIcon}
            alt="Cart icon"
            width={24}
            height={24}
            className="block"
          />
        </div>

        {/* Dropdown Menu (Tablet-friendly) */}
        {menuOpen && (
          <div className="absolute top-[72px] left-0 w-full bg-primary text-white rounded-b-2xl shadow-xl py-6 animate-fade-in">
            <ul className="flex flex-col items-center space-y-4 text-lg font-semibold">
              <li
                className="hover:text-button-one cursor-pointer"
                onClick={() => navigateTo("/headphones")}
              >
                HEADPHONES
              </li>
              <li
                className="hover:text-button-one cursor-pointer"
                onClick={() => navigateTo("/speakers")}
              >
                SPEAKERS
              </li>
              <li
                className="hover:text-button-one cursor-pointer"
                onClick={() => navigateTo("/earphones")}
              >
                EARPHONES
              </li>
            </ul>
          </div>
        )}
      </div>

      {/*MOBILE VIEW */}
      <div className="md:hidden flex flex-col text-white relative">
        {/* Top Bar */}
        <div className="flex flex-row justify-between items-center p-6">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? (
              <MdOutlineClose className="text-3xl text-white cursor-pointer" />
            ) : (
              <Image
                src={hamburgerMenu}
                alt="Menu icon"
                width={24}
                height={24}
                className="block"
              />
            )}
          </button>

          <h1
            className="text-2xl font-bold leading-none cursor-pointer"
            onClick={() => navigateTo("/")}
          >
            audiophile
          </h1>

          <Image
            src={cartIcon}
            alt="Cart icon"
            width={24}
            height={24}
            className="block"
          />
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-[72px] left-0 w-full bg-primary text-white shadow-lg py-8 animate-fade-in">
            <ul className="flex flex-col space-y-6 text-center text-lg font-semibold">
              <li
                className="hover:text-button-one cursor-pointer"
                onClick={() => navigateTo("/headphones")}
              >
                HEADPHONES
              </li>
              <li
                className="hover:text-button-one cursor-pointer"
                onClick={() => navigateTo("/speakers")}
              >
                SPEAKERS
              </li>
              <li
                className="hover:text-button-one cursor-pointer"
                onClick={() => navigateTo("/earphones")}
              >
                EARPHONES
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
