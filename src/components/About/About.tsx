import {forwardRef} from 'react';
import styles from "./About.module.css";

const About = (_props: any, ref: any) => {
    return (
        <div ref={ref} className={styles.section}>
            <div className={styles.container}>
                About
            </div>
        </div>
    );
};

export default forwardRef(About);