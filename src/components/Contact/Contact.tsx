import {TextField, Typography} from "@mui/material";
import strings from "../../assets/context/strings";
import {useState} from "react";
import {ContactPageContainer, LeftContainer, RightContainer, ContactForm, ContactButton} from "./ContactStyledComponents";
import {headerStyles, paragraphStyles} from "./ContactStyles.tsx";
import {forwardRef} from "react";

const Contact = (props: any, ref: any) => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        telephone: '',
        message: '',
    });

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('Form Submitted:', formData);
        // TODO: Add form submission logic here
    };


    return (
        <ContactPageContainer ref={ref} id="contact">
            <LeftContainer>
                <Typography sx={headerStyles} variant="h2">{strings.contactHeader}</Typography>
                <Typography sx={paragraphStyles}>{strings.contactParagraph}</Typography>
            </LeftContainer>
            <RightContainer>
                <ContactForm>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label={strings.contactName}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            margin="dense"
                            fullWidth
                            required
                        />
                        <TextField
                            label={strings.contactLastName}
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            margin="dense"
                            fullWidth
                        />
                        <TextField
                            label={strings.contactEmail}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            margin="dense"
                            fullWidth
                            type="email"
                            required
                        />
                        <TextField
                            label={strings.contactPhoneNumber}
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            margin="dense"
                            fullWidth
                        />
                        <TextField
                            label={strings.contactMessage}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            margin="dense"
                            fullWidth
                            multiline
                            rows={10}
                        />
                        <ContactButton type="submit" variant="contained">
                            {strings.contactButtonSend}
                        </ContactButton>
                    </form>
                </ContactForm>
            </RightContainer>
        </ContactPageContainer>
    );
};

export default forwardRef(Contact);