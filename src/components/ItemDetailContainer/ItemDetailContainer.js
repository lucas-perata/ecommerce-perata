import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../../mock/products";

function ItemDetailContainer() {
  const [items, setItems] = useState([]);
  const uniqueProduct = products.find((product) => product.id === 1);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        setItems(uniqueProduct);
      }, 2000);
    });

    getProducts
      .then((data) => {
        setItems(products);
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
      <ItemDetail items={items} />
    </>
  );
}

export default ItemDetailContainer;
