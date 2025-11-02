"use client";
import React from "react";
import Navbar from "../navbar/Navbar";
import Hero from "./Hero";

export default function NavbarEarphones() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <Navbar />
      <Hero />
      {/* TABLET VIEW */}
      <Navbar />
      <Hero />
      {/* MOBILE VIEW (already rendered in Navbar)*/}
    </>
  );
}
