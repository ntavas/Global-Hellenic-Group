import styles from './Contact.module.css';
import strings from "../../assets/context/strings.ts";
import Footer from "../Footer/Footer.tsx";


const Contact = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.contactParagraph}>
                    <p>{strings.contactUsParagraph}</p>
                </div>
                <div className={styles.contactForm}>
                    <form>
                        <div className={styles.row}>
                            <div className={styles.column}>
                                <label htmlFor="name">{strings.contactName}</label>
                                <input type="text" id="name" name="name" placeholder={strings.contactName} required/>
                            </div>
                            <div className={styles.column}>
                                <label htmlFor="surname">{strings.contactLastName}</label>
                                <input type="text" id="surname" name="lastName" placeholder={strings.contactLastName} required/>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.column}>
                                <label htmlFor="email">{strings.contactEmail}</label>
                                <input type="email" id="email" name="email" placeholder={strings.contactEmail} required/>
                            </div>
                            <div className={styles.column}>
                                <label htmlFor="phone">{strings.contactPhoneNumber}</label>
                                <input type="tel" id="phone" name="phone" placeholder={strings.contactPhoneNumber}/>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.column}>
                                <label htmlFor="message">{strings.contactMessage}</label>
                                <textarea rows={26} className={styles.message} id="message" name="message" placeholder={strings.contactMessagePlaceHolder} maxLength={4000}/>
                            </div>
                        </div>
                        <button className={styles.contactFormButton} type="submit">
                            {strings.contactButtonSend}
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;