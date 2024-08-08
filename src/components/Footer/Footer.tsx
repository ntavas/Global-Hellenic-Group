import {FooterContainer, Left, LogoImage, Right} from "./FooterStyledComponents.tsx";
import {Typography} from "@mui/material";
import {FooterHeader} from "./FooterStyles.tsx";
import strings from "../../assets/context/strings.ts";


const Footer = () => {
    return (
        <FooterContainer>
            <Left>
                <LogoImage src="logo.png" alt="logo" />
                <FooterHeader>{strings.footerHeaderCompanyName}</FooterHeader>
            </Left>
            <Right>
                <Typography>{strings.footerTextLocation}</Typography>
                <Typography>{strings.footerTextPhone}</Typography>
                <Typography>{strings.footerTextEmail}</Typography>
                <Typography>{strings.copyRight}</Typography>
            </Right>
        </FooterContainer>
    );
};

export default Footer;