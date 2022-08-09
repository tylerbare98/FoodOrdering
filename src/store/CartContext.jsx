import {useState, createContext} from 'react';

export const CartItemsContext = createContext();


const CartProvider = props => {

    const [cartItems, setCartItems] = useState([])

    return(
        <CartItemsContext.Provider value={[cartItems, setCartItems]}>
            {props.children}
        </CartItemsContext.Provider>
    )
}

export default CartProvider;