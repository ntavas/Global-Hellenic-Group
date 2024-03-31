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