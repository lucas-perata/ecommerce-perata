import React from "react";
import { Item } from "../Item/Item";
import "./ItemList.css";
import { useParams } from "react-router-dom";

const ItemList = (props) => {
  const params = useParams();
  console.log(params);

  return (
    <>
      {props.items.map((item) => {
        if (
          (params.categoryName === "nuevo" &&
            item.data().category === "nuevo") ||
          (params.categoryName === "usado" && item.data().category === "usado")
        ) {
          return (
            <div
              id="load"
              className="w-80 p-5 bg-white shadow rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <div key={item.data().id}> </div>
              <Item
                title={item.data().title}
                author={item.data().author}
                price={item.data().price}
                img={item.data().img}
                id={item.data().id}
              />
            </div>
          );
        } else if (!params.categoryName) {
          return (
            <div
              id="load"
              className="w-80 p-5 bg-white shadow rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <div key={item.data().id}> </div>
              <Item
                title={item.data().title}
                author={item.data().author}
                price={item.data().price}
                img={item.data().img}
                id={item.data().id}
              />
            </div>
          );
        }
      })}
    </>
  );
};

export default ItemList;
