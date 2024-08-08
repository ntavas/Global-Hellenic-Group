import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme.tsx";
import Wrapper from "./components/Wrapper/Wrapper.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Wrapper>
          <ThemeProvider theme={theme}>
              <App />
          </ThemeProvider>
      </Wrapper>
  </React.StrictMode>,
)
