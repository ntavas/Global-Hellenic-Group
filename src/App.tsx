import './App.module.css'
import styles from './App.module.css'
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Work from "./components/Work/Work.tsx";
import Contact from "./components/Contact/Contact.tsx";

function App() {

  return (
    <>
        <div className={styles.container}>
            <Home />
            <About />
            <Work />
            <Contact />
        </div>
    </>
  )
}

export default App
