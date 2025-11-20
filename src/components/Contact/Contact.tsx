import { TextField, Typography } from "@mui/material";
import strings from "../../assets/context/strings";
import { useState, forwardRef, Ref } from "react";
import { ContactPageContainer, LeftContainer, RightContainer, ContactForm, ContactButton } from "./ContactStyledComponents";
import { headerStyles, paragraphStyles } from "./ContactStyles.tsx";

import emailjs from '@emailjs/browser';

interface ContactProps {}

const Contact = (_props: ContactProps, ref: Ref<HTMLDivElement>) => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        company: '',
        email: '',
        telephone: '',
        message: '',
    });

    const [sent, setSent] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setDisabled(true); // Disable form and button after submission
        setStatusMessage(null); // Reset the status message

        // EmailJS service ID, template ID, and user ID from your EmailJS account
        const serviceID = 'service_cbuzn68';
        const templateID = 'template_84cl5yz';
        const userID = 'wSpDF0LVxvYZsCuEr';

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            from_phoneNumber: formData.telephone,
            from_lastName: formData.lastName,
            from_companyName: formData.company,
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                setSent(true);
                setStatusMessage(strings.contactSuccessMessage); // Set success message
            })
            .catch((err) => {
                console.error('Failed to send email:', err);
                setDisabled(false); // Re-enable form if there's an error
                setStatusMessage(strings.contactErrorMessage); // Set error message
            });
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
                            disabled={disabled}
                            required
                        />
                        <TextField
                            label={strings.contactLastName}
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            margin="dense"
                            fullWidth
                            disabled={disabled}
                            required
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
                            disabled={disabled}
                        />
                        <TextField
                            label={strings.contactPhoneNumber}
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            margin="dense"
                            fullWidth
                            required
                            disabled={disabled}
                        />
                        <TextField
                            label={strings.contactCompany}
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            margin="dense"
                            fullWidth
                            disabled={disabled}
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
                            disabled={disabled}
                        />
                        <ContactButton type="submit" variant="contained" disabled={disabled}>
                            {strings.contactButtonSend}
                        </ContactButton>
                    </form>
                    {statusMessage && (
                        <Typography sx={{ marginTop: 2, alignItems: 'center', textAlign: 'center', color: sent ? 'green' : 'red' }}>
                            {statusMessage}
                        </Typography>
                    )}
                </ContactForm>
            </RightContainer>
        </ContactPageContainer>
    );
};

export default forwardRef(Contact);
