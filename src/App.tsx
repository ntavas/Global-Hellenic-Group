import './App.css';
import Home from "./components/Home/Home.tsx";
import {Box} from "@mui/material";
import Video from './components/Videos/Video.tsx';
import About from './components/About/About.tsx';

function App() {
    return (
        <>
            <Box>
                <Home />
                <Video />
                <About />
            </Box>
        </>
    );
}

export default App;
