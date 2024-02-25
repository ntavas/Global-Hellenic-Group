import './App.module.css'
import styles from './App.module.css'
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Work from "./components/Work/Work.tsx";
import Contact from "./components/Contact/Contact.tsx";
import React from "react";

function App() {
    const homeRef = React.useRef(null);
    const aboutRef = React.useRef(null);
    const workRef = React.useRef(null);
    const contactRef = React.useRef(null);

    const handleNavigation = (sectionId: string) => {
        let sectionEl;
        switch (sectionId) {
            case 'home':
                sectionEl = homeRef.current;
                break;
            case 'about':
                sectionEl = aboutRef.current;
                break;
            case 'work':
                sectionEl = workRef.current;
                break;
            case 'contact':
                sectionEl = contactRef.current;
                break;
            default:
                sectionEl = null;
        }

        if (sectionEl){
            sectionEl.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className={styles.container}>
                <Home ref={homeRef} handleNavigation={handleNavigation} id="home" />
                <About ref={aboutRef} id="about" />
                <Work ref={workRef} id="work" />
                <Contact ref={contactRef} id="contact" />
            </div>
        </>
    );
}

export default App;
