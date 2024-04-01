import {Button, styled} from "@mui/material";
import {theme} from "../../theme.tsx";

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
    transition: 'width 0.3s ease-in-out', // Transition for button width
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

export const  HomeParagraph = styled('p')({
    color: theme.palette.text.primary,
    fontSize: '1.3rem',
    width: '35%',
    wordWrap: 'break-word',
    textAlign: 'center',
    '@media (max-width: 768px)': {
        fontSize: '1rem',
        width: '80%',
    },
});

export const  HomeHeader = styled('h1')({
    fontSize: '3.3rem',
    width: '50%',
    wordWrap: 'break-word',
    color: '#E6C82C',
    textAlign: 'center',
    '@media (max-width: 768px)': {
        fontSize: '1.8rem',
        width: '80%',
    },
});

export const  HomeImage = styled('img')({
    display:" block",
    maxWidth:"100%",
    maxHeight:"500px",
    width: "100%",
    height: "auto",
    objectFit: "contain",
    '@media (max-width: 768px)': {
        width: '100%',
        height: 'auto',
    },
});