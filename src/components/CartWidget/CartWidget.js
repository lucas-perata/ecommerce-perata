import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartWidget() {
  const { qty, cart } = useContext(CartContext);

  return (
    <>
      <Link to="/cart">
        <button className="text-gray-600 hover:text-blue-600 text-xl">
          <AiOutlineShoppingCart />
        </button>
      </Link>
      <li className="text-xs text-cyan-500 font-bold">
        {qty(cart) > 0 ? qty(cart) : ""}
      </li>
    </>
  );
}
