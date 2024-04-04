import {Box, Button, styled} from "@mui/material";
import {theme} from "../../theme.tsx";

export const ContactPageContainer = styled(Box)({
    display: "flex",
    height: "100vh",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    width: "100vw",
    backgroundColor: "#F7F7F7",
});

export const LeftContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Align items to the start
    gap: "2rem",
    flex: 1,
    // paddingTop: "15%", // Adjust this value to your liking
});

export const RightContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    flex: 1,
});

export const ContactForm = styled(Box)({
    display: "flex",
    // border: "1px solid #888888",
    borderRadius: "0.3rem",
    backgroundColor: "#FFFFFF",
    padding: "1rem",
    flexDirection: "column",
    gap: "1rem",
    width: "50%",
    height: "36.5rem",
    boxShadow:  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
});

export const ContactButton = styled(Button)({
    marginTop: "0.3rem",
    backgroundColor: "#222222",
    borderRadius: "0.2rem",
    color: theme.palette.primary.contrastText,
    width: "100%",
    boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.2)",

    '&:hover': {
        backgroundColor: "#333333",
    }
});