import React from "react";

function Hero() {
  return (
    <>
      {/* Mobile View */}
      <div className="block md:hidden bg-black text-white text-center py-8">
        <h1 className="text-lg">SPEAKERS</h1>
      </div>

      {/* Tablet View */}
      <div className="hidden  md:block lg:hidden bg-black text-white text-center py-8">
        <h1 className="text-xl">SPEAKERS</h1>
      </div>

      {/* Desktop View */}
      <div className="hidden md:hidden lg:block bg-black text-white text-center py-8">
        <h1 className="text-2xl">SPEAKERS</h1>
      </div>
    </>
  );
}

export default Hero;
