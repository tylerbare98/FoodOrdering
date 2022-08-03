import styles from "./CartButton.module.css"
import CartIcon from "../../assets/CartIcon"

const CartButton = () => {

    return(
        <button className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>3</span>
        </button>
    )
}

export default CartButton;