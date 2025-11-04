import React from "react";

function FeatureEarphones() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:hidden lg:flex text-start space-x-[125px] mt-40 p-6">
        <div className="ml-[60px]">
          <h1 className="font-bold text-[32px]">FEATURES</h1>
          <article className="font-medium opacity-50 text-black text-[15px] mt-8 space-y-8">
            <p>
              <span>
                Experience unrivalled stereo sound thanks to innovative acoustic
                technology. With
              </span>
              <br />
              <span>
                improved ergonomics designed for full day wearing, these
                revolutionary earphones have
              </span>
              <br />
              <span>
                been finely crafted to provide you with the perfect fit,
                delivering complete comfort all day
              </span>
              <br />
              <span>
                long while enjoying exceptional noise isolation and truly
                immersive sound.
              </span>
            </p>
            <p>
              <span>
                The YX1 Wireless Earphones features customizable controls for
                volume, music, calls, and
              </span>
              <br />
              <span>
                voice assistants built into both earbuds. The new 7-hour battery
                life can be extended up to
              </span>
              <br />
              <span>
                28 hours with the charging case, giving you uninterrupted play
                time. Exquisite
              </span>
              <br />
              <span>
                craftsmanship with a splash resistant design now available in an
                all new white and grey
              </span>
              <br />
              <span>color scheme as well as the popular classic black.</span>
            </p>
          </article>
        </div>
        <section>
          <h1 className="font-bold text-[32px]">IN THE BOX</h1>
          <div className="mt-6">
            <article className="flex flex-row space-x-[21px]">
              <span className="text-button-one">2x</span>
              <p className="font-medium opacity-50">Earphone Unit</p>
            </article>
            <article className="flex flex-row space-x-[21px]">
              <span className="text-button-one">6x</span>
              <p className="font-medium opacity-50">Multi-Size Earplugs</p>
            </article>
            <article className="flex flex-row space-x-6">
              <span className="text-button-one">1x</span>
              <p className="font-medium opacity-50">User Manual</p>
            </article>
            <article className="flex flex-row space-x-6">
              <span className="text-button-one">1x</span>
              <p className="font-medium opacity-50">USB-C Charging Cable</p>
            </article>
            <article className="flex flex-row space-x-6">
              <span className="text-button-one">1x</span>
              <p className="font-medium opacity-50">Travel Pouch</p>
            </article>
          </div>
        </section>
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden text-start space-y-6 mt-[88px] p-6">
        <h1 className="font-bold text-[24px]">FEATURES</h1>
        <article className="font-medium opacity-50 text-black text-[15px] space-y-8">
          <p>
            <span> Experience unrivalled stereo sound thanks to </span>
            <br />
            <span>innovative acoustic technology. With improved</span>
            <br />
            <span>ergonomics designed for full day wearing,</span>
            <br />
            <span>these revolutionary earphones have been</span>
            <br />
            <span>finely crafted to provide you with the perfect </span>
            <br />
            <span>fit, delivering complete comfort all day long </span>
            <br />
            <span>while enjoying exceptional noise isolation and</span>
            <br />
            <span>truly immersive sound.</span>
          </p>
          <p>
            <span>The YX1 Wireless Earphones features </span>
            <br />
            <span>customizable controls for volume, music, calls, </span>
            <br />
            <span>and voice assistants built into both earbuds.</span>
            <br />
            <span>The new 7-hour battery life can be extended</span>
            <br />
            <span>up to 28 hours with the charging case, giving</span>
            <br />
            <span>you uninterrupted play time. Exquisite </span>
            <br />
            <span>craftsmanship with a splash resistant design</span>
            <br />
            <span>now available in an all new white and grey color </span>
            <br />
            <span>scheme as well as the popular classic black.</span>
          </p>
        </article>
        <section className="mt-[89px]">
          <h1 className="font-bold text-[24px]">IN THE BOX</h1>
          <div className="mt-6">
            <article className="flex flex-row space-x-[21px]">
              <span className="text-button-one">2x</span>
              <p className="font-medium opacity-50">Earphone Unit</p>
            </article>
            <article className="flex flex-row space-x-[21px]">
              <span className="text-button-one">6x</span>
              <p className="font-medium opacity-50">Multi-size Earplugs</p>
            </article>
            <article className="flex flex-row space-x-6">
              <span className="text-button-one">1x</span>
              <p className="font-medium opacity-50">User Manual</p>
            </article>
            <article className="flex flex-row space-x-6">
              <span className="text-button-one">1x</span>
              <p className="font-medium opacity-50">USB-C Charging Cable</p>
            </article>
            <article className="flex flex-row space-x-6">
              <span className="text-button-one">1x</span>
              <p className="font-medium opacity-50">Travel Pouch</p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

export default FeatureEarphones;
