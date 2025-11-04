import React from "react";

function FeatureSpeaker() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:hidden lg:flex text-start space-x-[125px] mt-40 p-6">
        <div className="ml-[60px]">
          <h1 className="font-bold text-[32px]">FEATURES</h1>
          <article className="font-medium opacity-50 text-black text-[15px] space-y-8">
            <p>
              <span>
                Connect via Bluetooth or nearly any wired source. This speaker
                features optical, digital
              </span>
              <br />
              <span>
                coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing
                you to have up to five
              </span>
              <br />
              <span>
                wired source devices connected for easy switching. Improved
                bluetooth technology offers
              </span>
              <br />
              <span>near lossless audio quality at up to 328ft (100m)</span>
            </p>
            <p>
              <span>
                Discover clear, more natural sounding highs than the competition
                with ZX9’s signature
              </span>
              <br />
              <span>
                planar diaphragm tweeter. Equally important is its powerful
                room-shaking bass courtesy of
              </span>
              <br />
              <span>
                a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal
                sound quality whether in a
              </span>
              <br />
              <span>
                large room or small den. Furthermore, you will experience new
                sensations from old songs
              </span>
              <br />
              <span>since it can respond to even the subtle waveforms.</span>
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
              <p className="font-medium opacity-50">10m Optical Cable</p>
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
            <span>Connect via Bluetooth or nearly any wired</span>
            <br />
            <span>source. This speaker features optical, digital </span>
            <br />
            <span>coaxial, USB Type-B, stereo RCA, and stereo </span>
            <br />
            <span>XLR inputs, allowing you to have up to five</span>
            <br />
            <span>wired source devices connected for easy</span>
            <br />
            <span>switching. Improved bluetooth technology</span>
            <br />
            <span>offers near lossless audio quality at up to 328ft</span>
            <br />
            <span>(100m)</span>
          </p>
          <p>
            <span>Discover clear, more natural sounding highs </span>
            <br />
            <span>than the competition with ZX9’s signature </span>
            <br />
            <span>planar diaphragm tweeter. Equally important is</span>
            <br />
            <span>its powerful room-shaking bass courtesy of a</span>
            <br />
            <span>6.5” aluminum alloy bass unit. You’ll be able to</span>
            <br />
            <span>enjoy equal sound quality whether in a large</span>
            <br />
            <span>room or small den. Furthermore, you will </span>
            <br />
            <span>experience new sensations from old songs </span>
            <br />
            <span>since it can respond to even the subtle</span>
            <br />
            <span>waveforms.</span>
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
              <p className="font-medium opacity-50">10m Optical Cable</p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

export default FeatureSpeaker;
