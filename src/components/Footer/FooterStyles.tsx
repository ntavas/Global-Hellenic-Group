import {styled} from "@mui/material";

export const FooterHeader = styled('h3')(({ theme }) => ({
    color: '#b4a856',
    // fontFamily: 'Inter',
    fontSize: '1.8rem',
    margin: 0,
    padding: 0,

    [theme.breakpoints.down('sm')]: {
        fontSize: "1.5rem",
    },
}));
