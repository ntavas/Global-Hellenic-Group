import {SxProps} from "@mui/system/styleFunctionSx";
import {theme} from "../../theme.tsx";

export const paragraphStyles: SxProps = {
    color: theme.palette.text.primary,
    fontFamily: 'sans-serif',
    fontSize: {
        xs: '0.8rem',
        sm: '1.2rem',
        md: '1.3rem',
        lg: '1.3rem',
        xl: '1.5rem',
    },
    width: {
        xs: '80%',
        sm: '70%', // < 600px
        md: '70%',  // <=1200px
        lg: '53%',
        xl: '40%',
    },
    wordWrap: 'break-word',
    textAlign: 'center',
}

export const headerStyles: SxProps = {
    fontSize: {
        xs: '1.5rem',
        sm: '2.5rem',
        md: '4rem',
        lg: '4rem',
        xl: '4rem',
    },
    wordWrap: 'break-word',
    color: '#E6C82C',
    textAlign: 'center',
}