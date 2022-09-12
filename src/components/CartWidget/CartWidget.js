import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartWidget() {
  return (
    <>
      <button className="text-gray-600 hover:text-blue-600 text-xl">
        <AiOutlineShoppingCart />
      </button>
      <li className="text-xs text-cyan-500 font-bold">1</li>
    </>
  );
}
