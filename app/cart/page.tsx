"use client";

import { useState,useEffect } from "react";

export default function CartPage() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  const [cart, setCart] = useState<
    { id: number; name: string; price: number }[]
  >([]);
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const addToCart = (
    product: { id: number; name: string; price: number }
  ) => {
    const exists = cart.find(
      (item) => item.id === product.id
    );

    if (!exists) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black" >
      <h1 className="text-4xl font-bold text-center mb-8">
        Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h2 className="text-xl font-semibold">
              {product.name}
            </h2>

            <p className="text-green-600 text-lg mt-2">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">
          Cart
        </h2>

        <p>Items in Cart: {cart.length}</p>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between py-2"
          >
            <span>
              {item.name} - ₹{item.price}
            </span>

            <button
              onClick={() =>
                removeFromCart(item.id)
              }
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}

        <h3 className="text-xl font-bold mt-4">
          Total: ₹{totalPrice}
        </h3>
      </div>
    </div>
  );
}