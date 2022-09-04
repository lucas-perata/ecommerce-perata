import React from "react";

export const ItemDetail = (props) => {
  // const uniqueProduct = props.items.find((item) => item.id === 1);
  return (
    <>
      <div>{props.items.title}</div>
      <div>{props.items.author}</div>
    </>
  );
};

export default ItemDetail;
