"use client" // by default Next wants to use server rendered component but this will be client rendered 
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Page() {
/**
 * 1) Create a product page 
 * 2) create a header 
 * 3) create a button that requests data
 * 4) request data
 * 5) store the data in my state (react state)
 * 6) output the data
 */

    const [products, setProducts] = useState(null);
    const API_ENDPOINT = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"; // constants are in UPPERCASE
    
    async function fetchProducts() {
        const response = await fetch(API_ENDPOINT); // when it gets to the await, it will wait until this function finishes resolving BEFORE moving forward
        // waiting for the response
        // taking the response and assigning to another variable
        console.log(response);
        const data = await response.json(); // this is the JSON parser - converts raw data it to a JS object
        console.log(data);

        setProducts(data);
    }

    const ProductList = () => {
        if (products) {
            let productsList = [];
            
            products.forEach((product, index) => { 
                productsList.push(
                    <li key={index}>{product.name}</li> // we access the keys inside each of the products 
                )
            });

            return (
                <div className="border-4 border-black p-4 mb-4 bg-yellow-100">
                    <ul>{productsList}</ul>
                </div>
            )
        }
        
        return (
            <div className="border-4 border-black p-4 mb-4 bg-yellow-100">
            No products right now 
            </div>
        )
    }

    return (
    <div className="bg-green-900 p-4">
        <header className="border-4 border-black p-4 mb-4 bg-yellow-100">
        <h1 className="text-4xl mb-6 text-yellow-700">Welcome to my product page!</h1>
        <button 
            onClick={fetchProducts}
            className="border-black border-2 p-2 bg-black text-lime-100">
            Fetch products!
        </button>
        </header>
        <ProductList />
    </div>
    );
}
