"use client";
import React, { useState } from "react";
import Image from "next/image";
import Mark from "@/public/images/headphoneImgs/MarkSvg.svg";
import MainEarphone from "@/public/images/earphoneImgs/MainEarphone.svg";
import MainED from "@/public/images/earphoneImgs/Mainer.svg";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useRouter } from "next/navigation";
import CartModal from "../cart/CartModal";

function HeroEarphones() {
  const router = useRouter();

  // Base price and quantity state
  const basePrice = 599;
  const [quantity, setQuantity] = useState(1);

  // Quantity handlers
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Computed total price
  const totalPrice = basePrice * quantity;

  // navigation helper
  const navigateTo = (path: string) => {
    router.push(path);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<
    {
      id: string;
      name: string;
      price: number;
      quantity: number;
      image: string;
    }[]
  >([]);

  const handleAddToCart = () => {
    const newItem = {
      id: "xx99-mk-ii",
      name: "XX99 MK II",
      price: basePrice,
      quantity,
      image: "/images/headphoneImgs/BlackSvg.svg",
    };
    setCartItems([newItem]);
    setIsModalOpen(true);
  };

  const handleUpdateQuantity = (id: string, newQty: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveAll = () => setCartItems([]);

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-col items-center w-full bg-white text-black space-y-10 py-20">
        <h1
          className="text-start self-start ml-[124px] mt-[79px] cursor-pointer"
          onClick={() => router.back()}
        >
          Go back
        </h1>

        <div className="flex flex-row items-center justify-center space-x-24 w-4/5">
          <div className="bg-[#F1F1F1] flex justify-center items-center w-[540px] h-[560px] rounded-lg">
            <Image
              src={MainED}
              alt="YX1 Wireless Earphones"
              className="object-contain w-[300px] h-[340px]"
            />
          </div>

          <div className="max-w-[445px]">
            <p className="tracking-[10px] text-[14px] text-button-one mb-6 uppercase">
              New Product
            </p>
            <h1 className="text-[40px] font-bold leading-11 mb-8">
              YX1 WIRELESS <br /> EARPHONES
            </h1>
            <p className="text-[#7D7D7D] text-[15px] leading-[25px] mb-10">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>

            {/* Dynamic Price */}
            <p className="font-bold text-[18px] mt-4 text-black mb-[47px]">
              $ {totalPrice.toLocaleString()}
            </p>

            <div className="flex flex-row space-x-4">
              {/* Quantity Controller */}
              <div className="card-headphone-cart-one text-black cursor-pointer">
                <div className="flex justify-between items-center space-x-[21px]">
                  <FiMinus
                    width={16}
                    height={18}
                    className={`${
                      quantity === 1 ? "opacity-25" : "hover:text-button-one"
                    }`}
                    onClick={handleDecrease}
                  />
                  <p>{quantity}</p>
                  <FiPlus
                    width={16}
                    height={18}
                    className="opacity-70 hover:text-button-one"
                    onClick={handleIncrease}
                  />
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="card-headphone-cart-two text-white"
              >
                ADD TO CART
              </button>

              <CartModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </div>
      </div>

      {/* TABLET VIEW */}
      <div className="hidden lg:hidden md:flex flex-col justify-center items-center min-h-screen text-white px-6">
        <div>
          <div className="card-headphone-two relative mt-16">
            <Image src={Mark} alt="YX1 Earphones" className="object-contain" />
          </div>
          <div className="text-center mt-8">
            <p className="tracking-[8px] text-[14px] text-button-one mb-4">
              NEW PRODUCT
            </p>
            <h1 className="text-[40px] font-bold mb-6 leading-tight text-black">
              YX1 WIRELESS <br /> EARPHONES
            </h1>
            <p className="text-black text-[15px] leading-[25px] mb-10 opacity-50">
              Tailor your listening experience with bespoke dynamic drivers and
              enjoy high-fidelity sound in noisy environments.
            </p>

            {/* Dynamic Price */}
            <p className="font-bold text-[18px] mt-4 text-black mb-[47px]">
              $ {totalPrice.toLocaleString()}
            </p>

            <div className="flex flex-row justify-center space-x-4">
              <div className="card-headphone-cart-one text-black cursor-pointer">
                <div className="flex justify-between items-center space-x-[21px]">
                  <FiMinus
                    width={16}
                    height={18}
                    className={`${
                      quantity === 1 ? "opacity-25" : "hover:text-button-one"
                    }`}
                    onClick={handleDecrease}
                  />
                  <p>{quantity}</p>
                  <FiPlus
                    width={16}
                    height={18}
                    className="opacity-70 hover:text-button-one"
                    onClick={handleIncrease}
                  />
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="card-headphone-cart-two text-white"
              >
                ADD TO CART
              </button>

              <CartModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col justify-center items-center min-h-screen text-white px-6">
        <div>
          <div className="card-headphone-one relative mt-16">
            <Image
              src={MainEarphone}
              alt="YX1 Wireless Earphones"
              className="object-contain"
            />
          </div>
          <div className="text-start mt-8">
            <p className="tracking-[8px] text-sm text-button-one mb-4">
              NEW PRODUCT
            </p>
            <h1 className="text-4xl font-extrabold mb-6 leading-tight text-black">
              YX1 WIRELESS <br /> EARPHONES
            </h1>
            <p className="text-black mb-8 text-[15px] leading-relaxed opacity-50">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>

            {/* Dynamic Price */}
            <p className="font-bold text-[18px] mt-4 text-black mb-[21px]">
              $ {totalPrice.toLocaleString()}
            </p>

            <div className="flex flex-row space-x-4">
              <div className="card-headphone-cart-one text-black cursor-pointer">
                <div className="flex justify-between items-center space-x-[21px]">
                  <FiMinus
                    width={16}
                    height={18}
                    className={`${
                      quantity === 1 ? "opacity-25" : "hover:text-button-one"
                    }`}
                    onClick={handleDecrease}
                  />
                  <p>{quantity}</p>
                  <FiPlus
                    width={16}
                    height={18}
                    className="opacity-70 hover:text-button-one"
                    onClick={handleIncrease}
                  />
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="card-headphone-cart-two text-white"
              >
                ADD TO CART
              </button>

              <CartModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroEarphones;
