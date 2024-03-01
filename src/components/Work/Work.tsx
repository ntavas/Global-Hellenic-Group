import styles from './Work.module.css';
import strings from "../../assets/context/strings.ts";

const Work = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <p className={styles.description}>{strings.workDescription}</p>
                </div>
                <div className={styles.right}>
                {/*  Temporary table -- TODO: replace with  Accordion or Cards */}
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td className={styles.td}>Δάπεδα, μοκέτες, χαλια</td>
                            <td className={styles.td}>4,00€ ανά τ.μ.</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Καρέκλες, πολυθρόνες</td>
                            <td className={styles.td}>5,00-8,00€ ανά τεμάχιο</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Καναπές διθέσιος-τριθέσιος κτλ.</td>
                            <td className={styles.td}>40,00-80,00€ ανά τεμάχιο</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Στρώμα μονό-διπλό</td>
                            <td className={styles.td}>30,00-45,00€ ανά τεμάχιο</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Κουρτίνες σταθερές βαρέως τύπου</td>
                            <td className={styles.td}>Τιμή κατόπιν συνεννοήσεως</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default Work;