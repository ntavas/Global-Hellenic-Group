import {Box, Button, Grid, styled} from "@mui/material";

export const GridContainer = styled(Grid)({
    minHeight: "100dvh",
    opacity: 0,
    animation: "fadeIn 1s forwards",
    paddingTop: "3rem",
    "@keyframes fadeIn": {
        "from": {
            opacity: 0
        },
        "to": {
            opacity: 1
        }
    },
});

export const HeaderContainer = styled(Box)({
    // flex={1} display="flex" justifyContent="center" alignItems="center"
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
});

export const HomeButton = styled(Button)({
    color: "white",
    fontSize: '14px',
    fontWeight: '400',
    borderRadius: '30px',
    height: '50px',
    width: '140px',
    gap: '10px',
    backgroundColor: '#222222',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '2rem',
    transition: 'width 0.3s ease-in-out', // Transition for button width
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    '&:hover': {
        backgroundColor: '#222222',
        width: '170px', // Increase width on hover
        transition: 'width 0.3s ease-in-out', // Button width transition
    },
    '& .text': {
        marginLeft: '0', // Initial position of the text
        transition: 'margin-left 0.3s ease-in-out', // Transition for text position
    },
    '&:hover .text': {
        marginLeft: '-30px', // Move text to the left on hover
        transition: 'margin-left 0.3s ease-in-out', // Transition for text position on hover
    },
    '& .arrow': {
        position: 'absolute',
        top: '50%',
        right: '0',
        transform: 'translateY(-50%)',
        opacity: '0',
        transition: 'opacity 0.2s',
        paddingRight: '20px',
    },
    '&:hover .arrow': {
        paddingRight: '20px',
        opacity: '1', // Show arrow on hover
        transition: 'opacity 0.5s',
    },
});


export const ImageAndParagraphContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    gap: '1.2rem',
    flex: 1,
    '@media (max-width: 768px)': {
        width: '80%',
        height: 'auto',
        paddingLeft: '10%',
        },
});

export const  HomeImage = styled('img')({
    display:" block",
    maxWidth:"100%",
    maxHeight:"500px",
    width: "100%",
    height: "auto",
    borderRadius: "1.3rem",
    objectFit: "contain",
    '@media (max-width: 768px)': {
        width: '70%',
        marginLeft: '16%',
        height: 'auto',
    },
});