import {Box, styled} from "@mui/material";
import {theme} from "../../theme.tsx";

export const FooterContainer = styled(Box)({
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    backgroundColor: "#222222",
    color: theme.palette.primary.main,
    padding: "1rem",
    height: "16vh",
    bottom: 0,
    left: 0,
});

export const Left = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "1rem",
    flex: 1,
});

export const LogoImage = styled('img')({
    width: "4rem",
    height: "4rem",
});

export const Right = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: "1rem",
    flex: 1,
});