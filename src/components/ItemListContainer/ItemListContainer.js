import React, { useEffect, useState } from "react";
import landing from "./landing.jpg";
import ItemList from "../ItemList/ItemList";
import { products } from "../../mock/products";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        setItems(products);
      }, 2000);
    });

    getProducts
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finally");
      });
  }, []);

  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100 bg-cyan-500 h-auto">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl text-white">
              Bienvenido, {props.saludo}!
            </h1>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={landing}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            ></img>
          </div>
        </div>
      </section>

      <section id="tienda" className="">
        <h2 className="flex justify-center text-5xl font-black p-6">Tienda</h2>
        <div className=" container flex flex-col justify-around p-6 mx-auto sm:py-12 lg:py-10 lg:flex-row lg:flex lg:gap-5 md:flex md:items-center sm:flex sm:items-center">
          <ItemList items={items} />
        </div>
      </section>
    </>
  );
};

export default ItemListContainer;
