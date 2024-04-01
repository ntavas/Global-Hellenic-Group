import {Box, Stack} from "@mui/material";
import strings from "../../assets/context/strings.ts";
import workersImage from "../../assets/images/work-background.jpg";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {HomeButton, HomeHeader, HomeImage, HomeParagraph} from "./HomeStyledComponents.tsx";
import {SxProps} from "@mui/system/styleFunctionSx";

const Home = () => {

    const containerStyles: SxProps = {
        opacity: 0,
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

    return (
        <Box sx={containerStyles}>
            <Stack spacing={0} direction="column" justifyContent="space-evenly" height="100vh">
                <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                    <HomeHeader>{strings.navBarHeader}</HomeHeader>
                </Box>
                <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                    <Box sx={{ borderRadius: "1.5rem", overflow: "hidden" }}>
                        <HomeImage src={workersImage} alt="image" />
                    </Box>
                </Box>
                <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                    <HomeParagraph>{strings.homeParagraph}</HomeParagraph>
                </Box>
                <Box flex={1} display="flex" justifyContent="center" alignItems="top">
                    <HomeButton>
                        <span className="text">{strings.homeContactUsButton}</span>
                        <ArrowRightAltIcon className="arrow" />
                    </HomeButton>
                </Box>
            </Stack>
        </Box>
    );
};

export default Home;
