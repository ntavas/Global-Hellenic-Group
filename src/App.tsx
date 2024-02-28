import './App.module.css'
import About from "./components/About/About.tsx";
import Home from "./components/Home/Home.tsx";
import Work from "./components/Work/Work.tsx";
import Contact from "./components/Contact/Contact.tsx";
import styles from "./App.module.css";

function App() {

  return (
    <div className={styles.container}>
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  )
}

export default App
