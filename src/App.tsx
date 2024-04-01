import './App.css';
import Home from "./components/Home/Home.tsx";
import {Box} from "@mui/material";
import Video from './components/Videos/Video.tsx';

function App() {
    return (
        <>
            <Box>
                <Home />
                <Video />
            </Box>
        </>
    );
}

export default App;
