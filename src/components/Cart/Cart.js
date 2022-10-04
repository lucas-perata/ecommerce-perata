import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Cart() {
  const { cart, clearCart, deleteOne, sumPrice } = useContext(CartContext);
  const [idCompra, setIdCompra] = useState("");
  const total = sumPrice(cart);
  const handleId = (id) => {
    setIdCompra(id);
  };

  if (idCompra) {
    return (
      <>
        <div class="flex justify-center my-6">
          <div class="flex justify-center w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <div class="flex-1 text-center">
              <div>
                <strong> ¡Gracias por tu compra!</strong>
                <div>Id: {idCompra}</div>
              </div>
              <div className="flex w-full justify-center">
                <Link to="/">
                  <button className="ml-4 flex justify-center px-10 py-3 mt-6 font-medium text-white uppercase bg-green-800 rounded-full shadow item-center hover:bg-green-700 focus:shadow-outline focus:outline-none">
                    Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {cart.length == 0 ? (
        <div class="flex justify-center my-6">
          <div class="flex justify-center w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <div class="flex-1 text-center">
              <div>
                <strong> El carrito está vacío</strong>
              </div>
              <div className="flex w-full justify-center">
                <Link to="/">
                  <button className="ml-4 flex justify-center px-10 py-3 mt-6 font-medium text-white uppercase bg-green-800 rounded-full shadow item-center hover:bg-green-700 focus:shadow-outline focus:outline-none">
                    Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div class="flex justify-center my-6">
            <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
              <div class="flex-1">
                <table class="w-full text-sm lg:text-base" cellspacing="0">
                  <thead>
                    <tr class="h-12 uppercase">
                      <th class="hidden md:table-cell"></th>
                      <th class="text-left">Producto</th>
                      <th class="lg:text-right text-left pl-5 lg:pl-0">
                        <span class="lg:hidden" title="Quantity">
                          Qtd
                        </span>
                        <span class="hidden lg:inline">Cantidad</span>
                      </th>
                      <th class="hidden text-right md:table-cell">
                        Precio por unidad
                      </th>
                      <th class="text-right">Precio total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => {
                      return (
                        <tr>
                          <td class="hidden pb-4 md:table-cell">
                            <a href="#">
                              <img
                                src={item.img}
                                class="w-20 rounded"
                                alt="Thumbnail"
                              />
                            </a>
                          </td>
                          <td>
                            <p class="mb-2 md:ml-4">{item.title}</p>
                            <button
                              onClick={() => deleteOne(item.id)}
                              class="text-gray-700 md:ml-4"
                            >
                              <small>(Remove item)</small>
                            </button>
                          </td>
                          <td class="hidden text-right md:table-cell">
                            <span class="text-sm lg:text-base font-medium">
                              {item.qty}
                            </span>
                          </td>
                          <td class="text-right">
                            <span class="text-sm lg:text-base font-medium">
                              {item.price}
                            </span>
                          </td>
                          <td class="text-right">
                            <span class="text-sm lg:text-base font-medium">
                              {item.price * item.qty}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <div class="lg:px-2 w-full">
                  <div class="p-4 bg-gray-100 rounded-full">
                    <h1 class="ml-2 font-bold uppercase">Order Details</h1>
                  </div>
                  <div class="p-4">
                    <div class="flex justify-between pt-4 border-b">
                      <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                        Total
                      </div>
                      <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        $ {sumPrice(cart)}
                      </div>
                    </div>
                    <div className="w-full flex justify-end">
                      <button
                        onClick={clearCart}
                        class="flex w-auto justify-center px-10 py-3 mt-6 font-medium text-white uppercase bg-red-800 rounded-full shadow item-center hover:bg-red-700 focus:shadow-outline focus:outline-none"
                      >
                        <span class="ml-2 mt-5px">Limpiar carrito</span>
                      </button>
                      <Modal
                        cart={cart}
                        total={total}
                        clearCart={clearCart}
                        handleId={handleId}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
