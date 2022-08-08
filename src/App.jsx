import NavBar from "./components/Header/NavBar.jsx";
import MealsWelcome from "./components/Meals/MealsWelcome"
import Meals from "./components/Meals/Meals.jsx";
import Modal from "./assets/Modal.jsx";
import {useState, createContext} from 'react';

export const CartItemsContext = createContext();

function App(){

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const order = () => {
    console.log("Food Ordered");
  }
  
  const modal = isOpen && <Modal closeModal={closeModal} order={order}/>;

  const [cartItems, setCartItems] = useState([])

  return (
    <>
      <CartItemsContext.Provider value={[cartItems, setCartItems]}>
        {modal}
        <NavBar openModal={openModal}/>
        <MealsWelcome />
        <Meals />
      </CartItemsContext.Provider>
    </>
  );
}

export default App;
