import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        text: {
            primary: '#888888',
        },
        primary: {
            main: '#888888',
        },
        secondary: {
            main: '#001122',
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 0,
                },
            },
        },
    },
})