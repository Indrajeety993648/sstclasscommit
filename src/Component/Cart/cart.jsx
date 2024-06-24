import { useSelector } from "react-redux";
import "./Cart.css";

function Cart() {
    let cartData = useSelector(state => state.cart);

    return (
        <div>
            <h1>Cart</h1>

            <ul className="cart-list">
                {
                    Object.values(cartData).map(product => (
                        <li key={product.id} className="cart-item">
                            <p>
                                Name: {product.title}
                            </p>

                            <p>
                                Price: {product.price.currency} {product.price.value}
                            </p>

                            <p>
                                Quantity: {product.qty}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Cart;