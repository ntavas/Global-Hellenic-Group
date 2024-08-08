import {Box, Typography, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import strings from "../../assets/context/strings.ts";
import { AccordionContainer } from "./AboutStyledComponents.tsx";
import { accordionStyle, accordionSummaryStyle, headerStyle } from "./AboutStyles.tsx";
import {forwardRef, Ref} from 'react';

interface AboutProps {
}

const About = forwardRef((_props: AboutProps, ref: Ref<HTMLDivElement>) => {

  return (
    <Box ref={ref} sx={{
      height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'top',
        gap: '25%',
    }}>
      <Typography variant="h2" sx={headerStyle}>Η Εταιρία μας</Typography>
      <AccordionContainer>
        <Accordion sx={accordionStyle}>
          <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
              expandIcon={<ExpandMoreIcon />}>
            <Typography sx={accordionSummaryStyle}>{strings.aboutAccordionHeader_1}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                {strings.aboutAccordionDescription_1}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion  sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header">
            <Typography sx={accordionSummaryStyle}>{strings.aboutAccordionHeader_2}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                {strings.aboutAccordionDescription_2}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion  sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography sx={accordionSummaryStyle}>{strings.aboutAccordionHeader_3}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {strings.aboutAccordionDescription_3}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </AccordionContainer>
    </Box>
  );
})

export default About;
