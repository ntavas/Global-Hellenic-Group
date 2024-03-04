import styles from "../About/About.module.css";
import strings from "../../assets/context/strings.ts";
import aboutImage from '../../assets/images/about-cleaning-crew.png';


const About = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src={aboutImage} alt="cleaning crew" className={styles.aboutImage}/>
                </div>
                <div className={styles.right}>
                    <h1>{strings.aboutHeader}</h1>
                    <p>{strings.aboutDescription_1}</p>
                    <p>{strings.aboutDescription_2}</p>
                    <p>{strings.aboutDescription_3}</p>
                </div>
            </div>
        </div>
    );
};

export default About;