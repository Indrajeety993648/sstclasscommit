import "./AddToCart.css";

import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

function AddToCart({ product }) {
    let { incrementProductQty, decrementProductQty } = useContext(CartContext);

    function increase() {
        incrementProductQty(product);
    }

    function decrease() {
        decrementProductQty(product);
    }

    return (
        <div className="product-controls">
            <button onClick={increase}>
                +
            </button>

            <button onClick={decrease}>
                -
            </button>
        </div>
    );
}

export default AddToCart;