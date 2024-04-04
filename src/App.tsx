import './App.css';
import Home from "./components/Home/Home.tsx";
import {Box} from "@mui/material";
import Video from './components/Videos/Video.tsx';
import About from './components/About/About.tsx';
import Contact from './components/Contact/Contact.tsx';

function App() {
    return (
        <>
            <Box>
                <Home/>
                <Video/>
                <About/>
                <Contact/>
            </Box>
        </>
    );
}

export default App;
