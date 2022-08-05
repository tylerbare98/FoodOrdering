import {useState} from 'react';
import styles from "./MealsItem.module.css"

const MealsItem = (props) => {

    const [amount, setAmount] = useState("1");

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("form submitted with amount = " + amount)
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
                <input type="submit" value="+ Add" className={styles.amountSubmit}/>
            </form>
        </div>
    )
}

export default MealsItem;