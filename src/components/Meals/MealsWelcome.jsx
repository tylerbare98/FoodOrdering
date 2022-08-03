import styles from "./MealsWelcome.module.css"
import Card from "../../assets/Card"

const MealsWelcome = () => {
    return(
        <Card className={styles.container}>
            <h1>
                Delicious Food, Delivered To You
            </h1>
            <p>
                Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-qaulity ingredients, just-in-tim and of course by experienced chefs!
            </p>
        </Card>
    )
}

export default MealsWelcome;