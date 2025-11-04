"use client";

import React, { useState } from "react";
import { Package } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "Alexei",
    email: "alexei@gmail.com",
    phone: "+1 (202) 555-0136",
    address: "1137 Williams Avenue",
    zipCode: "10001",
    city: "New York",
    country: "United States",
    paymentMethod: "e-money",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const cartItems = [
    { id: 1, name: "XX99 MK II", price: 2999, quantity: 1, image: "🎧" },
    { id: 2, name: "XX59", price: 899, quantity: 2, image: "🎧" },
    { id: 3, name: "YX1", price: 599, quantity: 1, image: "🎧" },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping;

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    if (name === "email" && value) {
      if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: "Wrong format" }));
      }
    }
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Order Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-8 relative">
            <div className="mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                THANK YOU
              </h2>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                FOR YOUR ORDER
              </h2>
              <p className="text-sm text-gray-500">
                You will receive an email confirmation shortly.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden mb-6">
              <div className="p-6">
                <div className="space-y-4">
                  {cartItems.slice(0, 1).map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-xl">
                        {item.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          ${item.price.toLocaleString()}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-gray-500">
                        x{item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
                {cartItems.length > 1 && (
                  <div className="mt-4 pt-4 border-t border-gray-300">
                    <button className="text-xs text-gray-500 hover:text-gray-700 font-bold">
                      and {cartItems.length - 1} other item(s)
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-black text-white p-6">
                <p className="text-xs text-gray-400 uppercase mb-2">
                  Grand Total
                </p>
                <p className="text-lg font-bold">
                  ${grandTotal.toLocaleString()}
                </p>
              </div>
            </div>

            <button
              onClick={() => router.push("/")}
              className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm tracking-wider rounded-lg transition-colors"
            >
              BACK TO HOME
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <button className="text-gray-600 hover:text-gray-900 mb-6 text-sm">
          Go Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
                CHECKOUT
              </h1>

              {/* Billing Details */}
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-orange-500 mb-4 tracking-wider">
                  BILLING DETAILS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                      placeholder="Alexei"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-gray-900">
                        Email Address
                      </label>
                      {errors.email && (
                        <span className="text-red-500 text-xs font-medium">
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="alexei@gmail.com"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-xs font-bold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (202) 555-0136"
                    className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                  />
                </div>
              </div>

              {/* Shipping Info */}
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-orange-500 mb-4 tracking-wider">
                  SHIPPING INFO
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="1137 Williams Avenue"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-900 mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        placeholder="10001"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-900 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="New York"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="United States"
                      className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div>
                <h2 className="text-sm font-semibold text-orange-500 mb-4 tracking-wider">
                  PAYMENT DETAILS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-4">
                      Payment Method
                    </label>
                  </div>

                  <div className="space-y-4">
                    <label
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        formData.paymentMethod === "e-money"
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-300 hover:border-orange-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="e-money"
                        checked={formData.paymentMethod === "e-money"}
                        onChange={handleChange}
                        className="w-5 h-5 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="ml-3 text-sm font-bold text-gray-900">
                        e-Money
                      </span>
                    </label>

                    <label
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        formData.paymentMethod === "cash"
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-300 hover:border-orange-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === "cash"}
                        onChange={handleChange}
                        className="w-5 h-5 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="ml-3 text-sm font-bold text-gray-900">
                        Cash on Delivery
                      </span>
                    </label>
                  </div>
                </div>

                {formData.paymentMethod === "cash" && (
                  <div className="mt-6 flex items-start gap-4 p-6">
                    <Package className="w-12 h-12 text-orange-500 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The 'Cash on Delivery' option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-bold text-gray-900 mb-6">SUMMARY</h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                    <span className="text-sm font-bold text-gray-500">
                      x{item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 uppercase">Total</span>
                  <span className="font-bold text-gray-900">
                    ${total.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 uppercase">Shipping</span>
                  <span className="font-bold text-gray-900">${shipping}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 uppercase">
                    VAT (Included)
                  </span>
                  <span className="font-bold text-gray-900">
                    ${vat.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm pt-3">
                  <span className="text-gray-500 uppercase">Grand Total</span>
                  <span className="font-bold text-orange-500 text-lg">
                    ${grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm tracking-wider rounded-lg transition-colors"
              >
                CONTINUE & PAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
