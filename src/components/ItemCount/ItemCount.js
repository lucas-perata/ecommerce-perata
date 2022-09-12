import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemCount({ stock, onAdd, initial, quantity }) {
  const [items, setItems] = useState(initial);

  const maxItems = stock;

  const sumItem = () => {
    items == maxItems ? console.log("error de stock") : setItems(items + 1);
  };

  const minusItem = () => {
    items === 0 ? console.log("error de stock") : setItems(items - 1);
  };

  return (
    <>
      <div className="p-4 flex flex-row items-center justify-center">
        <button
          className={`bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200`}
          onClick={minusItem}
        >
          -
        </button>
        <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
          {items}
        </div>
        <button
          className={`rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200`}
          onClick={sumItem}
        >
          +
        </button>
      </div>
      <div className="text-red-600 text-xs" onClick={minusItem}>
        Stock: {stock}
      </div>

      <button
        onClick={() => onAdd(items)}
        className="py-2 px-4 bg-cyan-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
      >
        Agregar al carrito
      </button>
    </>
  );
}
