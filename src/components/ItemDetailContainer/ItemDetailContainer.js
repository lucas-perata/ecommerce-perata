import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../../mock/products";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [items, setItems] = useState([]);
  const params = useParams();
  const uniqueProduct = products.find(
    (product) => product.id == params.productId
  );
  console.log(params.productId);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        setItems(uniqueProduct);
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
      <ItemDetail items={items} />
    </>
  );
}

export default ItemDetailContainer;
