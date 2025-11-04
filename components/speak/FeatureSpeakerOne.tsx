import React from "react";

function FeatureSpeakerOne() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:hidden lg:flex text-start space-x-[125px] mt-40 p-6">
        <div className="ml-[60px]">
          <h1 className="font-bold text-[32px]">FEATURES</h1>
          <article className="font-medium opacity-50 text-black text-[15px] space-y-8">
            <p>
              <span>
                Reap the advantages of a flat diaphragm tweeter cone. This
                provides a fast response rate
              </span>
              <br />
              <span>
                and excellent high frequencies that lower tiered bookshelf
                speakers cannot provide. The
              </span>
              <br />
              <span>
                woofers are made from aluminum that produces a unique and clear
                sound. XLR inputs allow
              </span>
              <br />
              <span>you to connect to a mixer for more advanced usage.</span>
            </p>
            <p>
              <span>
                The ZX7 speaker is the perfect blend of stylish design and high
                performance. It houses an
              </span>
              <br />
              <span>
                encased MDF wooden enclosure which minimises acoustic resonance.
                Dual connectivity
              </span>
              <br />
              <span>
                allows pairing through bluetooth or traditional optical and RCA
                input. Switch input sources
              </span>
              <br />
              <span>
                and control volume at your finger tips with the included
                wireless remote. This versatile
              </span>
              <br />
              <span>
                speaker is equipped to deliver an authentic listening
                experience.
              </span>
            </p>
          </article>
        </div>
        <section>
          <h1 className="font-bold text-[32px]">IN THE BOX</h1>
          <div className="mt-6">
            <article className="flex flex-row space-x-[21px]">
              <span className="text-button-one">2x</span>
              <p className="font-medium opacity-50">Speaker Unit</p>
            </article>
            <article className="flex flex-row space-x-[21px]">
              <span className="text-button-one">2x</span>
              <p className="font-medium opacity-50">Speaker Cloth Panel</p>
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
              <p className="font-medium opacity-50">7.5m Optical Cable</p>
            </article>
          </div>
        </section>
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden text-start space-y-6 mt-[88px] p-6">
        <h1 className="font-bold text-[24px]">FEATURES</h1>
        <article className="font-medium opacity-50 text-black text-[15px] space-y-8">
          <p>
            <span>Reap the advantages of a flat diaphragm </span>
            <br />
            <span>tweeter cone. This provides a fast response</span>
            <br />
            <span>rate and excellent high frequencies that lower</span>
            <br />
            <span>tiered bookshelf speakers cannot provide. The</span>
            <br />
            <span>woofers are made from aluminum that</span>
            <br />
            <span>produces a unique and clear sound. XLR inputs</span>
            <br />
            <span>allow you to connect to a mixer for more </span>
            <br />
            <span>advanced usage.</span>
          </p>
          <p>
            <span>The ZX7 speaker is the perfect blend of stylish</span>
            <br />
            <span>design and high performance. It houses an</span>
            <br />
            <span>encased MDF wooden enclosure which</span>
            <br />
            <span>minimises acoustic resonance. Dual </span>
            <br />
            <span>connectivity allows pairing through bluetooth</span>
            <br />
            <span>or traditional optical and RCA input. Switch</span>
            <br />
            <span>input sources and control volume at your </span>
            <br />
            <span>finger tips with the included wireless remote. </span>
            <br />
            <span>This versatile speaker is equipped to deliver an</span>
            <br />
            <span>authentic listening experience.</span>
          </p>
        </article>
        <section className="mt-[89px]">
          <h1 className="font-bold text-[24px]">IN THE BOX</h1>
          <div className="mt-6">
            <article className="flex flex-row space-x-[21px]">
              <span className="text-button-one">2x</span>
              <p className="font-medium opacity-50">Speaker Unit</p>
            </article>
            <article className="flex flex-row space-x-[21px]">
              <span className="text-button-one">2x</span>
              <p className="font-medium opacity-50">Speaker Cloth Panel</p>
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
              <p className="font-medium opacity-50">7.5m Optical Cable</p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

export default FeatureSpeakerOne;
