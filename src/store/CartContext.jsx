import {useReducer, createContext} from 'react';

export const CartItemsContext = createContext();

//this is to hold global context of the cart
const CartProvider = props => {

    //this is just the initial state snapshot, helps see how future states should be formatted
    const initialCart = {
        items: [], 
        totalAmount: 0
    }

    //reducer function to handle all dispatches
    const reducerCart = (state, action) => {
        let updatedItems = [];
        let updatedAmount = 0;
        let amountToSubtract = 0;
        switch (action.type) {
            case "ADD":
                updatedItems = state.items.concat(action.meal)
                updatedAmount = state.totalAmount + (action.meal.amount * action.meal.price)
                return {
                    items: updatedItems,
                    totalAmount: updatedAmount
                }
            case "REMOVE":     
                updatedItems = state.items.filter(function(item) {
                      if (item.name != action.name)
                        return true;
                        console.log(item.price * item.amount)
                        amountToSubtract = amountToSubtract + (item.price * item.amount)
                  });
                  updatedAmount = state.totalAmount - amountToSubtract;
                return {
                    items: updatedItems,
                    totalAmount: updatedAmount
                }
            default:
                return state;
        }
      };

    //reducer setup
    const [cart, dispatchCart] = useReducer(reducerCart, initialCart);

    //definition of all dispatches
    const addItem = (item) => {
    dispatchCart({
        type: 'ADD',
        meal: {name:item.name, amount:item.amount, price:item.price},
        });
    }
    const removeItem = (name) => {
    dispatchCart({
        type: 'REMOVE',
        name: name
        });
    }

    //this is the variable to be passed through context's value prop. It allows for function to be passed around
    const cartContext = {
        cart: cart,
        addItem: addItem,
        removeItem: removeItem
      }

      
    //this componnent should wrap everything that needs to access it
    return(
        <CartItemsContext.Provider value={[cartContext.cart, cartContext.addItem, cartContext.removeItem]}>
            {props.children}
        </CartItemsContext.Provider>
    )
}

export default CartProvider;