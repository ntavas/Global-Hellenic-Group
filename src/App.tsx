import './App.css';
import Home from "./components/Home/Home.tsx";
import {Box} from "@mui/material";
import Video from './components/Videos/Video.tsx';
import About from './components/About/About.tsx';
import Contact from './components/Contact/Contact.tsx';
import Footer from "./components/Footer/Footer.tsx";
import React from "react";
import Services from './components/Services/Services.tsx';

function App() {
    const homeRef = React.useRef<HTMLDivElement | null>(null);
    const videoRef = React.useRef<HTMLDivElement | null>(null);
    const aboutRef = React.useRef<HTMLDivElement | null>(null);
    const servicesRef = React.useRef<HTMLDivElement | null>(null);
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
            case 'services':
                sectionEl = servicesRef.current;
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
                
                <Home handleNavigation={handleNavigation} ref={homeRef}/>
                <Video ref={videoRef}/>
                <Services ref={servicesRef}/>
                <About ref={aboutRef}/>
                <Contact ref={contactRef}/>
                <Footer/>
            </Box>
        </>
    );
}

export default App;
