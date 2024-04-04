import { SxProps } from "@mui/system/styleFunctionSx";
import { theme } from "../../theme";


export const containerStyles: SxProps = {
  opacity: 0,
  backgroundColor: "#F7F7F7",
  height: "100vh",
  animation: "fadeIn 1s forwards",
    "@keyframes fadeIn": {
        "from": {
            opacity: 0
        },
        "to": {
            opacity: 1
        }
    }
  }

  export const stackStyles: SxProps = {
    justifyContent: "space-around",
    height: "100vh",
  }

  export const RowStyles: SxProps = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "5rem",
    alignItems: "center",
    flex: 1,
  }

  export const videoContainerStyles: SxProps = {
    width: "30%",
    height: "70%",
    borderRadius: "1rem",
    overflow: "hidden",
    backgroundColor: 'lightblue'
  }

  export const descriptionStyles: SxProps = {
    width: "30%",
    height: "70%",
    display: "flex",
    gap: "3rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  }

  export const typographyHeaderStyles: SxProps = {
    color: "#001122",
    fontWeight: "bold",
  }

  export const typographyDescriptionStyles: SxProps = {
    fontSize: "24px",
    width: "50%",
    color: theme.palette.text.secondary,
  }