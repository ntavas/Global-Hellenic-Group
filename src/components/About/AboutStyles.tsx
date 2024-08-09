import { theme } from "../../theme.tsx";

export const headerStyle = {
  marginTop: '1rem',
  fontWeight: '500',
  color: theme.palette.secondary.main,
  textAlign: 'center',
  fontSize: {
    xs: '2rem', // small screens
    sm: '2rem', // medium screens
    md: '2.5rem', // large screens
    lg: '3rem', // extra large screens
  },
};

export const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
};

export const iconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '1rem',
  color: theme.palette.primary.main,
};

export const cardContentStyle = {
  textAlign: 'center',
  padding: '1rem',
};

export const descriptionStyle = {
  color: theme.palette.text.secondary,
  fontSize: {
    xs: '0.9rem', // small screens
    sm: '1rem', // medium screens
    md: '1rem', // large screens
  },
};
