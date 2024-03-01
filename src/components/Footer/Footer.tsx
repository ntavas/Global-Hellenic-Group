import styles from './Footer.module.css';
import strings from "../../assets/context/strings.ts";
import footerLogo from "../../assets/images/logo-footer.png";

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <img src={footerLogo} alt="Global Hellenic Group footer logo" />
                    </div>
                    <h2 className={styles.header}>
                        {strings.navBarHeader}
                    </h2>
                </div>
                <div className={styles.right}>
                    <div className={styles.navBar}>
                        <p>{strings.footerTextLocation}</p>
                        <p>{strings.footerTextPhone}</p>
                        <p>{strings.footerTextEmail}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;