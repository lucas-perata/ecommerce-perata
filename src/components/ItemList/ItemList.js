import React from "react";
import { Item } from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemList.css";

const ItemList = (props) => {
  return (
    <>
      {props.items.map((item) => {
        return (
          <div
            id="load"
            className="w-80 p-5 bg-white shadow rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <div key={item.id}> </div>
            <Item
              title={item.title}
              author={item.author}
              price={item.price}
              img={item.img}
              id={item.id}
            />
            <ItemCount stock={item.stock} />
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
