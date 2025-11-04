"use client";
import React, { useState } from "react";
import Image from "next/image";
import Black from "@/public/images/headphoneImgs/BlackSvg.svg";
import BlackHP from "@/public/images/headphoneImgs/BlackHPTab.svg";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useRouter } from "next/navigation";
import CartModal from "../cart/CartModal";

function HeroProduct() {
  const router = useRouter();
  const navigateTo = (path: string) => router.push(path);

  const basePrice = 2999;
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalPrice = basePrice * quantity;

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
              src={Black}
              alt="XX99 Mark II"
              className="object-contain w-[300px] h-[340px]"
            />
          </div>

          <div className="max-w-[445px]">
            <p className="tracking-[10px] text-[14px] text-button-one mb-6 uppercase">
              New Product
            </p>
            <h1 className="text-[40px] font-bold leading-11 mb-8">
              XX99 MARK II <br /> HEADPHONES
            </h1>
            <p className="text-[#7D7D7D] text-[15px] leading-[25px] mb-10">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <p className="font-bold text-[18px] mt-4 text-black mb-[47px]">
              ${totalPrice.toLocaleString()}
            </p>

            <div className="flex flex-row space-x-4">
              <div className="card-headphone-cart-one text-black cursor-pointer">
                <div className="flex justify-between items-center space-x-[21px] px-4">
                  <FiMinus
                    onClick={handleDecrease}
                    className="opacity-25 hover:text-button-one"
                  />
                  <p>{quantity}</p>
                  <FiPlus
                    onClick={handleIncrease}
                    className="opacity-25 hover:text-button-one"
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
      <div className="hidden md:flex lg:hidden flex-col items-center w-full bg-white text-black space-y-10 py-20">
        <h1
          className="text-start self-start ml-[40px] mt-[40px] cursor-pointer"
          onClick={() => router.back()}
        >
          Go back
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-12 md:space-y-0 w-11/12">
          <div className="bg-[#F1F1F1] flex justify-center items-center w-[281px] h-[480px] rounded-lg">
            <Image
              src={BlackHP}
              alt="XX99 Mark II"
              className="object-contain"
            />
          </div>

          <div className="max-w-[445px] text-center md:text-left">
            <p className="tracking-[10px] text-[14px] text-button-one mb-6 uppercase">
              New Product
            </p>
            <h1 className="text-[36px] font-bold leading-tight mb-8">
              XX99 MARK II <br /> HEADPHONES
            </h1>
            <p className="text-[#7D7D7D] text-[15px] leading-[25px] mb-10">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <p className="font-bold text-[18px] mt-4 text-black mb-[47px]">
              ${totalPrice.toLocaleString()}
            </p>

            <div className="flex flex-row justify-center md:justify-start space-x-4">
              <div className="card-headphone-cart-one text-black cursor-pointer">
                <div className="flex justify-between items-center space-x-[21px] px-4">
                  <FiMinus
                    onClick={handleDecrease}
                    className="opacity-25 hover:text-button-one"
                  />
                  <p>{quantity}</p>
                  <FiPlus
                    onClick={handleIncrease}
                    className="opacity-25 hover:text-button-one"
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
      <div className="md:hidden flex flex-col justify-center items-center min-h-screen text-black px-6">
        <h1
          className="text-start self-start mb-6 cursor-pointer"
          onClick={() => router.back()}
        >
          Go back
        </h1>

        <div className="w-full flex flex-col justify-center items-center">
          <div className="bg-[#F1F1F1] flex justify-center items-center w-[300px] h-[300px] rounded-lg">
            <Image
              src={Black}
              alt="Black headphone"
              className="object-contain"
            />
          </div>

          <div className="text-start mt-8">
            <p className="tracking-[8px] text-sm text-button-one mb-4">
              NEW PRODUCT
            </p>
            <h1 className="text-4xl font-extrabold mb-6 leading-tight">
              XX99 MARK II <br /> HEADPHONES
            </h1>
            <p className="mb-8 text-[15px] leading-relaxed opacity-50">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <p className="font-bold text-[18px] mt-4 mb-[21px]">
              ${totalPrice.toLocaleString()}
            </p>

            <div className="flex flex-row space-x-4">
              <div className="card-headphone-cart-one text-black cursor-pointer">
                <div className="flex justify-between items-center space-x-[21px] px-4">
                  <FiMinus
                    onClick={handleDecrease}
                    className="opacity-25 hover:text-button-one"
                  />
                  <p>{quantity}</p>
                  <FiPlus
                    onClick={handleIncrease}
                    className="opacity-25 hover:text-button-one"
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

export default HeroProduct;
