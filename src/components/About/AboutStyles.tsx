import {theme} from "../../theme.tsx";

export const headerStyle = {
    marginTop: '1rem',
    fontWeight: '500',
    color: theme.palette.secondary.main,
}

export const accordionSummaryStyle = {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
}

export const accordionStyle = {
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',

    '&.Mui-expanded': {
        marginBottom: '0%',
        marginTop: '0%',
    },
};