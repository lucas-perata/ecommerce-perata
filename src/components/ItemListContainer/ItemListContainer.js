import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";

const ItemListContainer = (props) => {
  const params = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productCollection = collection(db, "items");
    getDocs(productCollection).then((resp) => {
      setItems(resp.docs);
    });
  }, [params.categoryName]);

  return (
    <>
      {props.page === "store" ? console.log(items) : <Hero />}
      <section id="tienda" className="">
        <h2 className="flex  justify-center text-5xl font-black p-6 ">
          Tienda
        </h2>
        <div className="flex justify-center gap-5 ">
          {props.page === "store" ? (
            <>
              <Link to="/store/" href="#" className="hover:text-violet-600">
                Todos
              </Link>
              <Link
                to="/store/category/nuevo"
                href="#"
                className="hover:text-violet-600"
              >
                Nuevos
              </Link>
              <Link
                to="/store/category/usado"
                className="hover:text-violet-600"
              >
                Usados
              </Link>
            </>
          ) : (
            <Link to="/store/" href="#" className="hover:text-violet-600">
              Ver todos
            </Link>
          )}
        </div>
        {items.length === 0 ? (
          <div role="status" className="w-full mt-10 flex justify-center">
            <svg
              aria-hidden="true"
              class="mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              ></path>
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              ></path>
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="flex container flex-wrap  p-6 mx-auto sm:py-12 lg:py-10 lg:flex-row lg:flex lg:gap-5 md:flex md:items-center sm:flex sm:items-center">
            <ItemList
              items={props.page === "store" ? items : items.slice(0, 4)}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default ItemListContainer;
