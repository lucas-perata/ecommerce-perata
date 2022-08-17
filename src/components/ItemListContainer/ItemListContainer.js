import React from "react";
import landing from "./landing.jpg"

const ItemListContainer = (props) => {
    return (
    <section className="dark:bg-gray-800 dark:text-gray-100 bg-cyan-500">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl text-white"> 
                Bienvenido a la tienda, {props.saludo}!
                </h1>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={landing} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"></img>
		</div>
        </div>
    </section>
    )
}

export default ItemListContainer;   