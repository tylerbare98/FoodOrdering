import styles from "./MealsItem.module.css"

const MealsItem = (props) => {
    return(
        <ul>
            <h3>{props.name}</h3>
            <p className={styles.description}>{props.description}</p>
            <p className={styles.price}>{props.price}</p>
        </ul>
    )
}

export default MealsItem;