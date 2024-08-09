import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ReactPlayer from 'react-player';
import { containerStyles, descriptionStyles, RowStyles, stackStyles, typographyDescriptionStyles, typographyHeaderStyles, videoContainerStyles, videoContainerSmallScreenStyles } from "./VideoStyles";
import strings from "../../assets/context/strings.ts";
import { forwardRef, Ref } from "react";

interface VideoProps {}

const Video = (_props: VideoProps, ref: Ref<HTMLDivElement>) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box ref={ref} id="video" sx={containerStyles}>
            <Stack sx={stackStyles}>
                <Box sx={RowStyles}>
                    {isSmallScreen ? (
                        <>
                            <Typography variant="h3" sx={typographyHeaderStyles}>{strings.videoHeader_1}</Typography>
                            <Typography paragraph sx={typographyDescriptionStyles}>
                                {strings.videoDescription_1}
                            </Typography>
                            <Box sx={videoContainerSmallScreenStyles}>
                                <ReactPlayer 
                                    url='https://www.youtube.com/watch?v=_eHAfta-9S0'
                                    width='100%' 
                                    height='100%'
                                    style={{ position: 'absolute', top: 0, left: 0 }} 
                                    controls // Add this line
                                />
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box sx={videoContainerStyles}>
                                <ReactPlayer 
                                    url='https://www.youtube.com/watch?v=_eHAfta-9S0'
                                    width='100%' 
                                    height='100%' 
                                    controls // Add this line
                                />
                            </Box>
                            <Box sx={descriptionStyles}>
                                <Typography variant="h3" sx={typographyHeaderStyles}>{strings.videoHeader_1}</Typography>
                                <Typography paragraph sx={typographyDescriptionStyles}>
                                    {strings.videoDescription_1}
                                </Typography>
                            </Box>
                        </>
                    )}
                </Box>
                <Box sx={RowStyles}>
                    {isSmallScreen ? (
                        <>
                            <Typography variant="h3" sx={typographyHeaderStyles}>{strings.videoHeader_2}</Typography>
                            <Typography paragraph sx={typographyDescriptionStyles}>
                                {strings.videoDescription_2}
                            </Typography>
                            <Box sx={videoContainerSmallScreenStyles}>
                                <ReactPlayer 
                                    url='https://www.youtube.com/watch?v=GCY64tL0f3Q'
                                    width='100%' 
                                    height='100%'
                                    style={{ position: 'absolute', top: 0, left: 0 }} 
                                    controls // Add this line
                                />
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box sx={descriptionStyles}>
                                <Typography variant="h3" sx={typographyHeaderStyles}>{strings.videoHeader_2}</Typography>
                                <Typography paragraph sx={typographyDescriptionStyles}>
                                    {strings.videoDescription_2}
                                </Typography>
                            </Box>
                            <Box sx={videoContainerStyles}>
                                <ReactPlayer 
                                    url='https://www.youtube.com/watch?v=GCY64tL0f3Q'
                                    width='100%' 
                                    height='100%' 
                                    controls // Add this line
                                />
                            </Box>
                        </>
                    )}
                </Box>
            </Stack>
        </Box>
    );
}

export default forwardRef(Video);
