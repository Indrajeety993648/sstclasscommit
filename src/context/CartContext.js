import { createContext } from "react";

const CartContext = createContext({
    cartData: {},
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    incrementProductQty: () => {},
    decrementProductQty: () => {}
});

export { CartContext };