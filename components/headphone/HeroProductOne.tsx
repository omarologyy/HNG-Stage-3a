"use client";
import React, { useState } from "react";
import Image from "next/image";
import Mark from "@/public/images/headphoneImgs/MarkSvg.svg";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useRouter } from "next/navigation";
import CartModal from "../cart/CartModal";
function HeroProductOne() {
  const router = useRouter();
  const basePrice = 1750;
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

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
      <div className="hidden lg:flex flex-col items-center w-full bg-white text-black py-20">
        <button
          onClick={() => router.back()}
          className="text-start self-start ml-[124px] mt-[79px] hover:text-button-one transition"
        >
          Go back
        </button>

        <div className="flex flex-row items-center justify-center space-x-24 w-4/5 mt-10">
          <div className="bg-[#F1F1F1] flex justify-center items-center w-[540px] h-[560px] rounded-lg">
            <Image
              src={Mark}
              alt="XX99 Mark I"
              className="object-contain w-[300px] h-[340px]"
            />
          </div>

          <div className="max-w-[445px]">
            <p className="tracking-[10px] text-[14px] text-button-one mb-6 uppercase">
              New Product
            </p>
            <h1 className="text-[40px] font-bold leading-11 mb-8">
              XX99 MARK I <br /> HEADPHONES
            </h1>
            <p className="text-[#7D7D7D] text-[15px] leading-[25px] mb-10">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios.
            </p>
            <p className="font-bold text-[18px] mt-4 text-black mb-[47px]">
              ${totalPrice.toLocaleString()}
            </p>

            <div className="flex flex-row space-x-4">
              <div className="bg-[#F1F1F1] flex justify-between items-center w-[120px] px-4 py-3 rounded-md">
                <button onClick={decrease}>
                  <FiMinus className="text-gray-500 hover:text-black" />
                </button>
                <p>{quantity}</p>
                <button onClick={increase}>
                  <FiPlus className="text-gray-500 hover:text-black" />
                </button>
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
      <div className="hidden md:flex lg:hidden flex-col justify-center items-center text-black py-16 px-6">
        <button
          onClick={() => router.back()}
          className="text-start self-start ml-4 hover:text-button-one transition"
        >
          Go back
        </button>

        <div className="flex flex-col items-center mt-10 text-center">
          <div className="bg-[#F1F1F1] flex justify-center items-center w-[400px] h-[400px] rounded-lg mb-10">
            <Image src={Mark} alt="XX99 Mark I" className="object-contain" />
          </div>

          <p className="tracking-[8px] text-[14px] text-button-one mb-4 uppercase">
            New Product
          </p>
          <h1 className="text-[36px] font-bold mb-6 leading-tight">
            XX99 MARK I <br /> HEADPHONES
          </h1>
          <p className="text-[#7D7D7D] text-[15px] leading-[25px] mb-8 max-w-[400px]">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios.
          </p>
          <p className="font-bold text-[18px] mt-4 mb-6">
            ${totalPrice.toLocaleString()}
          </p>

          <div className="flex flex-row items-center space-x-4">
            <div className="bg-[#F1F1F1] flex justify-between items-center w-[120px] px-4 py-3 rounded-md">
              <button onClick={decrease}>
                <FiMinus className="text-gray-500 hover:text-black" />
              </button>
              <p>{quantity}</p>
              <button onClick={increase}>
                <FiPlus className="text-gray-500 hover:text-black" />
              </button>
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

      {/* MOBILE VIEW */}
      <div className="flex md:hidden flex-col justify-center items-center min-h-screen bg-white text-black px-6">
        <button
          onClick={() => router.back()}
          className="text-start self-start mt-6 hover:text-button-one transition"
        >
          Go back
        </button>

        <div className="flex flex-col items-center mt-10">
          <div className="bg-[#F1F1F1] flex justify-center items-center w-[280px] h-[300px] rounded-lg mb-10">
            <Image src={Mark} alt="XX99 Mark I" className="object-contain" />
          </div>

          <p className="tracking-[8px] text-sm text-button-one mb-4 uppercase">
            NEW PRODUCT
          </p>
          <h1 className="text-3xl font-bold mb-6 leading-tight text-center">
            XX99 MARK I <br /> HEADPHONES
          </h1>
          <p className="text-[#7D7D7D] mb-8 text-[15px] leading-relaxed text-center">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike.
          </p>
          <p className="font-bold text-[18px] mb-6">
            ${totalPrice.toLocaleString()}
          </p>

          <div className="flex flex-row space-x-4">
            <div className="bg-[#F1F1F1] flex justify-between items-center w-[120px] px-4 py-3 rounded-md">
              <button onClick={decrease}>
                <FiMinus className="text-gray-500 hover:text-black" />
              </button>
              <p>{quantity}</p>
              <button onClick={increase}>
                <FiPlus className="text-gray-500 hover:text-black" />
              </button>
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
    </>
  );
}

export default HeroProductOne;
