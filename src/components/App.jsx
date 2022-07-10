import Header from "./header.jsx";
import Note from "./note.jsx";
import notes from "../notes.js"
import Footer from "./footer.jsx";


function App(){
  return (
    <div>
      <Header />
      <Note title="test" content="test content"/>
      <Footer/>
    </div>
  );
}

export default App;
