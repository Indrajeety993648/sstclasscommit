import "./Products.css";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";

function Products() {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        let URL = "https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products";
        fetch(URL).then((response) => response.json()).then((data) => {
            setProducts(data);
        });
    }, []);
    
    return (
        <div>
            <h1>
                Products
            </h1>

            <ul className="products-list">
                {
                    products.map((product, index) => (
                        <li key={index}>
                            <ProductCard
                                productData={product}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default React.memo(Products);