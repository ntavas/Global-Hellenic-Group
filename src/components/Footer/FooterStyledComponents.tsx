import {Box, styled} from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    backgroundColor: "#222222",
    color: theme.palette.primary.main,
    padding: "1rem",
    height: "16vh",
    alignItems: "center",

    [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        height: "auto",
        padding: "2rem 1rem",
        gap: "0.5rem",
    },
}));

export const Left = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "1rem",
    flex: 1,

    [theme.breakpoints.down('sm')]: {
        justifyContent: "center",
    },
}));

export const LogoImage = styled('img')(({ theme }) => ({
    width: "4rem",
    height: "4rem",

    [theme.breakpoints.down('sm')]: {
        width: "3rem",
        height: "3rem",
    },
}));

export const Right = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: "0.5rem",
    flex: 1,

    [theme.breakpoints.down('sm')]: {
        alignItems: "center",
        textAlign: "center",
    },
}));
