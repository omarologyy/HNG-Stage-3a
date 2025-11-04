import React from "react";

function FeatureProductTwo() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:hidden lg:flex text-start space-x-[125px] mt-40 p-6">
        <div className="ml-[60px]">
          <h1 className="font-bold text-[32px]">FEATURES</h1>
          <article className="font-medium opacity-50 text-black text-[15px] mt-8 space-y-8">
            <p>
              <span>
                These headphones have been created from durable, high-quality
                materials tough enough
              </span>
              <br />
              <span>
                to take anywhere. Its compact folding design fuses comfort and
                minimalist style making it
              </span>
              <br />
              <span>
                perfect for travel. Flawless transmission is assured by the
                latest wireless technology
              </span>
              <br />
              <span>engineered for audio synchronization with videos.</span>
            </p>
            <p>
              <span>
                More than a simple pair of headphones, this headset features a
                pair of built-in
              </span>
              <br />
              <span>
                microphones for clear, hands-free calling when paired with a
                compatible smartphone.
              </span>
              <br />
              <span>
                Controlling music and calls is also intuitive thanks to
                easy-access touch buttons on the
              </span>
              <br />
              <span>
                earcups. Regardless of how you use the XX59 headphones, you can
                do so all day thanks to
              </span>
              <br />
              <span>
                an impressive 30-hour battery life that can be rapidly recharged
                via USB-C.
              </span>
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
          </div>
        </section>
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden text-start space-y-6 mt-[88px] p-6">
        <h1 className="font-bold text-[24px]">FEATURES</h1>
        <article className="font-medium opacity-50 text-black text-[15px] space-y-8">
          <p>
            <span>These headphones have been created from </span>
            <br />
            <span>durable, high-quality materials tough enough</span>
            <br />
            <span>to take anywhere. Its compact folding design</span>
            <br />
            <span>fuses comfort and minimalist style making it</span>
            <br />
            <span>perfect for travel. Flawless transmission is </span>
            <br />
            <span>assured by the latest wireless technology</span>
            <br />
            <span>engineered for audio synchronization with</span>
            <br />
            <span>videos.</span>
          </p>
          <p>
            <span>More than a simple pair of headphones, this</span>
            <br />
            <span>headset features a pair of built-in</span>
            <br />
            <span>microphones for clear, hands-free calling</span>
            <br />
            <span>when paired with a compatible smartphone. </span>
            <br />
            <span>Controlling music and calls is also intuitive </span>
            <br />
            <span>thanks to easy-access touch buttons on the</span>
            <br />
            <span>earcups. Regardless of how you use the XX59</span>
            <br />
            <span>headphones, you can do so all day thanks to </span>
            <br />
            <span>an impressive 30-hour battery life that can be</span>
            <br />
            <span>rapidly recharged via USB-C.</span>
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

export default FeatureProductTwo;
