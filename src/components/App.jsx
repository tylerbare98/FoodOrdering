//Components
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

//Needed stuff for a Note:D
import {createNote, notes} from "./Note.jsx";

//This function is the main Application
function App(){
  return (
    <div>
      <Header />
      {/*This will return an array of 4 different <Note/> components. Jsx renders this out as 4 seperate <Note/> DOM elements*/}
      <div id="test">{notes.map(createNote)}</div>
      <Footer/>
    </div>
  );
}

//to be used by index.js
export default App;
