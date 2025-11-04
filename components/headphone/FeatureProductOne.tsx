import React from "react";

function FeatureProductOne() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:hidden lg:flex text-start space-x-[125px] mt-40 p-6">
        <div className="ml-[60px]">
          <h1 className="font-bold text-[32px]">FEATURES</h1>
          <article className="font-medium opacity-50 text-black text-[15px] mt-8 space-y-8">
            <p>
              <span>
                As the headphones all others are measured against, the XX99 Mark
                I demonstrates over
              </span>
              <br />
              <span>
                five decades of audio expertise, redefining the critical
                listening experience. This pair of
              </span>
              <br />
              <span>
                closed-back headphones are made of industrial, aerospace-grade
                materials to emphasize
              </span>
              <br />
              <span>durability at a relatively light weight of 11 oz.</span>
            </p>
            <p>
              <span>
                From the handcrafted microfiber ear cushions to the robust metal
                headband with inner
              </span>
              <br />
              <span>
                damping element, the components work together to deliver comfort
                and uncompromising
              </span>
              <br />
              <span>
                sound. Its closed-back design delivers up to 27 dB of passive
                noise cancellation, reducing
              </span>
              <br />
              <span>
                resonance by reflecting sound to a dedicated absorber. For
                connectivity, a specially tuned
              </span>
              <br />
              <span>cable is included with a balanced gold connector.</span>
            </p>
          </article>
        </div>
        <section>
          <h1 className="font-bold text-[32px]">IN THE BOX</h1>
          <div className="mt-6">
            <article className="flex flex-row space-x-6">
              <span className="text-button-one">1x</span>
              <p className="font-medium opacity-50">Headphone Unit</p>
            </article>
            <article className="flex flex-row space-x-[21px]">
              <span className="text-button-one">2x</span>
              <p className="font-medium opacity-50">Replacement Earcups</p>
            </article>
            <article className="flex flex-row space-x-6">
              <span className="text-button-one">1x</span>
              <p className="font-medium opacity-50">User Manual</p>
            </article>
            <article className="flex flex-row space-x-6">
              <span className="text-button-one">1x</span>
              <p className="font-medium opacity-50">3.5mm 5m Audio Cable</p>
            </article>
            <article className="flex flex-row space-x-6">
              <span className="text-button-one">1x</span>
              <p className="font-medium opacity-50">Travel Bag</p>
            </article>
          </div>
        </section>
      </div>
      {/* TABLET VIEW */}
      {/* MOBILE VIEW */}
      <div className="md:hidden text-start space-y-6 mt-[88px] p-6">
        <h1 className="font-bold text-[24px]">FEATURES</h1>
        <article className="font-medium opacity-50 text-black text-[15px] space-y-8">
          <p>
            <span>As the headphones all others are measured </span>
            <br />
            <span>against, the XX99 Mark I demonstrates over</span>
            <br />
            <span>five decades of audio expertise, redefining the</span>
            <br />
            <span>critical listening experience. This pair of</span>
            <br />
            <span>closed-back headphones are made of</span>
            <br />
            <span>industrial, aerospace-grade materials to </span>
            <br />
            <span>emphasize durability at a relatively light</span>
            <br />
            <span>weight of 11 oz.</span>
          </p>
          <p>
            <span>From the handcrafted microfiber ear cushions</span>
            <br />
            <span>to the robust metal headband with inner </span>
            <br />
            <span>damping element, the components work</span>
            <br />
            <span>together to deliver comfort and</span>
            <br />
            <span>uncompromising sound. Its closed-back</span>
            <br />
            <span>design delivers up to 27 dB of passive noise</span>
            <br />
            <span>cancellation, reducing resonance by reflecting</span>
            <br />
            <span>sound to a dedicated absorber. For</span>
            <br />
            <span>connectivity, a specially tuned cable is</span>
            <br />
            <span>included with a balanced gold connector.</span>
          </p>
        </article>
        <section className="mt-[89px]">
          <h1 className="font-bold text-[24px]">IN THE BOX</h1>
          <div className="mt-6">
            <article className="flex flex-row space-x-6">
              <span className="text-button-one">1x</span>
              <p className="font-medium opacity-50">Headphone Unit</p>
            </article>
            <article className="flex flex-row space-x-[21px]">
              <span className="text-button-one">2x</span>
              <p className="font-medium opacity-50">Replacement Earcups</p>
            </article>
            <article className="flex flex-row space-x-6">
              <span className="text-button-one">1x</span>
              <p className="font-medium opacity-50">User Manual</p>
            </article>
            <article className="flex flex-row space-x-6">
              <span className="text-button-one">1x</span>
              <p className="font-medium opacity-50">3.5mm 5m Audio Cable</p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

export default FeatureProductOne;
