import "./App.css";
import { useState } from "react";
import { StateContext } from "./Components/Contexts/StateContext";
// import Contact from "./Components/Contacts/Contact";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
function App() {
  const [isActive, setActive] = useState(false);
  return (
    <div className="App">
      <StateContext.Provider value={{isActive, setActive}}>
        <Header />
        <Services />
        <Products/>
        {/* <Contact /> */}
        <Footer/>
      </StateContext.Provider>
    </div>
  );
}

export default App;
