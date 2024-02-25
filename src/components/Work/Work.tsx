import {forwardRef} from 'react';
import styles from './Work.module.css';

const Work = (_props: any, ref: any) => {
    return (
        <div ref={ref}>
            <div className={styles.section}>
                <div className={styles.container}>
                    Work
                </div>
            </div>
        </div>
    );
};

export default forwardRef(Work);