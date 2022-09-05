import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = (props) => {
  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-20 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              class="detail lg:w-1/2 object-cover object-center rounded border border-gray-200"
              src={props.items.img}
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
              <ItemCount stock={props.items.stock} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
