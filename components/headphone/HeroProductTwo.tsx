"use client";
import React, { useState } from "react";
import Image from "next/image";
import White from "@/public/images/headphoneImgs/FiftyNineSvg.svg";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useRouter } from "next/navigation";
import CartModal from "../cart/CartModal";
function HeroProductTwo() {
  const router = useRouter();
  const basePrice = 899;
  const [quantity, setQuantity] = useState(1);

  // Dynamic total price
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

  // handle increment
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  // handle decrement (ensure not less than 1)
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // navigation helper
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-col items-center w-full bg-white text-black space-y-10 py-20">
        <h1 className="text-start self-start ml-[124px] mt-[79px] cursor-pointer">
          Go back
        </h1>
        {/* Product 1 */}
        <div className="flex flex-row items-center justify-center space-x-24 w-4/5">
          <div className="bg-[#F1F1F1] flex justify-center items-center w-[540px] h-[560px] rounded-lg">
            <Image
              src={White}
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
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>

            {/* Dynamic Price */}
            <p className="font-bold text-[18px] mt-4 text-black mb-[47px]">
              ${" "}
              {totalPrice.toLocaleString("en-US", {
                minimumFractionDigits: 0,
              })}
            </p>

            <div className="flex flex-row space-x-4">
              {/* Quantity control */}
              <div className="card-headphone-cart-one text-black">
                <div className="flex justify-between items-center space-x-[21px]">
                  <FiMinus
                    width={16}
                    height={18}
                    className={`cursor-pointer ${
                      quantity > 1 ? "hover:text-button-one" : "opacity-25"
                    }`}
                    onClick={handleDecrease}
                  />
                  <p>{quantity}</p>
                  <FiPlus
                    width={16}
                    height={18}
                    className="cursor-pointer hover:text-button-one"
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
            <Image
              src={White}
              alt="Black headphone"
              className="object-contain"
            />
          </div>
          <div className="text-center mt-8">
            <p className="tracking-[8px] text-[14px] text-button-one mb-4">
              NEW PRODUCT
            </p>
            <h1 className="text-[40px] font-bold mb-6 leading-tight text-black">
              XX99 MARK II <br /> HEADPHONES
            </h1>
            <p className="text-black text-[15px] leading-[25px] mb-10 opacity-50">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <p className="font-bold text-[18px] mt-4 text-black mb-[21px]">
              ${" "}
              {totalPrice.toLocaleString("en-US", {
                minimumFractionDigits: 0,
              })}
            </p>

            <div className="flex flex-row justify-center space-x-4">
              <div className="card-headphone-cart-one text-black">
                <div className="flex justify-between items-center space-x-[21px]">
                  <FiMinus
                    width={16}
                    height={18}
                    className={`cursor-pointer ${
                      quantity > 1 ? "hover:text-button-one" : "opacity-25"
                    }`}
                    onClick={handleDecrease}
                  />
                  <p>{quantity}</p>
                  <FiPlus
                    width={16}
                    height={18}
                    className="cursor-pointer hover:text-button-one"
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
              src={White}
              alt="Black headphone"
              className="object-contain"
            />
          </div>
          <div className="text-start mt-8">
            <p className="tracking-[8px] text-sm text-button-one mb-4">
              NEW PRODUCT
            </p>
            <h1 className="text-4xl font-extrabold mb-6 leading-tight text-black">
              XX99 MARK II <br /> HEADPHONES
            </h1>
            <p className="text-black mb-8 text-[15px] leading-relaxed opacity-50">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <p className="font-bold text-[18px] mt-4 text-black mb-[21px]">
              ${" "}
              {totalPrice.toLocaleString("en-US", {
                minimumFractionDigits: 0,
              })}
            </p>

            <div className="flex flex-row space-x-4">
              <div className="card-headphone-cart-one text-black">
                <div className="flex justify-between items-center space-x-[21px]">
                  <FiMinus
                    width={16}
                    height={18}
                    className={`cursor-pointer ${
                      quantity > 1 ? "hover:text-button-one" : "opacity-25"
                    }`}
                    onClick={handleDecrease}
                  />
                  <p>{quantity}</p>
                  <FiPlus
                    width={16}
                    height={18}
                    className="cursor-pointer hover:text-button-one"
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

export default HeroProductTwo;
