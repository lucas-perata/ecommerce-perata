import React, { useEffect, useState } from "react";
import { products } from '../../mock/products'
import {Item} from '../Item/Item'
import ItemCount from '../ItemCount/ItemCount'

const ItemList = (props) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
                res(products)
              }, 1500); 
        });
    
        getProducts
            .then((data) => {
                setItems(data)
            }
            )
            .catch((error)=>{
                console.log(error)
            })
            .finally(() => {
                console.log('Finally')
            });

    }, []);
    
  return (
    <>
   {items.map((item)=>{
                   return <h3>
                    <Item title = {item.title}/>
                    <ItemCount stock = {item.stock}/>
                   </h3>
                })
              }
    </>
  )
}

export default ItemList