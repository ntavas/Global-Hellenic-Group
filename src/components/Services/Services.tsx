import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import WeekendIcon from '@mui/icons-material/Weekend';
import BedIcon from '@mui/icons-material/Bed';
import CurtainsIcon from '@mui/icons-material/Curtains';
import { headerStyle, cardStyle, iconStyle, cardContentStyle, descriptionStyle, gridContainerStyle } from "./ServicesStyles";
import { forwardRef } from 'react';
import { Ref } from 'react';

interface ServicesProps {}

const Services = (_props: ServicesProps, ref: Ref<HTMLDivElement>) => {
  return (
    <Box ref={ref} id="services"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '2rem',
        overflowY: 'auto',
        padding: '2rem',
      }}
    >
      <Typography variant="h2" sx={headerStyle}>
        Υπηρεσίες
      </Typography>
      
      <Grid container spacing={4} sx={gridContainerStyle}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyle}>
            <Box sx={iconStyle}>
              <CleaningServicesIcon fontSize="large" />
            </Box>
            <CardContent sx={cardContentStyle}>
              <Typography variant="h6" component="div">
                Δάπεδα, μοκέτες, χαλιά
              </Typography>
              <Typography paragraph sx={descriptionStyle}>
                4,00 € ανά τ.μ.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyle}>
            <Box sx={iconStyle}>
              <EventSeatIcon fontSize="large" />
            </Box>
            <CardContent sx={cardContentStyle}>
              <Typography variant="h6" component="div">
                Καρέκλες, πολυθρόνες
              </Typography>
              <Typography paragraph sx={descriptionStyle}>
                5,00-8,00 € ανά τεμάχιο <br />
                Ανάλογα το μέγεθος
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyle}>
            <Box sx={iconStyle}>
              <WeekendIcon fontSize="large" />
            </Box>
            <CardContent sx={cardContentStyle}>
              <Typography variant="h6" component="div">
                Καναπές διθέσιος-τριθέσιος κτλ.
              </Typography>
              <Typography paragraph sx={descriptionStyle}>
                40,00-80,00 € ανά τεμάχιο <br />
                Ανάλογα το μέγεθος
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyle}>
            <Box sx={iconStyle}>
              <BedIcon fontSize="large" />
            </Box>
            <CardContent sx={cardContentStyle}>
              <Typography variant="h6" component="div">
                Στρώμα μονό-διπλό
              </Typography>
              <Typography paragraph sx={descriptionStyle}>
                30,00-45,00 € ανά τεμάχιο
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={8}> {/* This makes the last card span across two columns */}
          <Card sx={cardStyle}>
            <Box sx={iconStyle}>
              <CurtainsIcon fontSize="large" />
            </Box>
            <CardContent sx={cardContentStyle}>
              <Typography variant="h6" component="div">
                Κουρτίνες σταθερές βαρέως τύπου
              </Typography>
              <Typography paragraph sx={descriptionStyle}>
                Τιμή κατόπιν συνεννόησης
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="body2" sx={{ marginTop: '2rem', textAlign: 'center', color: '#888888' }}>
        *Οι παραπάνω τιμές δεν περιλαμβάνουν Φ.Π.Α. <br />
        Ανάλογα τον όγκο των εργασιών η εταιρία μας προσφέρει στην επιχείρησή σας έκπτωση έως και 50% σε όλο τον τιμοκατάλογο.
      </Typography>
    </Box>
  );
};

export default forwardRef(Services);
