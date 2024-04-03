import { Box, Stack, Typography } from "@mui/material"
// import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player'
import { containerStyles, descriptionStyles, RowStyles, stackStyles, typographyDescriptionStyles, typographyHeaderStyles, videoContainerStyles } from "./VideoStyles"
import strings from "../../assets/context/strings.ts";


const Video = () => {
  return (
    <Box sx={containerStyles}>
      <Stack sx={stackStyles}>
        <Box sx={RowStyles}>
          <Box sx={videoContainerStyles}>
          {/* <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      title="YouTube video"
                      allowFullScreen={true}
                      style={{
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                      }}>
              </iframe> */}
              <ReactPlayer url='https://www.youtube.com/embed/zpOULjyy-n8?rel=0' width={'100%'} height={'100%'}/>
          </Box>
          <Box sx={descriptionStyles}>
          <Typography variant="h3" sx={typographyHeaderStyles}>{strings.videoHeader_1}</Typography>
            <Typography paragraph sx={typographyDescriptionStyles}>
              {strings.videoDescription_1}
            </Typography>
          </Box>
        </Box>
        <Box sx={RowStyles}>
          <Box sx={descriptionStyles}>
            <Typography variant="h3" sx={typographyHeaderStyles}>{strings.videoHeader_2}</Typography>
            <Typography paragraph sx={typographyDescriptionStyles}>
              {strings.videoDescription_2}
            </Typography>
          </Box>
          <Box sx={videoContainerStyles}>
              {/* <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      title="YouTube video"
                      allowFullScreen={true}
                      style={{
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                      }}>
              </iframe> */}
              <ReactPlayer url='https://www.youtube.com/embed/zpOULjyy-n8?rel=0' width={'100%'} height={'100%'}/>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default Video