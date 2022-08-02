import styles from "./NavBar.module.css"
import mealPic from "../assets/meals.jpeg"
import Card from "./Card"

function NavBar(){
      return (
        <>
          <header className={styles.header}>
            <h1>ReactMeals</h1>
            <Card>
              <button>Cart</button>
            </Card>
          </header>
          <div className={styles.mainImage}>
            <img src={mealPic} alt="Meal"></img>
          </div>
        </>
      );
}


export default NavBar;