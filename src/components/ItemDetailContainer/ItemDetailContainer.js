import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

function ItemDetailContainer() {
  const [items, setItems] = useState([]);
  const params = useParams();

  useEffect(() => {
    const uniqueProduct = collection(db, "items");
    getDocs(uniqueProduct).then((resp) => {
      resp.docs.map((prod) => {
        if (prod.data().id == params.productId) {
          setItems(prod.data());
        }
      });
    });
  }, []);

  return (
    <>
      {items.length === 0 ? (
        <section
          role="status"
          className="text-gray-700 body-font overflow-hidden bg-white content-center animate-pulse"
        >
          <div class="container px-20 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <div class="img-loader">
                <div role="status">
                  <svg
                    class="w-12 h-12 text-gray-200 dark:text-gray-600 img-loader"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                  >
                    <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></h2>
                <h1 class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></h1>
                <div className="flex">
                  <span class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-10 mb-4"></span>
                </div>
                <p class="h-2.5 mb-2 bg-gray-200 rounded-full dark:bg-gray-700"></p>
                <p class="h-2.5 mb-2 bg-gray-200 rounded-full dark:bg-gray-700"></p>
                <p class="h-2.5 mb-2 bg-gray-200 rounded-full dark:bg-gray-700"></p>
                <p class="h-2.5 mb-2 bg-gray-200 rounded-full dark:bg-gray-700"></p>
                <p class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <ItemDetail items={items} />
      )}
    </>
  );
}

export default ItemDetailContainer;
