import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = (props) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);
  const onAdd = (arg) => {
    setQuantity(arg);
    addToCart(props.items, arg);
  };

  return (
    <>
      <section className="text-gray-700  body-font xs:w-screen overflow-hidden  sm:bg-white">
        <div class="container px-20 py-24 xs:px-0 xs:py-10 mx-auto">
          <div class="lg:w-4/5 xs:w-full mx-auto flex flex-wrap">
            <img
              class="detail lg:w-1/2 object-cover object-center rounded border border-gray-200"
              src={props.items.img}
              alt="product"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                {props.items.author} / {props.items.genre}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {props.items.title}
              </h1>
              <div className="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ${props.items.price}
                </span>
              </div>
              <p class="leading-relaxed">{props.items.description}</p>
              {quantity > 0 ? (
                <>
                  <Link
                    className="py-2 margin px-4 bg-cyan-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
                    to="/cart"
                  >
                    Ir al carrito
                  </Link>
                  <Link
                    className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
                    to="/store"
                  >
                    Seguir comprando
                  </Link>
                </>
              ) : (
                <ItemCount
                  stock={props.items.stock}
                  onAdd={onAdd}
                  initial={quantity}
                  quantity={quantity}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
