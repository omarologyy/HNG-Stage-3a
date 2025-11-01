"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";
import cartIcon from "@/public/icons/cart.svg";
import hamburgerMenu from "@/public/icons/hamburger.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-black text-white flex flex-col relative z-50">
      {/* Top Bar */}
      <div className="flex flex-row justify-between items-center p-5">
        {/* Hamburger */}
        <button onClick={toggleMenu} className="focus:outline-none">
          {menuOpen ? (
            <MdOutlineClose className="text-3xl text-white" />
          ) : (
            <Image
              src={hamburgerMenu}
              alt="Menu"
              width={24}
              height={24}
              style={{ width: "auto", height: "auto" }}
            />
          )}
        </button>

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          audiophile
        </h1>

        {/* Cart Icon */}
        <Image
          src={cartIcon}
          alt="Cart"
          width={24}
          height={24}
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div
          className="absolute top-[72px] left-0 w-full bg-black border-t border-gray-800
          text-center animate-fade-in py-6"
        >
          <ul className="flex flex-col gap-6 text-lg font-semibold tracking-widest">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-400 transition"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/speakers"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-400 transition"
              >
                SPEAKERS
              </Link>
            </li>
            <li>
              <Link
                href="/earphones"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-400 transition"
              >
                EARPHONES
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
