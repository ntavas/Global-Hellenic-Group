import {SxProps} from "@mui/system/styleFunctionSx";
import {theme} from "../../theme.tsx";

export const headerStyles: SxProps = {
    color: "#001122",
    fontWeight: 'bold',
    textAlign: "center",
    fontSize: "2rem",

    [theme.breakpoints.down('md')]: {
        fontSize: "1.75rem",
    },

    [theme.breakpoints.down('sm')]: {
        fontSize: "1.5rem",
    },
};

export const paragraphStyles: SxProps = {
    color: theme.palette.text.primary,
    fontSize: "1.2rem",
    width: "70%",
    textAlign: "center",

    [theme.breakpoints.down('md')]: {
        fontSize: "1.1rem",
        width: "80%",
    },

    [theme.breakpoints.down('sm')]: {
        fontSize: "1rem",
        width: "90%",
    },

    [theme.breakpoints.down('xs')]: {
        fontSize: "0.9rem",
        width: "100%",
    },
};
