import React from "react";
import { Link } from "react-router-dom";

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

      <Link
        to={"/detail/" + props.id}
        className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 rounded-full"
      >
        más info
      </Link>
    </>
  );
};
