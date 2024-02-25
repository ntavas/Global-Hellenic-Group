import {forwardRef, useEffect, useState} from 'react';
import styles from './Home.module.css';
import image from './../../assets/Images/hero-image-people-cleaning.png';
import strings from "../../assets/Context/strings.ts";
import Navbar from "../Navbar/Navbar.tsx";

const Home = (props: any, ref: any) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading delay
        const delay = setTimeout(() => {
            setLoaded(true);
        }, 250);

        return () => clearTimeout(delay);
    }, []);

    return (
        <>
            <Navbar handleNavigation={props.handleNavigation} />
            <div ref={ref} className={`${styles.section}`}>
                <div className={`${styles.container}`}>
                    <div className={`${styles.homeContainer}`}>
                        <div className={`${styles.left} ${loaded && styles.loaded}`}>
                            <img src={image} alt="placeholder" className={`${styles.image}`} />
                        </div>
                        <div className={`${styles.right} ${loaded && styles.loaded}`}>
                            <h1 className={`${styles.headerText}`}>{strings.homeHeader}</h1>
                            <p className={`${styles.heroParagraph}`}>
                                {strings.homeParagraph}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default forwardRef(Home);
