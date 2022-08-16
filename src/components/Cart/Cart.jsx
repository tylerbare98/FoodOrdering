import Button from "../../assets/Button";
import styles from "./Cart.module.css"
import {useContext} from 'react';
import {CartItemsContext} from "../../store/CartContext";

const Cart = (props) => {

    const submitHandler = (event) => {
        event.preventDefault();
        removeItem(event.target.id)
      }

    const createItem = (item) => {

        return(
        <section className={styles.sectionContainer}>
            <h4>{`${item.name}(${item.amount}): ${item.price * item.amount}`}</h4>
            <form id={item.name} onSubmit={submitHandler} className={styles.form}>
                <Button>Remove</Button>
            </form>
        </section>
        )
    }

    const [cart, addItem, removeItem] = useContext(CartItemsContext);

    return(
        <>
            <header>
                {cart.items.map(createItem)}
            </header>
            <section className={styles.modalSection}>
                <h2>Total Amount</h2>
                <h2>{cart.totalAmount}</h2>
            </section>
            <footer className={styles.modalFooter}>
                <Button className={styles.invertButton} onClick={props.closeModal}>Close</Button>
                <Button onClick={props.order}>Order</Button>
            </footer>
        </>
    )
}

export default Cart;