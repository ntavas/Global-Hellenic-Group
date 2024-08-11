import { theme } from "../../theme.tsx";

export const headerStyle = {
  marginTop: '1rem',
  fontWeight: '500',
  color: theme.palette.secondary.main,
  fontSize: {
    xs: '2rem', 
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem',
  },
};

export const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  height: '100%', // Ensures that all cards are of equal height
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
};

export const iconStyle = {
  color: theme.palette.primary.main,
  marginBottom: '0.5rem', // Reduced space between icon and text
};

export const cardContentStyle = {
  textAlign: 'center',
  // padding: '0.5rem', // Reduced padding inside the card
};

export const descriptionStyle = {
  color: theme.palette.text.secondary,
  fontSize: '0.875rem', // Adjusted font size for better alignment
};

export const gridContainerStyle = {
  width: '100%',
  maxWidth: '1200px', // Ensures the grid doesn't become too wide on large screens
  // margin: '0 auto', // Center the grid within its container
  gap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
};
