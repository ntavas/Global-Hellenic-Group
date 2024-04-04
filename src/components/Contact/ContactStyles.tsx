import {SxProps} from "@mui/system/styleFunctionSx";
import {theme} from "../../theme.tsx";

export const headerStyles: SxProps = {
    color: "#001122",
    fontWeight: 'bold',
    textAlign: "center",
}

export const paragraphStyles: SxProps = {
    color: theme.palette.text.primary,
    fontSize: "1.2rem",
    width: "70%",
    textAlign: "center",
}