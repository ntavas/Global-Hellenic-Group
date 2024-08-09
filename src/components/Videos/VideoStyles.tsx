import { SxProps } from "@mui/system/styleFunctionSx";
import { theme } from "../../theme";

export const containerStyles: SxProps = {
  opacity: 0,
  backgroundColor: "#F7F7F7",
  minHeight: "100vh",
  animation: "fadeIn 1s forwards",
  "@keyframes fadeIn": {
    "from": { opacity: 0 },
    "to": { opacity: 1 }
  },

  [theme.breakpoints.down('md')]: {
    minHeight: "150vh",
  }
};

export const stackStyles: SxProps = {
  justifyContent: "space-around",
  height: "100vh",

};

export const RowStyles: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "5rem",
  alignItems: "center",
  flex: 1,
  [theme.breakpoints.down('md')]: {
    flexDirection: "column",
    gap: "1rem",
  }
};

export const videoContainerStyles: SxProps = {
  width: "30%",
  height: "70%",
  borderRadius: "2.5rem",
  overflow: "hidden",
  // backgroundColor: 'lightblue',
};

export const videoContainerSmallScreenStyles: SxProps = {
  width: "80%",
  position: "relative",
  paddingTop: "56.25%", // 16:9 aspect ratio
  borderRadius: "2.5rem",
  overflow: "hidden",
  // backgroundColor: 'lightblue',
  marginBottom: "1rem",
};

export const descriptionStyles: SxProps = {
  width: "30%",
  height: "70%",
  display: "flex",
  gap: "3rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  [theme.breakpoints.down('md')]: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    textAlign: "center",
  }
};

export const typographyHeaderStyles: SxProps = {
  color: "#001122",
  fontWeight: "bold",
  [theme.breakpoints.down('md')]: {
    fontSize: "28px",
    marginTop: "1rem",
  },
};

export const typographyDescriptionStyles: SxProps = {
  fontSize: {
    lg: '1.2rem',
    xl: '1.3rem',
  },
  width: "50%",
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('md')]: {
    width: "80%",
    justifyContent: "center",
    textAlign: "center",
  }
};
