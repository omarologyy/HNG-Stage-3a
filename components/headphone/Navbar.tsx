"use client";
import React from "react";
import Navbar from "../navbar/Navbar";
import HeroHeadphone from "./Hero";

export default function NavbarHeadphone() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <Navbar />
      <HeroHeadphone />
      {/* TABLET VIEW */}
      <Navbar />
      <HeroHeadphone />
      {/* MOBILE VIEW (already rendered in Navbar)*/}
    </>
  );
}
