import {forwardRef} from 'react';
import styles from './Contact.module.css';

const Contact = (_props: any, ref: any) => {
    return (
        <div ref={ref} className={styles.section}>
            <div className={styles.container}>
                Contact
            </div>
        </div>
    );
};

export default forwardRef(Contact);