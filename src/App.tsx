import './App.css';
import Home from "./components/Home/Home.tsx";
import {Box} from "@mui/material";
import Video from './components/Videos/Video.tsx';
import About from './components/About/About.tsx';
import Contact from './components/Contact/Contact.tsx';
import Footer from "./components/Footer/Footer.tsx";
import React from "react";

function App() {
    const homeRef = React.useRef<HTMLDivElement | null>(null);
    const videoRef = React.useRef<HTMLDivElement | null>(null);
    const aboutRef = React.useRef<HTMLDivElement | null>(null);
    const workRef = React.useRef<HTMLDivElement | null>(null);
    const contactRef = React.useRef<HTMLDivElement | null>(null);

    const handleNavigation = (sectionId: string) => {
        let sectionEl;
        switch (sectionId) {
            case 'home':
                sectionEl = homeRef.current;
                break;
            case 'video':
                sectionEl = videoRef.current;
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
            <Box>
                
                <Home handleNavigation={handleNavigation} ref={homeRef} id="home"/>
                <Video ref={videoRef} id="video"/>
                <About ref={aboutRef} id="about"/>
                <Contact ref={contactRef} id="contact"/>
                <Footer/>
            </Box>
        </>
    );
}

export default App;
