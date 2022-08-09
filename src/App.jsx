import NavBar from "./components/Header/NavBar.jsx";
import MealsWelcome from "./components/Meals/MealsWelcome"
import Meals from "./components/Meals/Meals.jsx";
import Modal from "./assets/Modal.jsx";
import {useState} from 'react'
import CartProvider from "./store/CartContext"


function App(){

  //isOpen and open/close functions are for the cart modal to be displayed
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

  return (
    <>
      <CartProvider>
        {modal}
        <NavBar openModal={openModal}/>
        <MealsWelcome />
        <Meals />
      </CartProvider>
    </>
  );
}

export default App;
