//Components
import NavBar from "./components/Header/NavBar.jsx";
import MealsWelcome from "./components/Meals/MealsWelcome"
import Meals from "./components/Meals/Meals.jsx";

//This function is the main Application
function App(){
  return (
    <>
      <NavBar />
      <MealsWelcome />
      <Meals />
    </>
  );
}

//to be used by index.js
export default App;
