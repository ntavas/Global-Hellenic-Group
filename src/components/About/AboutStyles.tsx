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
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',

    '&.Mui-expanded': {
        marginBottom: '0%',
        marginTop: '0%',
    },
};