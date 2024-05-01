import React from "react";
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Offer from './Components/Offer';
import Feature from "./Components/Feature";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Feature />
        <Offer />
        <About />
        <Contact />
    </div>
  );
}

export default App;
