import {useState, useContext} from 'react';
import {CartItemsContext} from "../../store/CartContext";
import styles from "./MealsItem.module.css"
import Button from "../../assets/Button"


const MealsItem = (props) => {

    const [amount, setAmount] = useState("1");
    const [cart, addItem, removeItem] = useContext(CartItemsContext);

    const submitHandler = (event) => {
        event.preventDefault();
        addItem({name:props.name, amount:amount, price:props.price})
      }

    const amountChangedHandler = (event) => {
        setAmount(event.target.value)
    }

    let mealPrice=`$${props.price.toFixed(2)}`
    return(
        <div className={styles.container}>
            <section>
                <h2>{props.name}</h2>
                <p className={styles.description}>{props.description}</p>
                <p className={styles.price}>{mealPrice}</p>
            </section>
            <form onSubmit={submitHandler} className={styles.form}>
                <label className={styles.amountLabel}>Amount:
                    <input 
                    type="number" min="00" max="20" step="1" 
                    value={amount}
                    onChange={amountChangedHandler}
                    className={styles.amountInput}
                    />
                </label><br/>
                <Button>+ Add</Button>
            </form>
        </div>
    )
}

export default MealsItem;