import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebaseConfig";

const Form = ({ cart, total, clearCart, handleId }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      buyer: { nombre: firstName, apellido: lastName },
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => {
      handleId(res.id);
      clearCart();
      updateProd();
    });
  };
  const updateProd = () => {
    const orderDoc = doc(db, "orders, A29yV");
    updateDoc(orderDoc, { total: 100 });
  };

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Juan..."
            value={firstName}
            onChange={handleChangeFirstName}
          />
          <input
            type="text"
            placeholder="Pérez..."
            name="lastName"
            value={lastName}
            onChange={handleChangeLastName}
          />
          <button>Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Form;
