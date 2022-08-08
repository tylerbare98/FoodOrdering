import styles from "./Meals.module.css"
import MealsItem from "./MealsItem"
import Card from "../../assets/Card"

const Meals = (props) => {
    return(
        <Card className={styles.container}>
            {mealsList.map(createMeal)}
        </Card>
    )
}

const createMeal = (item, i, arr) => {
    return(
        <>
            <MealsItem  id={item.id} price={item.price} name={item.name} description={item.description} />
            {!(arr.length - 1 === i) && <hr />} {/*Add hr to every line except the last one*/}
        </>
    )
}

const mealsList = [
    {
      id: '1',
      key: '1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: '2',
      key: '2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: '3',
      key: '3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: '4',
      key: '4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

export default Meals;