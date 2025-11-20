import {SxProps} from "@mui/system/styleFunctionSx";
import {theme} from "../../theme.tsx";

export const paragraphStyles: SxProps = {
    color: theme.palette.text.primary,
    // fontFamily: 'sans-serif',
    fontSize: {
        xs: '0.8rem',
        sm: '1rem',
        md: '1.1rem',
        lg: '1.2rem',
        xl: '1.3rem',
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

export const subHeaderStyles: SxProps = {
    fontSize: {
        xs: '1rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '2rem',
        xl: '2rem',
    },
    wordWrap: 'break-word',
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginBottom: '10px'
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
    color: '#d38b50',
    textAlign: 'center',
    marginTop: '-25px'
}
