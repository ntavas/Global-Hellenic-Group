import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import strings from "../../assets/context/strings.ts";
import { forwardRef, Ref } from 'react';
import { headerStyle, cardStyle, iconStyle, cardContentStyle, descriptionStyle } from "./AboutStyles.tsx";

interface AboutProps {}

const About = forwardRef((_props: AboutProps, ref: Ref<HTMLDivElement>) => {
  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '2rem',
        padding: '2rem',
        backgroundColor: '#F7F7F7',
        // Removed height: '100vh'
      }}
    >
      <Typography variant="h2" sx={headerStyle}>
        {strings.aboutHeader}
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Card sx={cardStyle}>
            <Box sx={iconStyle}>
              <WorkHistoryOutlinedIcon fontSize="large" />
            </Box>
            <CardContent sx={cardContentStyle}>
              <Typography variant="h5" component="div">
                {strings.aboutAccordionHeader_1}
              </Typography>
              <Typography paragraph sx={descriptionStyle}>
                {strings.aboutAccordionDescription_1}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={cardStyle}>
            <Box sx={iconStyle}>
              <TodayOutlinedIcon fontSize="large" />
            </Box>
            <CardContent sx={cardContentStyle}>
              <Typography variant="h5" component="div">
                {strings.aboutAccordionHeader_2}
              </Typography>
              <Typography paragraph sx={descriptionStyle}>
                {strings.aboutAccordionDescription_2}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
});

export default About;
