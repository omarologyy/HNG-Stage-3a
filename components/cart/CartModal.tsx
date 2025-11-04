"use client";
import React from "react";
import Image from "next/image";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveAll: () => void;
}

const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveAll,
}) => {
  const router = useRouter();
  if (!isOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-32 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-[400px] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-lg">CART ({cartItems.length})</h2>
          <button
            onClick={onRemoveAll}
            className="text-gray-500 text-sm hover:text-red-500"
          >
            Remove all
          </button>
        </div>

        <div className="space-y-4 max-h-[300px] overflow-y-auto">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-3"
            >
              <div className="flex items-center space-x-3">
                <div className="w-[50px] h-[50px] bg-gray-200 rounded-md flex justify-center items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-gray-500 text-sm">
                    ${item.price.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 border px-3 py-1 rounded-md text-sm">
                <FiMinus
                  onClick={() =>
                    onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="cursor-pointer opacity-50 hover:text-orange-500"
                />
                <p>{item.quantity}</p>
                <FiPlus
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="cursor-pointer opacity-50 hover:text-orange-500"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="uppercase text-gray-500 text-sm">Total</span>
          <span className="font-bold text-lg">${total.toLocaleString()}</span>
        </div>

        <button
          onClick={() => router.push("/checkout")}
          className="bg-orange-500 text-white w-full mt-6 py-3 rounded-md font-semibold hover:bg-orange-600"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartModal;
