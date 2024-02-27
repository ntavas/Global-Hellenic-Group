import './App.css'
import React from "react";
import About from "./components/About/About.tsx";
import Home from "./components/Home/Home.tsx";
import Work from "./components/Work/Work.tsx";
import Contact from "./components/Contact/Contact.tsx";

function App() {

  return (
    <>
      <Home />
      <About />
      <Work />
      <Contact />
    </>
  )
}

export default App
