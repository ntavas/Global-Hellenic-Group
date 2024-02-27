import styles from './Home.module.css';
import homeImage from '../../assets/images/home-full-shot-people-cleaning-building.png';
import doubleArrow from '../../assets/images/double arrow.png';
import Navbar from "../Navbar/Navbar.tsx";
import strings from "../../assets/context/strings.ts";

const Home = () => {
    return (
        <div className={styles.section}>
            <div className={styles.header}> 
                <p className={styles.navbarHeader}>{strings.navBarHeader}</p>
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1 className={styles.title}>{strings.homeHeader}</h1>
                    <p className={styles.description}>{strings.homeParagraph}</p>
                    <div className={styles.homeContactUsButtonContainer}>
                        <button className={styles.homeContactUsButton}>
                            {strings.homeContactUsButton} 
                            <img src={doubleArrow} alt='double-arrow' className={styles.doubleArrow} />
                        </button>
                    </div>
                </div>
                <div className={styles.right}>
                    <Navbar />
                    <img src={homeImage} alt="home-image" className={styles.homeImage} />
                </div>
            </div>
        </div>
    );
};

export default Home;