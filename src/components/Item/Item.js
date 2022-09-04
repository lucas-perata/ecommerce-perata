import React from "react";

export const Item = (props) => {
  return (
    <>
      <div>{props.title}</div>
      <div>{props.author}</div>
      <div>${props.price}</div>
      <img
        src={props.img}
        alt={"Portada " + props.title}
        className="rounded-sm w-15"
      />
    </>
  );
};
