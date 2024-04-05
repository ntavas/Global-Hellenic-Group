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


const Home = () => {

    return (
        <GridContainer>
            <Stack spacing={3} direction="column" justifyContent="space-evenly">
                <HeaderContainer>
                    <Typography variant={'h2'} sx={headerStyles}>{strings.navBarHeader}</Typography>
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
                    <HomeButton>
                        <span className="text">{strings.homeContactUsButton}</span>
                        <ArrowRightAltIcon className="arrow" />
                    </HomeButton>
                </Box>
            </Stack>
        </GridContainer>
    );
};

export default Home;
