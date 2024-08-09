import {Box, Button, styled} from "@mui/material";

export const ContactPageContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    height: "auto",
    width: "100vw",
    // backgroundColor: "#F7F7F7",
    // padding: "2rem",
    margin: '0',

    [theme.breakpoints.down('md')]: { // For tablets and smaller screens
        flexDirection: "column",
        // padding: "1rem",
    },
}));

export const LeftContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    flex: 1,
    textAlign: "center",
    padding: "2rem",

    [theme.breakpoints.down('md')]: {
        padding: "1rem",
    },
}));

export const RightContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    flex: 1,
    padding: "2rem",

    [theme.breakpoints.down('md')]: {
        padding: "1rem",
    },
}));

export const ContactForm = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "50%",
    height: "auto",
    backgroundColor: "#FFFFFF",
    padding: "2rem",
    borderRadius: "0.3rem",
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",

    [theme.breakpoints.down('sm')]: {
        width: "80%",
        padding: "1rem",
    },

    [theme.breakpoints.down('xs')]: {
        width: "100%",
    },
}));

export const ContactButton = styled(Button)(({ theme }) => ({
    marginTop: "0.3rem",
    backgroundColor: "#222222",
    borderRadius: "0.2rem",
    color: theme.palette.primary.contrastText,
    width: "100%",
    boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.2)",

    '&:hover': {
        backgroundColor: "#333333",
    }
}));
