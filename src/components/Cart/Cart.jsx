import Button from "../../assets/Button";
import styles from "./Cart.module.css"
import {useContext} from 'react';
import {CartItemsContext} from "../../App";

const Cart = (props) => {

    let totalAmount = 0;

    const createItem = (item) => {

        totalAmount += item.price

        return(
            <h4>{`${item.name}(${item.amount}): ${item.price}`}</h4>
        )
    }

    const [cartItems, setCartItems] = useContext(CartItemsContext);
    console.log(cartItems)

    return(
        <>
            <header>
                {cartItems.map(createItem)}
            </header>
            <section className={styles.modalSection}>
                <h2>Total Amount</h2>
                <h2>{totalAmount}</h2>
            </section>
            <footer className={styles.modalFooter}>
                <Button className={styles.invertButton} onClick={props.closeModal}>Close</Button>
                <Button onClick={props.order}>Order</Button>
            </footer>
        </>
    )
}

export default Cart;