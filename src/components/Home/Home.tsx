import {Box, Stack, Typography} from "@mui/material";
import strings from "../../assets/context/strings.ts";
import workersImage from "../../assets/images/work-background.jpg";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {
    HomeButton,
    HomeImage,
    GridContainer,
    HeaderContainer,
    ImageAndParagraphContainer
} from "./HomeStyledComponents.tsx";
import {headerStyles, paragraphStyles} from "./HomeStyles.tsx";
import Navbar from "../Navbar/Navbar.tsx";
import {forwardRef, Ref} from "react";

interface HomeProps {
    handleNavigation: (page: string) => void;
}


const Home = (props: HomeProps, ref: Ref<HTMLDivElement>) => {

    const handleContactUsClick = () => {
        props.handleNavigation('contact');
    };

    return (
        <>
        <Navbar handleNavigation={props.handleNavigation}/>
        <GridContainer ref={ref} id="home">
            <Stack spacing={3} direction="column" justifyContent="space-evenly">
                <HeaderContainer>
                    <Typography variant={'h1'} sx={headerStyles}>{strings.navBarHeader}</Typography>
                </HeaderContainer>
                <ImageAndParagraphContainer>
                    <Box sx={{ borderRadius: "1.5rem", overflow: "hidden" }}>
                        <HomeImage src={workersImage} alt="image" />
                    </Box>
                    <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                        <Typography sx={paragraphStyles}>{strings.homeParagraph}</Typography>
                    </Box>
                </ImageAndParagraphContainer>
                <Box flex={1} display="flex" justifyContent="center" alignItems="top">
                    <HomeButton onClick={handleContactUsClick}>
                        <span className="text">{strings.homeContactUsButton}</span>
                        <ArrowRightAltIcon className="arrow" />
                    </HomeButton>
                </Box>
            </Stack>
        </GridContainer>
        </>
        
    );
};

export default forwardRef(Home);
